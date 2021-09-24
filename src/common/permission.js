/*
  Author: Rina Chua
  Date: 24 Sep 2021
*/

import _ from 'lodash';
import Products from 'views/products';
import Electronic from 'views/products/electronic';
import Groceries from 'views/products/groceries';
import Men from 'views/products/men';
import Sports from 'views/products/sports';
import Women from 'views/products/women';
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
    component: Women, 
    appearAt: appear.HEADER,
  }, 
  MEN: {
    key: 'MEN',
    text: 'Men',
    link: '/men',
    component: Men, 
    appearAt: appear.HEADER,
  },
  SPORTS: {
    key: 'SPORTS',
    text: 'Sports',
    link: '/sports',
    component: Sports, 
    appearAt: appear.HEADER,
  },
  ELECTRONIC: {
    key: 'ELECTRONIC',
    text: 'Electronic',
    link: '/electronic',
    component: Electronic, 
    appearAt: appear.HEADER,
  },
  GROCERIES: {
    key: 'GROCERIES',
    text: 'Groceries',
    link: '/groceries',
    component: Groceries, 
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