/*
  Author: Rina Chua
  Date: 24 Sep 2021
*/

import Products from 'views/products';
import Login from 'views/user';
import AddProduct from 'views/products/add-product';
import Dashboard from 'views/dashboard';

export const appear = {
  HEADER: 'HEADER',
};

export const views = {
  LOGIN: {
    key: 'LOGIN',
    text: 'Login',
    link: '/login',
    component: Login, 
    appearAt: null,
    userAccess: [
      'Merchant'
    ],
  },
  PRODUCTS: {
    key: 'PRODUCTS',
    text: 'Home',
    link: '/',
    component: Products, 
    appearAt: appear.HEADER,
    userAccess: [
      'Merchant'
    ],
  },
  WOMEN: {
    key: 'WOMEN',
    text: 'Women',
    link: '/women',
    component: null, 
    appearAt: appear.HEADER,
    userAccess: [
      'User'
    ],
  },
  MEN: {
    key: 'MEN',
    text: 'Men',
    link: '/men',
    component: null, 
    appearAt: appear.HEADER,
    userAccess: [
      'User'
    ],
  },
  FOOD_AND_BEV: {
    key: 'FOOD_AND_BEV',
    text: 'Food & Beverages',
    link: '/food-and-beverages',
    component: null, 
    appearAt: appear.HEADER,
    userAccess: [
      'User'
    ],
  },
  GARDEN: {
    key: 'GARDEN',
    text: 'Garden',
    link: '/garden',
    component: null, 
    appearAt: appear.HEADER,
    userAccess: [
      'User'
    ],
  },
  BOOKS_AND_COMICS: {
    key: 'BOOKS_AND_COMICS',
    text: 'Books & Comics',
    link: '/books-and-comics',
    component: null, 
    appearAt: appear.HEADER,
    userAccess: [
      'User'
    ],
  },
  TECHNOLOGY: {
    key: 'TECHNOLOGY',
    text: 'Technology',
    link: '/technology',
    component: null, 
    appearAt: appear.HEADER,
    userAccess: [
      'User'
    ],
  },
  ADD_PRODUCT: {
    key: 'ADD_PRODUCT',
    text: 'Add Product',
    link: '/add-product',
    component: AddProduct, 
    appearAt: null,
    userAccess: [
      'Merchant'
    ],
  },
  DASHBOARD: {
    key: 'DASHBOARD',
    text: 'Dashboard',
    link: '/dashboard',
    component: Dashboard, 
    appearAt: null,
    userAccess: [
      'Merchant'
    ],
  },
};

export const getHeader = (location) => {
  const headerItems = [];
  Object.keys(views).forEach(i => {
    if (location === views[i].appearAt && views[i].appearAt === appear.HEADER)
      headerItems.push(views[i]);
  });
  return headerItems;
}

export const getMerchant = (location) => {

};