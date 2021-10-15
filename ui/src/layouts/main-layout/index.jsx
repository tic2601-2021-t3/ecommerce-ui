/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {views, getHeader, appear} from 'common/permission';
import Header from 'layouts/header';
import Login from 'views/login';
import ProductDetails from 'views/products/product-details';

const MainLayout = () => {
    const headerMenu = getHeader(appear.HEADER);

    return (
        <Fragment>
            <Header />
            <BrowserRouter forceRefresh={true}>
                <Switch>
                    {headerMenu.map((item) => (
                        <Route key={`${item.key}-${item.href}`} exact path={item.link} component={item.component} />
                    ))}
                    <Route exact path={views.LOGIN.link} component={Login}/>
                    <Route exact path={views.PRODUCT_DETAILS.link} component={ProductDetails}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    ); 
}

export default MainLayout;