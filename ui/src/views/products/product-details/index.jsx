import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Card from '@mui/material/Card';


const ProductDetails = () => {
    return (
        <Container fluid>
            <Row align='center'>
                <Col md={12} offset={{md: 2}} align='center'>
                    <Card>
                        <img src="https://unsplash.com/photos/PZ57Npp7iAw"/>
                    </Card>
                </Col>
            </Row>
            <Row>
            
            </Row>
        </Container>  



            // <Grid container>
            //     <Grid item xs={6}> 
            //         <img src="https://unsplash.com/photos/PZ57Npp7iAw"/>
            //     </Grid>
            //     <Grid item xs={6} container> 
            //         <Grid item xs={4}>Name of Product</Grid>
            //         <Grid item xs={2}>$36</Grid>
            //         {/*<ProductCard/>*/}
            //         <Grid item xs={6}></Grid>
            //         <Grid item xs={12}>By merchant name</Grid>

            //         <Grid item xs={6}></Grid>
            //         <Grid item xs={4}>
            //             <Button size="small">Buy</Button>
            //         </Grid>
                    
            //     </Grid>
            // </Grid>

            // <Grid container>
            //     <Grid item xs={12}>Product Description</Grid>
            //     <Grid item xs={12}>Other information about the product</Grid>
            //     <Grid item xs={12} container> 
            //         <Grid item xs={4}>Product Id</Grid>
            //         <Grid item xs={2}>$36</Grid>
            //         <Grid item xs={6}></Grid>

            //         <Grid item xs={4}>Available</Grid>
            //         <Grid item xs={2}>Product Qty</Grid>      
            //         <Grid item xs={6}></Grid>              
            //     </Grid>
            // </Grid>
            // <Grid container>
            //     user review
            // </Grid>

    )
};

export default ProductDetails;