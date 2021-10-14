import React, { useState } from 'react';
import ProductCard from "./product-card";
import Grid from '@mui/material/Grid';
import styles from './styles.module.scss';

const Content = () => {
    return(
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
    )
};

export default Content;