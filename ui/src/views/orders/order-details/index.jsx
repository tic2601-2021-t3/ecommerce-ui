/*
  Author: Rina Chua
  Date: 31 Oct 2021
*/

import React, {Fragment, useEffect} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import {toast} from 'react-toastify';

import API_URL from 'common/urls';
import useRequest from 'common/useRequest';

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'

import styles from './styles.module.scss';

const url = window.location.href;
const id = url.substring(url.indexOf('=') + 1);

const OrderDetails = () => {
    const [{status, response}, makeRequest, {SUCCESS, ERROR}, source] = useRequest(API_URL.TRANSACTION_DETAIL_URL, {
        verb: 'post',
        params: {
            userId: JSON.parse(sessionStorage.getItem('email')).userId,
            transactionId: id,
        },
    });

    useEffect(() => {
        makeRequest();
        return () => {
            source.cancel();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (status === ERROR) {
            toast.error(response.message);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    return (
        <div className={styles.wrapper}>
            <Container fluid>
                {status === SUCCESS && (
                    <Fragment>
                        <Row>
                            <Col>
                                <h3 className={styles.title}>Order ID: {response.transaction.transactionId}</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <Card>
                                    <p className={styles.label}>Order Date</p>
                                    <p className={styles.value}>{response.transaction.orderDate}</p>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <p className={styles.label}>Order Status</p>
                                    <p className={styles.value}>{response.transaction.orderStatus}</p>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <p className={styles.label}>Shipping Date</p>
                                    <p className={styles.value}>{response.transaction.shippedDate}</p>
                                </Card>
                            </Col>
                        </Row>
                    </Fragment>
                )}
                <br/>
                <Row align='center'>
                    <Col align='center'>
                        <Card className={styles.cardWrapper}>
                            <Table className={styles.tableWrapper} sx={{minWidth: 650}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{width: '20%'}}>Product ID</TableCell>
                                        <TableCell sx={{width: '20%'}}>Product Name</TableCell>
                                        <TableCell sx={{width: '20%'}}>Merchant</TableCell>
                                        <TableCell align='center' sx={{width: '20%'}}>Product Quantity</TableCell>
                                        <TableCell align='center' sx={{width: '20%'}}>Product Amount</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {status === SUCCESS &&
                                    response.transaction.orderItems.map((row) => (
                                    <TableRow 
                                        key={row.productId}
                                    >
                                        <TableCell sx={{width: '20%'}}>{row.productId}</TableCell>
                                        <TableCell sx={{width: '20%'}}>{row.productName}</TableCell>
                                        <TableCell sx={{width: '20%'}}>{row.userName}</TableCell>
                                        <TableCell align='center' sx={{width: '20%'}}>{row.productQuantity}</TableCell>
                                        <TableCell align='center' sx={{width: '20%'}}>S${row.productPrice}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OrderDetails;