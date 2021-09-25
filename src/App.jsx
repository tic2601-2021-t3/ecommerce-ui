/*
  Author: Rina Chua
  Date: 24 Sep 2021
*/

import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {views} from 'common/permission';
import Header from 'components/header';

import Login from 'views/login';
import './App.module.scss';

const App = () => {
  return (
    <Fragment>
      <Header/>
      <BrowserRouter forceRefresh={true}>
        <Switch>
          <Route exact path={views.LOGIN.link} component={Login}/>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
