/*
  Author: Rina Chua
  Date: 31 Oct 2021
*/

import React, {useEffect} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import {toast} from 'react-toastify';
import classNames from 'classnames';

import API_URL from 'common/urls';
import useRequest from 'common/useRequest';

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'

import styles from './styles.module.scss';

const Orders = () => {
    const [{status, response}, makeRequest, {SUCCESS, ERROR}, source] = useRequest(API_URL.TRANSACTION_LIST_URL, {
        verb: 'post',
        params: {
            userId: JSON.parse(sessionStorage.getItem('email')).userId,
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
        <Container fluid>
            <Row>
                <Col>
                    <h3 className={classNames(styles.title, styles.wrapper)}>My Orders</h3>
                </Col>
            </Row>
            <Row align='center'>
                <Col align='center'>
                    <Card className={styles.cardWrapper}>
                        <Table className={styles.tableWrapper} sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{width: '16%'}}>Order Date</TableCell>
                                    <TableCell sx={{width: '16%'}}>Order ID</TableCell>
                                    <TableCell align='center' sx={{width: '16%'}}>Item(s) Purchased</TableCell>
                                    <TableCell align='center' sx={{width: '16%'}}>Total Amount</TableCell>
                                    <TableCell align='center' sx={{width: '16%'}}>Order Status</TableCell>
                                    <TableCell sx={{width: '16%'}}>Shipping Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {status === SUCCESS &&
                                response.transactions.transactions.map((row) => (
                                <TableRow 
                                    key={row.transactionId}
                                >
                                    <TableCell sx={{width: '16%'}}>{row.orderDate}</TableCell>
                                    <TableCell sx={{width: '16%'}}><a className={styles.linkTextWrapper} href={`/orders/orderId=${row.transactionId}`}>{row.transactionId}</a></TableCell>
                                    <TableCell align='center' sx={{width: '16%'}}>{row.itemPurchased}</TableCell>
                                    <TableCell align='center' sx={{width: '16%'}}>S${row.totalAmount}</TableCell>
                                    <TableCell align='center'sx={{width: '16%'}}>{row.orderStatus}</TableCell>
                                    <TableCell sx={{width: '16%'}}>{row.shippedDate}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Orders;