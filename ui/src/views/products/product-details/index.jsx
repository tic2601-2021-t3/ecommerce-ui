import React from 'react';
import ProductCard from "components/product-card";
import Grid from '@mui/material/Grid';
import styles from './styles.module.scss';
import Button from '@mui/material/Button';


const ProductDetails = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={6}> 
                    <img src="https://unsplash.com/photos/PZ57Npp7iAw"/>
                </Grid>

                <Grid item xs={1}></Grid>
                <Grid item xs={2}>Name of Product</Grid>
                <Grid item xs={2}>$36</Grid>
                {/*<ProductCard/>*/}
                <Grid item xs={1}></Grid>

                <Grid item xs={6}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={2}>By merchant name</Grid>
                <Grid item xs={3}></Grid>

                <Grid item xs={6}></Grid>
                <Button size="small">Buy</Button>
            </Grid>
        </div>
    )
};

export default ProductDetails;