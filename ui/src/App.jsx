/*
  Author: Rina Chua
  Date: 24 Sep 2021
*/

import React, {Fragment, useState} from 'react';
import MainLayout from 'layouts/main-layout';
import MerchantLayout from 'layouts/merchant-layout';
import {AuthContext} from 'common/useAuthentication';
import _ from 'lodash';

import './App.module.scss';

const App = () => {
  const bytes =
    sessionStorage.getItem('email') &&
    sessionStorage.getItem('email') !== 'undefined';

  const curUser = bytes && JSON.parse(bytes);
  const [authUser, setAuthTokens] = useState(curUser);

  const setTokens = (data) => {
    if (!_.isEmpty(data)) {
      sessionStorage.setItem('email', JSON.stringify(data));
      setAuthTokens(data);
    } else {
      sessionStorage.removeItem('email');
    }
  };

  return (
    <Fragment>
      <AuthContext.Provider value={{authUser, setAuthTokens: setTokens}}>
        {authUser !== true && <MainLayout/>}
        {authUser === true && JSON.parse(sessionStorage.getItem('email')).userType === 'Merchant' && <MerchantLayout/>}
      </AuthContext.Provider>
    </Fragment>
  );
}

export default App;
