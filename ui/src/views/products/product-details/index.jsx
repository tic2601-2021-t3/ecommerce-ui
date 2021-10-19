import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Logo from 'images/lightbluemap.png';
import styles from './styles.module.scss';

const ProductDetails = () => {
    return (
        <Container fluid>
            <Row align='center'>
                <Col align='center'>
                    <Card className={styles.card}>
                        <Row>
                            <Col md={6}>
                                <img src={Logo}/>
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
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>User ID</TableCell>
                                    <TableCell>User Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>User Type</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow 
                                    // key={row.user_id}
                                    >
                                    <TableCell>123</TableCell>
                                    <TableCell>234</TableCell>
                                    <TableCell>546</TableCell>
                                    <TableCell>464</TableCell>
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