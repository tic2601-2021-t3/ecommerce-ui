/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {views} from 'common/permission';
import SideBar from 'layouts/merchant-layout/sidebar';
import Dashboard from 'views/dashboard';
import Products from 'views/products';
import ProductDetails from 'views/products/product-details';
import AddProduct from 'views/products/add-product';
import EditProduct from 'views/products/edit-product';

const MerchantLayout = () => {

    return (
        <Fragment>
            <SideBar />
            <BrowserRouter forceRefresh={true}>
                <Switch>
                    <Route exact path={views.DASHBOARD.link} component={Dashboard}/>
                    <Route exact path={views.PRODUCTS.link} component={Products}/>
                    <Route exact path={views.PRODUCT_DETAILS.link} component={ProductDetails}/>
                    <Route exact path={views.ADD_PRODUCT.link} component={AddProduct}/>
                    <Route exact path={views.EDIT_PRODUCT.link} component={EditProduct}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    ); 
}

export default MerchantLayout;