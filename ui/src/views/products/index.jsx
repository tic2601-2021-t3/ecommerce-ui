import React, { useState } from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Grid from '@mui/material/Grid';
import Content from "components/product-card";

const Products = () => {
    return(
        <Grid container direction="column">
            <Grid item> banner here</Grid>
            <Grid item container> 
                <Grid item xs={0} sm={1}/>{/* left side margins */}
                <Grid item xs={12} sm={10}>
                    <Content/>   
                </Grid>
                <Grid item xs={0} sm={1}/>{/* right side margins*/}
            </Grid>
        </Grid>
    )
}

export default Products;

