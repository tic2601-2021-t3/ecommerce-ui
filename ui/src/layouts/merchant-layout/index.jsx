/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {views, getHeader, appear} from 'common/permission';
import SideBar from 'layouts/merchant-layout/sidebar';
import Dashboard from 'views/dashboard';
import Products from 'views/products';
import AddProduct from 'views/products/add-product';

const MerchantLayout = () => {
    // const headerMenu = getHeader(appear.HEADER);

    return (
        <Fragment>
            <SideBar />
            <BrowserRouter forceRefresh={true}>
                <Switch>
                    <Route exact path={views.DASHBOARD.link} component={Dashboard}/>
                    <Route exact path={views.PRODUCTS.link} component={Products}/>
                    <Route exact path={views.ADD_PRODUCT.link} component={AddProduct}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    ); 
}

export default MerchantLayout;