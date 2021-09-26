/*
  Author: Rina Chua
  Date: 24 Sep 2021
*/

import React from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';
import {getHeader, appear} from 'common/permission';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {MdSearch, MdAccountCircle} from 'react-icons/md';
import {GiShoppingBag} from 'react-icons/gi';

import styles from './styles.module.scss';

const Header = () => {
    const headerMenu = getHeader(appear.HEADER);
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>
                Ecommerce Platform
            </h3>
            <div className={styles.menu}>
                <div>
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
                    </BrowserRouter>
                </div>
                <div className={styles.inputWrapper}>
                    <li>
                        <TextField
                            className={styles.textWrapper}
                            id="outlined-search"
                            type="search"
                            size="small"
                            placeholder="Search for Products"
                            InputProps={{
                                endAdornment: <MdSearch size={25} />
                            }}
                        />
                    </li>
                    <li>
                        <Button className={styles.btnWrapper} href="/login">
                            <IconButton aria-label="profile" size="small">
                                <MdAccountCircle className={styles.btnWrapper} size={25} />
                            </IconButton>
                        </Button>
                        <Button className={styles.btnWrapper} href="/cart">
                            <IconButton aria-label="profile" size="small">
                                <GiShoppingBag className={styles.btnWrapper} size={25} />
                            </IconButton>
                        </Button>
                    </li>
                </div>
            </div>
        </div>
    );
}

export default Header;