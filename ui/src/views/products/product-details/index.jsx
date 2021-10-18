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
                <Col md={1} offset={{md: 2}} align='left'> <p>Product</p> </Col> <Col md={0.5}> <p> : </p> </Col> <Col md={8} align='left'> <p>Sunflower Shirt</p> </Col>
                <Col md={1} offset={{md: 2}} align='left'> <p>Price</p> </Col> <Col md={0.5}> <p> : </p> </Col> <Col md={8}> <p> $12 </p> </Col>
                <Col md={1} offset={{md: 2}} align='left'> <p>Description</p> </Col> <Col md={0.5}> <p> : </p> </Col> <Col md={8}> <p>Sweat wicking material. Authentic!</p> </Col>
                <Col md={1} offset={{md: 2}} align='left'> <p>Merchant</p> </Col> <Col md={0.5}> <p> : </p> </Col> <Col md={8}> <p>Lululemon</p> </Col> 
                <Col md={1} offset={{md: 2}} align='left'> <p>Stock Left</p> </Col> <Col md={0.5}> <p> : </p> </Col> <Col md={8}> <p>216</p> </Col> 
            </Row>

            <br></br> <br></br>
            <Row> 
                <div align='right'> 
                    <Button 
                        className={styles.btnWrapper}
                        size="large" 
                        variant="contained"
                        //onClick={onHandleLogin}
                        offset={{md: 2}}
                        href="#">
                        Buy
                    </Button>
                </div>
            </Row>

            <br></br> <br></br>

            <Row align='center'>
                <Col md={10} offset={{md: 2}}> <h2>Product Reviews</h2> </Col> 
                <Col md={1} offset={{md: 2}}> <h7>User12345</h7> </Col> <Col md={0.5}> <p>rated</p> </Col> <Col md={8}> ⭐️ ⭐️ ⭐️ ⭐️ ⭐️</Col> 
                <Col md={1} offset={{md: 2}}> <h7>User12345</h7> </Col> <Col md={0.5}> <p>rated</p> </Col> <Col md={8}> ⭐️ ⭐️ ⭐️ ⭐️ ⭐️</Col> 
                <Col md={1} offset={{md: 2}}> <h7>User12345</h7> </Col> <Col md={0.5}> <p>rated</p> </Col> <Col md={8}> ⭐️ ⭐️</Col> 
                <Col md={1} offset={{md: 2}}> <h7>User12345</h7> </Col> <Col md={0.5}> <p>rated</p> </Col> <Col md={8}> ⭐️ ⭐️ ⭐️ ⭐️ ⭐️</Col> 
                <Col md={1} offset={{md: 2}}> <h7>User12345</h7> </Col> <Col md={0.5}> <p>rated</p> </Col> <Col md={8}> ⭐️ ⭐️ ⭐️ ⭐️</Col> 
                <Col md={1} offset={{md: 2}}> <h7>User12345</h7> </Col> <Col md={0.5}> <p>rated</p> </Col> <Col md={8}> ⭐️ ⭐️ ⭐️ </Col> 

            </Row>
        </Container>  
    )
};

export default ProductDetails;