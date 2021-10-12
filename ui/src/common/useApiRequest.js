/*
  Author: Rina Chua
  Date: 24 Sep 2021
*/

import {
    useReducer
  } from 'react';
  import axios from 'axios';
  import _ from 'lodash';
  
  import {
    toast
  } from 'react-toastify';
  import API_URL from 'common/urls';
  
  const useApiRequest = (
    endpoint, {
      verb = 'get',
      params = {},
      config = {}
    } = {}, {
      reducer,
      initialState,
      fetching,
      success,
      error
    }
  ) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const source = axios.CancelToken.source();
    const makeRequest = () => {
      dispatch(fetching());
      let response;
      if (_.includes('get;delete;head', verb)) {
        response = axios[verb](endpoint, _.merge(config, {
          params: {
            time: Date.now()
          }
        }));
      } else {
        response = axios[verb](endpoint, params, config);
      }
  
      return response
        .then(response => dispatch(success(response.data)))
        .catch(e => {
          if (e.response) {
            if (
              e.response.data &&
              e.response.data.header &&
              e.response.data.header.code &&
              parseInt(e.response.data.header.code, 10) === 7001
            ) {
              toast.error('Your session is expired. You are being redirected to Login page ...');
              setTimeout(() => {
                axios['get'](API_URL.LOGIN_URL, {
                  headers: config.headers
                }).finally(() => {
                  window.location.href = '/login';
                });
              }, 4000);
            } else {
              dispatch(error(e.response.data));
            }
          } else {
            toast.error(`Error: ${e.message}`);
          }
        });
    };
    return [state, makeRequest, source];
  };
  
  export default useApiRequest;
  