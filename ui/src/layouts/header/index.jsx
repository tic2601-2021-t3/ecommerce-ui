/*
  Author: Rina Chua
  Date: 24 Sep 2021
*/

import React, {Fragment} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {MdSearch, MdAccountCircle} from 'react-icons/md';
import {GiShoppingBag} from 'react-icons/gi';
import SubHeader from './subheader';
import styles from './styles.module.scss';

const Header = () => {
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
            <div className={styles.subWrapper}>
                <SubHeader/>
            </div>
        </Fragment>
    );
}

export default Header;