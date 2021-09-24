/*
  Author: Rina Chua
  Date: 24 Sep 2021
*/

import _ from 'lodash';
import useApiRequest from './useApiRequest';

const useRequest = (
  endpoint, {
    verb = 'get',
    params = {},
    config = {}
  } = {}
) => {
  const FETCHING = `${endpoint}-${verb}-FETCHING`;
  const SUCCESS = `${endpoint}-${verb}-SUCCESS`;
  const ERROR = `${endpoint}-${verb}-ERROR`;

  const fetching = () => ({
    type: FETCHING
  });
  const success = response => ({
    type: SUCCESS,
    response
  });
  const error = response => ({
    type: ERROR,
    response
  });

  const initialState = {
    status: null,
    response: null
  };

  const reducer = (state = initialState, {
    type,
    response
  } = {}) => {
    switch (type) {
      case FETCHING:
        return {
          ...initialState, status: FETCHING
        };
      case SUCCESS:
        return {
          ...state, status: SUCCESS, response
        };
      case ERROR:
        return {
          ...state, status: ERROR, response
        };
      default:
        return state;
    }
  };
  const [newState, makeRequest, source] = useApiRequest(
    endpoint, {
      verb,
      params,
      config
    }, {
      reducer,
      initialState,
      fetching,
      success,
      error
    }
  );

  return [newState, makeRequest, {
    FETCHING,
    SUCCESS,
    ERROR
  }, source];
};

export default useRequest;
