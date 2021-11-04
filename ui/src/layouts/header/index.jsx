/*
  Author: Rina Chua
  Date: 24 Sep 2021
*/

import React, {Fragment, useState} from 'react';
import {useAuthentication} from 'common/useAuthentication';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import {MdSearch, MdAccountCircle} from 'react-icons/md';
import {GiShoppingBag} from 'react-icons/gi';
import LogoutIcon from '@mui/icons-material/Logout';
import SubHeader from './subheader';

import styles from './styles.module.scss';

const Header = () => {
    // Login
    const bytes =
        sessionStorage.getItem('email') &&
        sessionStorage.getItem('email') !== 'undefined';
    const curUser = bytes && JSON.parse(bytes);
    const [authUser] = useState(curUser);
    const {setAuthTokens} = useAuthentication();

    const handleLogout = (e) => {
        e.preventDefault();
        setAuthTokens();
        window.location.href = '/';
    }

    return (
        <Fragment>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>
                    <a href='/' className={styles.linkWrapper}>
                        Huat Ah! Marketplace
                    </a>
                </h2>
                <div className={styles.inputWrapper}>
                    <li>
                        <SubHeader/>
                    </li>
                    <li>
                        <Button className={styles.btnWrapper} href={authUser === true && JSON.parse(sessionStorage.getItem('email')).userType === 3 ? '/cart' : '/login'}>
                            <IconButton aria-label="profile" size="small">
                                <GiShoppingBag className={styles.btnWrapper} size={25} />
                            </IconButton>
                        </Button>
                        {authUser === true && JSON.parse(sessionStorage.getItem('email')).userType === 3 &&
                        <Fragment>
                            <Button className={styles.btnWrapper} href="/orders">
                                <IconButton aria-label="profile" size="small">
                                    <MdAccountCircle className={styles.btnWrapper} size={25} />
                                </IconButton>
                            </Button>
                            <Button className={styles.btnWrapper}>
                                <IconButton aria-label="profile" size="small" onClick={handleLogout}>
                                    <LogoutIcon className={styles.btnWrapper} size={25} />
                                </IconButton>
                            </Button>
                        </Fragment>
                        }
                    </li>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;