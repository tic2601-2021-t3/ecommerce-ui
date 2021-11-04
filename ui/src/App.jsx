/*
  Author: Rina Chua
  Date: 24 Sep 2021
*/

import React, {Fragment, useState} from 'react';
import _ from 'lodash';

import {AuthContext} from 'common/useAuthentication';
import {CartContext} from 'common/useCart';
import MainLayout from 'layouts/main-layout';
import MerchantLayout from 'layouts/merchant-layout';
import AdminLayout from 'layouts/admin-layout';

import './App.module.scss';

const App = () => {
  // Login Storage
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

  // Cart Storage
  const cartBytes =
    localStorage.getItem('cartItem') &&
    localStorage.getItem('cartItem') !== 'undefined';
  const curCart = cartBytes && JSON.parse(cartBytes);
  const [cart, setCart] = useState(curCart);
  const setValueToCart = (data) => {
    // check if current localstorage have data, if there is data create new array 
    if (localStorage.getItem('cartItem') !== null && localStorage.getItem('cartItem') !== 'undefined') {
      var curCartItems;
      var newCartItems = [];
      var resCartItems;
      
      //curent localstorage in array
      curCartItems = JSON.parse(localStorage.getItem('cartItem')); 
      newCartItems.push(data);
      
      // merge the two arrays together and parse it into localstorage
      resCartItems = curCartItems.concat(newCartItems); 
      localStorage.setItem('cartItem', JSON.stringify(resCartItems));
    } else { // if no data 
      var cartItems = [];
      cartItems.push(data);
      localStorage.setItem('cartItem', JSON.stringify(cartItems));
    }
  };
  
  return (
    <Fragment>
      <AuthContext.Provider value={{authUser, setAuthTokens: setTokens}}>
        <CartContext.Provider value={{cart, setCart: setValueToCart}}>
            {(authUser !== true || (authUser === true && JSON.parse(sessionStorage.getItem('email')).userType === 3)) && <MainLayout/>}
          {authUser === true && JSON.parse(sessionStorage.getItem('email')).userType === 2 && <MerchantLayout/>}
        </CartContext.Provider>
        {authUser === true && JSON.parse(sessionStorage.getItem('email')).userType === 1 && <AdminLayout/>}
      </AuthContext.Provider>
    </Fragment>
  );
}

export default App;
