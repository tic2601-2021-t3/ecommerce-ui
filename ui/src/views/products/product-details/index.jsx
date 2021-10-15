import React from 'react';
import ProductCard from 'components/product-card';
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
                <Grid item xs={6} container> 
                    <Grid item xs={4}>Name of Product</Grid>
                    <Grid item xs={2}>$36</Grid>
                    {/*<ProductCard/>*/}
                    <Grid item xs={6}></Grid>
                    <Grid item xs={12}>By merchant name</Grid>

                    <Grid item xs={6}></Grid>
                    <Grid item xs={4}>
                        <Button size="small">Buy</Button>
                    </Grid>
                    
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12}>Product Description</Grid>
                <Grid item xs={12}>Other information about the product</Grid>
                <Grid item xs={12} container> 
                    <Grid item xs={4}>Product Id</Grid>
                    <Grid item xs={2}>$36</Grid>
                    <Grid item xs={6}></Grid>

                    <Grid item xs={4}>Available</Grid>
                    <Grid item xs={2}>Product Qty</Grid>      
                    <Grid item xs={6}></Grid>              
                </Grid>
            </Grid>
            <Grid container>
                user review
            </Grid>
        </div>
    )
};

export default ProductDetails;