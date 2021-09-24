/*
  Author: Rina Chua
  Date: 24 Sep 2021
*/

import React from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';
import {getHeader, appear} from 'common/permission';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './styles.module.scss';

const Header = () => {
    const headerMenu = getHeader(appear.HEADER);
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Ecommerce Platform</h3>
            <div className={styles.menu}>
            <BrowserRouter forceRefresh={true}>
                {headerMenu.map((item) => (
                    <NavLink
                        className={styles.menuItem}
                        activeClassName={styles.selectedMenu}
                        key={`${item.key}-${item.href}`}
                        to={item.link}>
                        {item.text}
                    </NavLink>
                ))}
                <TextField 
                    className={styles.inputStyle}
                    id="outlined-search" 
                    label="Search for Products" 
                    type="search"
                />
                <Button 
                    variant="contained" 
                    href="/login">
                    Login
                </Button>
                <Button variant="outlined">
                    Register
                </Button>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default Header;