/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const {https} = require('follow-redirects');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const path = require('path');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const axios = require('axios-https-proxy-fix');
const helmet = require('helmet');
const noCache = require('nocache');
const _ = require('lodash');
const followRedirects = require('follow-redirects');
  followRedirects.maxBodyLength = 15 * 1024 * 1024;
const {createLogger, format, transports} = require('winston');
const {combine, timestamp, splat, simple, colorize, json, metadata, label} = format;

const logFormat = format.printf(info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`);

const logger = createLogger({
  level: 'info',
  format: combine(
    label({
      label: path.basename(process.mainModule.filename)
    }),
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    splat(), simple()
  ),
  transports: [
    new transports.Console({
      format: combine(colorize(), logFormat)
    }),
    new transports.File({
      filename: 'combined.log',
      format: combine(json(), logFormat)
    })
  ],
  exitOnError: false
});

const errorLogger = createLogger({
  level: 'debug',
  format: combine(
    label({
      label: path.basename(process.mainModule.filename)
    }),
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    splat(), metadata({
      fillExcept: ['message', 'level', 'timestamp', 'label']
    })
  ),
  transports: [
    new transports.File({
      filename: 'error.log',
      level: 'error',
      format: combine(json())
    })
  ],
  exitOnError: false
});

const er = (text, obj) => {
  logger.error('[%s] ==> %s', text, obj.message);
  errorLogger.error('[%s] ==============================', text, obj);
};

const app = express();
logger.info('Running mode: %s', process.env.NODE_ENV);
let config = require('./config/production.json');

if (fs.existsSync('./config/development.json')) {
  config = require('./config/development.json');
}

let options = null;
let server = null;
let httpsAgent = null;

const csrfProtection = csrf({cookie: true});

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", 'https://fonts.googleapis.com', "'unsafe-inline'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      fontSrc: ["'self'", 'https://fonts.gstatic.com', '* data:'],
      imgSrc: ["'self'", '* data:']
    }
  })
);

app.disable('x-powered-by');
app.use(cors());
app.use(noCache());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
const hstsMaxAge = 31536000;
app.use(helmet.hsts({maxAge: hstsMaxAge}));
app.use(express.static(path.join(__dirname, 'ui/build')));
app.use(cookieParser());
app.use(express.urlencoded({extended: true})); 
app.use(express.json());   

const baseOpt = {
  maxContentLength: Infinity,
  maxBodyLength: Infinity
};
if (httpsAgent) {
  baseOpt.httpsAgent = httpsAgent;
}
const caller = axios.create(baseOpt);

const onStart = () => {
  const host = server.address().address;
  const port = server.address().port;
  if (options) {
    logger.info('Listening at http://%s:%s', host, port);
  } else {
    logger.info('Listening at http://%s:%s', host, port);
  }
};

app.get('/*', csrfProtection, function(req, res, next) {
  if (req.originalUrl.indexOf('/api') < 0) {
    const csrfToken = req.csrfToken();
    logger.info('csrfToken:%s', csrfToken);
    res.cookie('XSRF-TOKEN', csrfToken);
    res.sendFile(path.join(__dirname, 'ui/build', 'index.html'));
  } else {
    next();
  }
});

app.post('/*', csrfProtection, function(req, res) {
  try {
    const opts = {headers: req.headers};
    logger.info('POST - %s', req.originalUrl);
    caller
      .post(config.PYTHON_URL + ':' + config.PYTHON_PORT + req.originalUrl, req.body, opts)
      .then(function(response) {res.json(response.data);})
  } catch (error) {
    er('Error while posting data to PYTHON server', error);
  }
});

app.get('/*', function(req, res) {
  try {
    const opts = {headers: req.headers};
    logger.info('GET - %s', req.originalUrl);
    caller
      .get(config.PYTHON_URL + ':' + config.PYTHON_PORT + req.originalUrl, opts)
      .then(function(response) {res.json(response.data);})
  } catch (error) {
    er('Error while sending GET data to PYTHON server', error);
  }
});

try {
  if (options) {
    server = https.createServer(options, app).listen(config.FE_PORT, '0.0.0.0', onStart);
  } else {
    server = app.listen(config.FE_PORT, '0.0.0.0', onStart);
  }
} catch (error) {
  er('Can not start the NodeJS server', error);
}
