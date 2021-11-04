/*
  Author: Rina Chua
  Date: 24 Sep 2021
*/

import React from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';
import {getHeader, appear} from 'common/permission';
import styles from './styles.module.scss';

const SubHeader = () => {
    const headerMenu = getHeader(appear.HEADER);

    return (
        <div className={styles.menu}>
            <BrowserRouter forceRefresh={true}>
                {headerMenu.map((item) => (
                    <NavLink
                        className={styles.menuItem}
                        key={`${item.key}-${item.href}`}
                        to={item.link}>
                        {item.text}
                    </NavLink>
                ))}
            </BrowserRouter>
        </div>
    );
}

export default SubHeader;
