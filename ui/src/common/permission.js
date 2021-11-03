/*
  Author: Rina Chua
  Date: 24 Sep 2021
*/

import Login from 'views/login';
import Products from 'views/products';
import ProductDetails from 'views/products/product-details';
import Cart from 'views/products/product-details/cart';
import Checkout from 'views/products/product-details/cart';
import Men from 'views/products/men';
import Food from 'views/products/food';
import Books from 'views/products/books';
import Garden from 'views/products/garden';
import Technology from 'views/products/tech';
import AddProduct from 'views/products/add-product';
import EditProduct from 'views/products/product-details/edit-product';
import Orders from 'views/orders';
import OrderDetails from 'views/orders/order-details';
import Dashboard from 'views/dashboard';
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
  CART: {
    key: 'CART',
    text: 'Cart',
    link: `/cart`,
    component: Cart, 
    appearAt: null,
  },
  CHECKOUT: {
    key: 'CHECKOUT',
    text: 'Check Out',
    link: `/checkout`,
    component: Checkout, 
    appearAt: null,
  },
  MEN: {
    key: 'MEN',
    text: 'Men',
    link: '/men',
    component: Men, 
    appearAt: appear.HEADER,
  },
  FOOD_AND_BEV: {
    key: 'FOOD_AND_BEV',
    text: 'Food & Beverages',
    link: '/food-and-beverages',
    component: Food, 
    appearAt: appear.HEADER,
  },
  GARDEN: {
    key: 'GARDEN',
    text: 'Garden',
    link: '/garden',
    component: Garden, 
    appearAt: appear.HEADER,
  },
  BOOKS_AND_COMICS: {
    key: 'BOOKS_AND_COMICS',
    text: 'Books & Comics',
    link: '/books-and-comics',
    component: Books, 
    appearAt: appear.HEADER,
  },
  TECHNOLOGY: {
    key: 'TECHNOLOGY',
    text: 'Technology',
    link: '/technology',
    component: Technology, 
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
  ORDERS: {
    key: 'ORDERS',
    text: 'Orders',
    link: `/orders`,
    component: Orders, 
    appearAt: null,
  },
  ORDER_DETAILS: {
    key: 'ORDER_DETAILS',
    text: 'Order Details',
    link: `/orders/orderId=${id}`,
    component: OrderDetails, 
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
