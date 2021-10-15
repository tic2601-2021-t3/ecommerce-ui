/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {views} from 'common/permission';
import SideBar from 'layouts/admin-layout/sidebar';
import UserManagement from 'views/user-management';

const AdminLayout = () => {
    return (
        <Fragment>
            <SideBar />
            <BrowserRouter forceRefresh={true}>
                <Switch>
                    <Route exact path={views.USER_MANAGEMENT.link} component={UserManagement}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    ); 
}

export default AdminLayout;