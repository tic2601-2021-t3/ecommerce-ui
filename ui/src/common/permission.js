/*
  Author: Rina Chua
  Date: 24 Sep 2021
*/

import Products from 'views/products';
import Login from 'views/login';
import AddProduct from 'views/products/add-product';
import EditProduct from 'views/products/edit-product';
import Dashboard from 'views/dashboard';
import ProductDetails from 'views/products/product-details';
import UserManagement from 'views/user-management';

const url = window.location.href;
const id = url.substring(url.indexOf('=') + 1);

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
  },
  PRODUCTS: {
    key: 'PRODUCTS',
    text: 'Home',
    link: '/',
    component: Products, 
    appearAt: appear.HEADER,
  },
  PRODUCT_DETAILS: {
    key: 'PRODUCT_DETAILS',
    text: 'Product Details',
    link: `/productId=${id}`,
    component: ProductDetails, 
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
  FOOD_AND_BEV: {
    key: 'FOOD_AND_BEV',
    text: 'Food & Beverages',
    link: '/food-and-beverages',
    component: null, 
    appearAt: appear.HEADER,
  },
  GARDEN: {
    key: 'GARDEN',
    text: 'Garden',
    link: '/garden',
    component: null, 
    appearAt: appear.HEADER,
  },
  BOOKS_AND_COMICS: {
    key: 'BOOKS_AND_COMICS',
    text: 'Books & Comics',
    link: '/books-and-comics',
    component: null, 
    appearAt: appear.HEADER,
  },
  TECHNOLOGY: {
    key: 'TECHNOLOGY',
    text: 'Technology',
    link: '/technology',
    component: null, 
    appearAt: appear.HEADER,
  },
  ADD_PRODUCT: {
    key: 'ADD_PRODUCT',
    text: 'Add Product',
    link: '/add-product',
    component: AddProduct, 
    appearAt: null,
  },
  EDIT_PRODUCT: {
    key: 'EDIT_PRODUCT',
    text: 'Edit Product',
    link: '/edit-product',
    component: EditProduct, 
    appearAt: null,
  },
  DASHBOARD: {
    key: 'DASHBOARD',
    text: 'Dashboard',
    link: '/dashboard',
    component: Dashboard, 
    appearAt: null,
  },
  USER_MANAGEMENT: {
    key: 'USER_MANAGEMENT',
    text: 'User Management',
    link: '/user-management',
    component: UserManagement, 
    appearAt: null,
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
