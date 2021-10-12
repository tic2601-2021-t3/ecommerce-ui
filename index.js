/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const { https } = require('follow-redirects');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const axios = require('axios-https-proxy-fix');
const FormData = require('form-data');
const fileUpload = require('express-fileupload');
const helmet = require('helmet');
const _ = require('lodash');

const followRedirects = require('follow-redirects');
followRedirects.maxBodyLength = 15 * 1024 * 1024;
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, splat, simple, colorize, json, metadata, label } = format;

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
    splat(),
    simple()
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
    splat(),
    metadata({
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

const csrfProtection = csrf({
  cookie: true
});

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
app.use(helmet.noCache());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
const hstsMaxAge = 31536000;
app.use(
  helmet.hsts({
    maxAge: hstsMaxAge
  })
);
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'ui/build')));
app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
  })
);
app.use(bodyParser.json());

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

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  res.header('Access-Control-Allow-Credentials', true);
  res.send(200);
  next();
});

app.post('/*', (req, res) => {
  logger.info(req.originalUrl);
  res.send('POST Request Called', req.originalUrl);
});

app.get('/*', (req, res) => {
  logger.info(req.originalUrl);
  res.send('GET Request Called', req.originalUrl);
});

app.delete('/*', (req, res) => {
  logger.info(req.originalUrl);
  res.send('DELETE Request', req.originalUrl);
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
