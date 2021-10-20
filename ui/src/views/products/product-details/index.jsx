import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Card from '@mui/material/Card';
import {Button} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import StarRateIcon from '@mui/icons-material/StarRate';

import Product from 'images/product_10.jpeg';
import styles from './styles.module.scss';

const ProductDetails = () => {
    return (
        <Container fluid>
            <Row align='center'>
                <Col align='center'>
                    <Card className={styles.card}>
                        <Row>
                            <Col md={6}>
                                <img src={Product}/>
                            </Col>
                            <Col md={6} align='left'>
                                <h3 className={styles.title}>Product A</h3>
                                <p className={styles.category}>Category: Men | Stock Available: 123</p>
                                <p className={styles.category}>Merchant: Merchant B</p>
                                <p>Item Description: Hello this is a nice product.</p>
                                <h2 className={styles.price}>S$300.00</h2>
                                <Button
                                    variant="contained"
                                    size="large"
                                >
                                    Add to Cart
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row align='center'>
                <Col align='left'>
                    <Card className={styles.card}>
                        <h4 className={styles.subTitle}>Product Reviews</h4>
                        <Table className={styles.subTitle} sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{width: '50%'}}>User ID</TableCell>
                                    <TableCell sx={{width: '50%'}}>Ratings</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow 
                                    // key={row.user_id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell sx={{width: '50%'}}>123</TableCell>
                                    <TableCell sx={{width: '50%'}}>
                                        <StarRateIcon className={styles.button}/>
                                        <StarRateIcon className={styles.button}/>
                                        <StarRateIcon className={styles.button}/>
                                        <StarRateIcon className={styles.button}/>
                                        <StarRateIcon className={styles.button}/>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </Container> 
    )
};

export default ProductDetails;