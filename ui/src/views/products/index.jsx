import React, {useState} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Grid from '@mui/material/Grid';
import Content from 'components/product-card';
import Button from '@mui/material/Button';
import {AuthContext} from 'common/useAuthentication';

import styles from './styles.module.scss';

const Products = () => {
    const bytes =
    sessionStorage.getItem('email') &&
    sessionStorage.getItem('email') !== 'undefined';

    const curUser = bytes && JSON.parse(bytes);
    const [authUser] = useState(curUser);

    return(
        <Grid container direction="column">
            <Grid item>
                {authUser === true && JSON.parse(sessionStorage.getItem('email')).userType === 2 && (
                <div className={styles.buttonWrapper}>
                    <Button href="/add-product">
                        Add Product
                    </Button>
                </div>
                )}
            </Grid>
            <Grid item xs={0} sm={1}/>{/* left side margins */}
            <Grid item xs={12} sm={10}>
                <Content/>
            </Grid>
            <Grid item xs={0} sm={1}/>{/* right side margins*/}
        </Grid>
    )
}

export default Products;

