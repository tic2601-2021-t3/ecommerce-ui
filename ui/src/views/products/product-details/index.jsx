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
                <Col md={10} offset={{md: 2}} align='center'>
                    <Card>
                        <img src="https://unsplash.com/photos/PZ57Npp7iAw"/>
                    </Card>
                </Col>
            </Row>

            <br></br> <br></br>

            <Row align='center'>
                <Col md={1} offset={{md: 2}} align='left'>Product</Col> <Col md={0.5}> : </Col> <Col md={8} align='left'>Sunflower Shirt</Col>
                <Col md={1} offset={{md: 2}} align='left'>Price</Col> <Col md={0.5}> : </Col> <Col md={8}>$12</Col>
                <Col md={1} offset={{md: 2}} align='left'>Description</Col> <Col md={0.5}> : </Col> <Col md={8}>Sweat wicking material. Authentic!</Col>
                <Col md={1} offset={{md: 2}} align='left'>Merchant</Col> <Col md={0.5}> : </Col> <Col md={8}>Lululemon</Col> 
                <Col md={1} offset={{md: 2}} align='left'>Stock left</Col> <Col md={0.5}> : </Col> <Col md={8}>216</Col> 
            </Row>

            <br></br> <br></br>

            <Button 
                className={styles.btnWrapper}
                size="large" 
                variant="contained"
                align='right'
                //onClick={onHandleLogin}
                offset={{md: 2}}
                href="#">
                Buy
            </Button>

            <br></br> <br></br>

            <Row align='center'>
                <Col md={10} offset={{md: 2}}> <h2 className={styles.standard}> Product Reviews </h2> </Col> 
                <Col md={1} offset={{md: 2}}> <h7>User12345</h7> </Col> <Col md={0.5}> rated </Col> <Col md={8}> <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p> </Col> 
                <Col md={1} offset={{md: 2}}> <h7>User12345</h7> </Col> <Col md={0.5}> rated </Col> <Col md={8}> <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p> </Col> 
                <Col md={1} offset={{md: 2}}> <h7>User12345</h7> </Col> <Col md={0.5}> rated </Col> <Col md={8}> <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p> </Col> 
                <Col md={1} offset={{md: 2}}> <h7>User12345</h7> </Col> <Col md={0.5}> rated </Col> <Col md={8}> <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p> </Col> 
                <Col md={1} offset={{md: 2}}> <h7>User12345</h7> </Col> <Col md={0.5}> rated </Col> <Col md={8}> <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p> </Col> 
                <Col md={1} offset={{md: 2}}> <h7>User12345</h7> </Col> <Col md={0.5}> rated </Col> <Col md={8}> <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p> </Col> 
            </Row>
        </Container>  
    )
};

export default ProductDetails;