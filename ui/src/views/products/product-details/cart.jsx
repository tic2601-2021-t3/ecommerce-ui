/*
  Author: Rina Chua
  Date: 30 Oct 2021
*/

import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import classNames from 'classnames';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'

import Product from 'images/product_16.jpeg';
import styles from './styles.module.scss';

const Cart = () => {
    const shippingFee = 3.90;

    const ccyFormat = (num) => {
        return `${num.toFixed(2)}`;
    }

    const priceRow = (qty, unit) => {
        return qty * unit;
    }

    const createRow = (desc, qty, unit) => {
        const price = priceRow(qty, unit);
        return { desc, qty, unit, price };
    }

    const subtotal = (items) => {
        return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
    }

    const rows = [
        createRow('Paperclips (Box)', 100, 1.15),
        createRow('Paper (Case)', 10, 45.99),
        createRow('Waste Basket', 2, 17.99),
    ];

    const invoiceSubtotal = subtotal(rows);
    const invoiceTotal = shippingFee + invoiceSubtotal;

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h3 className={classNames(styles.title, styles.wrapper)}>Your Shopping Bag</h3>
                </Col>
            </Row>
            <Row align='center'>
                <Col align='center'>
                    <Card className={styles.cardWrapper}>
                        <Table className={styles.tableWrapper} sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{width: '30%'}}>Item</TableCell>
                                    <TableCell sx={{width: '30%'}}>Quantity</TableCell>
                                    <TableCell sx={{width: '30%'}}>Price</TableCell>
                                    <TableCell sx={{width: '10%'}} align='right'></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow 
                                    // key={row.user_id}
                                >
                                    <TableCell sx={{width: '30%'}}>
                                        <img className={styles.checkoutImage} src={Product} alt='Product'/>&nbsp;&nbsp;
                                        <label>product a</label>
                                    </TableCell>
                                    <TableCell sx={{width: '30%'}}>2</TableCell>
                                    <TableCell sx={{width: '30%'}}>S$
                                        123
                                    </TableCell>
                                    <TableCell sx={{width: '10%'}} align='right'>
                                        <Button>
                                            <IconButton aria-label="profile" size="small">
                                                <ClearIcon size={25} />
                                            </IconButton>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow 
                                    // key={row.user_id}
                                >
                                    <TableCell sx={{width: '30%'}}>
                                        <label>product a</label>
                                    </TableCell>
                                    <TableCell sx={{width: '30%'}}>1</TableCell>
                                    <TableCell sx={{width: '30%'}}>S$
                                        123
                                    </TableCell>
                                    <TableCell sx={{width: '10%'}} align='right'>
                                        <Button>
                                            <IconButton aria-label="profile" size="small">
                                                <ClearIcon size={25} />
                                            </IconButton>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow align='right'>
                                    <TableCell rowSpan={3} />
                                    <TableCell colSpan={2}>Subtotal</TableCell>
                                    <TableCell align="right">S${ccyFormat(invoiceSubtotal)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>Shipping Fee</TableCell>
                                    <TableCell align="right">S${ccyFormat(shippingFee)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}><b>Total</b></TableCell>
                                    <TableCell align="right"><label className={styles.totalPrice}>S${ccyFormat(invoiceTotal)}</label></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <div className={styles.buttonWrapper}>
                            <li className={styles.continueButton}>
                                <Button href='/'>{'<'} Continue Shopping</Button>
                            </li>
                            <li className={styles.checkoutButton}>
                                <Button variant='contained'>Check Out</Button>
                            </li>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Cart;