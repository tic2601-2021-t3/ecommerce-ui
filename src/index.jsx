/*
  Author: Rina Chua
  Date: 26 Sep 2021
*/

import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#EB5328',
        },
        contained: {
          color: '#FFF',
        }
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: '#EB5328',
          minWidth: '350px',
          width: '100%',
        },
        input: {
          color: '#333',
        },
        underline: {
          minWidth: '350px',
          width: '100%',
        }
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: '1.25rem',
          textTransform: 'none',
          fontFamily: 'inherit',
          width: '50%',
          selected: {
            color: '#EB5328',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#EB5328',
      light: '#F9DDCE',
    },
  },
  typography: {
    body1: {
      fontFamily: 'Roboto',
    },
    body2: {
      fontFamily: 'Open Sans',
    },
    button: {
      fontFamily: 'Roboto',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
