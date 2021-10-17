import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import ProductCard from 'components/product-card';
import Grid from '@mui/material/Grid';
import styles from './styles.module.scss';
import Button from '@mui/material/Button';
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
                <Col md={4}>Name of Product</Col> <Col md={1}> : </Col> <Col md={4}>Sunflower Shirt</Col> <Col md={3}> </Col>
                <Col md={4}>Price</Col> <Col md={1}> : </Col> <Col md={4}>$12</Col> <Col md={3}> </Col>
                <Col md={4}>Description</Col> <Col md={1}> : </Col> <Col md={4}>Sweat wicking material. Authentic!</Col> <Col md={3}> </Col>
                
                <Button 
                    className={styles.btnWrapper}
                    size="large" 
                    variant="contained"
                    //onClick={onHandleLogin}
                    href="#">
                    Buy
                </Button>

                <Col md={4}>Merchant</Col> <Col md={1}> : </Col> <Col md={4}>Lululemon</Col> <Col md={3}> </Col>
                <Col md={4}>Available Stock</Col> <Col md={1}> : </Col> <Col md={4}>216</Col> <Col md={3}> </Col>
            <Row>
                <Col md={12}>Product Reviews</Col> 
                <Col md={4}>User1</Col> <Col md={1}> rated </Col> <Col md={7}>* * * * *</Col> 
                <Col md={4}>User2</Col> <Col md={1}> rated </Col> <Col md={7}>* * * * *</Col> 
                <Col md={4}>User3</Col> <Col md={1}> rated </Col> <Col md={7}>* * * * *</Col> 
            </Row>
        </Container>  
    )
};

export default ProductDetails;