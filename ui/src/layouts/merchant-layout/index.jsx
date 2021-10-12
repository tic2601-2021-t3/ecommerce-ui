/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {views, getHeader, appear} from 'common/permission';
import Header from 'layouts/header';
import SideBar from 'layouts/sidebar';
import Login from 'views/user';
import AddProduct from 'views/products/add-product';

const MerchantLayout = () => {
    const headerMenu = getHeader(appear.HEADER);

    return (
        <Fragment>
            <SideBar />
            <BrowserRouter forceRefresh={true}>
                <Switch>
                    {headerMenu.map((item) => (
                        <Route key={`${item.key}-${item.href}`} exact path={item.link} component={item.component} />
                    ))}
                    <Route exact path={views.ADD_PRODUCT.link} component={AddProduct}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    ); 
}

export default MerchantLayout;