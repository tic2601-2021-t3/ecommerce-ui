import React from 'react';
import ProductCard from "./product-card";
import Grid from '@mui/material/Grid';
import styles from './styles.module.scss';

const Content = () => {
    return(
        <div className={styles.contentGrid}> 
            <Grid container>
                <Grid item xs={3}> 
                    <ProductCard/>
                </Grid>
                <Grid item xs={3}> 
                    <ProductCard/>
                </Grid>
                <Grid item xs={3}> 
                    <ProductCard/>
                </Grid>
                <Grid item xs={3}> 
                    <ProductCard/>
                </Grid>
            </Grid>
        </div>
    )
};

export default Content;