import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {getHeader, appear} from 'common/permission';
import Header from 'components/header';

const MainLayout = () => {
    const headerMenu = getHeader(appear.HEADER);

    return (
        <Fragment>
            <Header />
            <BrowserRouter>
                <Switch>
                    {headerMenu.map((item) => (
                        <Route key={`${item.key}-${item.href}`} path={item.link} component={item.component} />
                    ))}
                </Switch>
            </BrowserRouter>
        </Fragment>
    ); 
}

export default MainLayout;