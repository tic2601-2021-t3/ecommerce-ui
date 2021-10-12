/*
  Author: Rina Chua
  Date: 24 Sep 2021
*/

import React, {Fragment} from 'react';
import MainLayout from 'layouts/main-layout';
import MerchantLayout from 'layouts/merchant-layout';
import './App.module.scss';

const App = () => {
  return (
    <Fragment>
      <MainLayout/>
      <MerchantLayout/>
    </Fragment>
  );
}

export default App;
