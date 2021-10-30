/*
  Author: Rina Chua
  Date: 24 Sep 2021
*/

import React, {Fragment, useEffect, useState} from 'react';
import {useAuthentication} from 'common/useAuthentication';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {MdSearch, MdAccountCircle} from 'react-icons/md';
import {GiShoppingBag} from 'react-icons/gi';
import LogoutIcon from '@mui/icons-material/Logout';
import SubHeader from './subheader';

import styles from './styles.module.scss';

const Header = () => {
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
                <h2 className={styles.title}>Huat Ah Ecommerce Platform</h2>
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
            <div className={styles.subWrapper}>
                <SubHeader/>
            </div>
        </Fragment>
    );
}

export default Header;