/*
  Author: Rina Chua
  Date: 30 Oct 2021
*/

import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import classNames from 'classnames';
import {ToastContainer, toast} from 'react-toastify'

import API_URL from 'common/urls';
import useRequest from 'common/useRequest';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'

import styles from './styles.module.scss';

const Cart = () => {
    const [cartItems] = useState(localStorage.getItem('cartItem'));
    const cartItemsList = (cartItems !== null ? JSON.parse(cartItems) : []);
    const shippingFee = 3.90;

    const ccyFormat = (num) => {
        return `${num.toFixed(2)}`;
    }

    const subtotal = () => {
        var sum = 0;
        for (var i = 0; i < cartItemsList.length; i++) {
            sum += parseFloat(cartItemsList[i].productPrice);
        }
        return sum;
    }

    const cartOrderItems = () => {
        var cartProduct = [];
        for (var i = 0; i < cartItemsList.length; ++i) {
            cartProduct.push({
                'productId': cartItemsList[i].productId.toString(), 
                'productQuantity': cartItemsList[i].productQuantity,
                'productPrice': parseFloat(cartItemsList[i].productPrice)
            });
        }
        return cartProduct;
    }

    const orderSubtotal = subtotal();
    const orderTotal = shippingFee + orderSubtotal;
    const orderItems = cartOrderItems();
    
    // API for add transaction
    const [{status, response}, makeRequest, {SUCCESS, ERROR}, source] = useRequest(API_URL.ADD_TRANSACTION_URL, {
        verb: 'post',
        params: {
            userId: JSON.parse(sessionStorage.getItem('email')).userId,
            orderItems: orderItems,
        },
    });

    const handleCheckoutClick = () => {
        makeRequest();
        setTimeout(function(){
            localStorage.clear();
            window.location.href='/checkout';
        }, 3000);
    }

    useEffect(() => {
        if (status === ERROR) {
            toast.error(response.message);
        }
    }, [status]);

    const customId = 'id1';
    if (status === SUCCESS && response.status === 0) {
        toast.success(response.message, {
                toastId: customId,
            }
        );
    }
    else if (status === SUCCESS && response.status === 1) {
        toast.error(response.message, {
                toastId: customId,
            }
        );
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h3 className={classNames(styles.title, styles.wrapper)}>Your Shopping Bag</h3>
                </Col>
            </Row>
            {(cartItemsList.length === 0 || cartItemsList.length === null) && (
                 <Row align='center'>
                    <Col align='center'>
                        <Card className={styles.emptyCardWrapper}>
                            <label className={styles.emptyLabel}>Your Shopping Bag is empty!</label>{' '}
                            <a href='/'>Start Shopping Now!</a>
                        </Card>
                    </Col>
                </Row>
            )}
            {cartItemsList.length > 0 && (
            <Row align='center'>
                <Col align='center'>
                    <Card className={styles.cardWrapper}>
                        <Table className={styles.tableWrapper} sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{width: '33%'}}>Item</TableCell>
                                    <TableCell sx={{width: '33%'}}>Quantity</TableCell>
                                    <TableCell sx={{width: '33%'}} align='right'>Price</TableCell>
                                    {/* <TableCell sx={{width: '10%'}} align='right'></TableCell> */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cartItemsList.map((row) => (
                                    <TableRow 
                                        key={row.productId}
                                    >
                                        <TableCell sx={{width: '33%'}}>
                                            <img className={styles.checkoutImage} src={row.productImage} alt='Product'/>&nbsp;&nbsp;
                                            <label>{row.productName}</label>
                                        </TableCell>
                                        <TableCell sx={{width: '33%'}}>{row.productQuantity}</TableCell>
                                        <TableCell sx={{width: '33%'}} align='right'>S${row.productPrice}</TableCell>
                                        {/* <TableCell sx={{width: '10%'}} align='right'>
                                            <Button>
                                                <IconButton aria-label="profile" size="small">
                                                    <ClearIcon size={25} />
                                                </IconButton>
                                            </Button>
                                        </TableCell> */}
                                    </TableRow>
                                ))}
                                <TableRow align='right'>
                                    <TableCell rowSpan={3} />
                                    <TableCell colSpan={1}>Subtotal</TableCell>
                                    <TableCell align="right">S${ccyFormat(orderSubtotal)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={1}>Shipping Fee</TableCell>
                                    <TableCell align="right">S${ccyFormat(shippingFee)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={1}><b>Total</b></TableCell>
                                    <TableCell align="right"><label className={styles.totalPrice}>S${ccyFormat(orderTotal)}</label></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <div className={styles.buttonWrapper}>
                            <li className={styles.continueButton}>
                                <Button href='/'>{'<'} Continue Shopping</Button>
                            </li>
                            <li className={styles.checkoutButton}>
                                <Button variant='contained' onClick={handleCheckoutClick}>Check Out</Button>
                                <ToastContainer/>
                            </li>
                        </div>
                    </Card>
                </Col>
            </Row>
            )}
        </Container>
    )
}

export default Cart;