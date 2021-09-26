/*
  Author: Rina Chua
  Date: 24 Sep 2021
*/

import _ from 'lodash';
import Products from 'views/products';
import Login from 'views/login';

export const appear = {
  HEADER: 'HEADER',
};

export const views = {
  PRODUCTS: {
    key: 'PRODUCTS',
    text: 'Products',
    link: '/',
    component: Products, 
    appearAt: null,
  },
  WOMEN: {
    key: 'WOMEN',
    text: 'Women',
    link: '/women',
    component: null, 
    appearAt: appear.HEADER,
  }, 
  MEN: {
    key: 'MEN',
    text: 'Men',
    link: '/men',
    component: null, 
    appearAt: appear.HEADER,
  },
  SPORTS: {
    key: 'SPORTS',
    text: 'Sports',
    link: '/sports',
    component: null, 
    appearAt: appear.HEADER,
  },
  ELECTRONIC: {
    key: 'ELECTRONIC',
    text: 'Electronic',
    link: '/electronic',
    component: null, 
    appearAt: appear.HEADER,
  },
  GROCERIES: {
    key: 'GROCERIES',
    text: 'Groceries',
    link: '/groceries',
    component: null, 
    appearAt: appear.HEADER,
  },
  LOGIN: {
    key: 'LOGIN',
    text: 'Login',
    link: '/login',
    component: Login, 
    appearAt: null,
  }
};

export const roles = [
  {
    id: 1,
    text: 'Admin',
    canView: [],
    canEdit: [

    ],
  },
  {
    id: 2,
    text: 'Merchant',
    canView: [],
    canEdit: [
      
    ],
  },
  {
    id: 3,
    text: 'Customer',
    canView: [
    ],
    canEdit: [

    ],
  }
];

export const getHeader = (location) => {
  const headerItems = [];
  Object.keys(views).forEach(i => {
    if (location === views[i].appearAt && views[i].appearAt === appear.HEADER)
      headerItems.push(views[i]);
  });
  return headerItems;
}