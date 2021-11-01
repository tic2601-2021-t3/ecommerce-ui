/*
  Author: Rina Chua
  Date: 31 Oct 2021
*/

import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import classNames from 'classnames';

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'

import styles from './styles.module.scss';

const OrderDetails = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h3 className={classNames(styles.title, styles.wrapper)}>Order ID: 123 &nbsp;2021-09-20</h3>
                </Col>
            </Row>
            <Row align='center'>
                <Col align='center'>
                    <Card className={styles.cardWrapper}>
                        <Table className={styles.tableWrapper} sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{width: '25%'}}>Item ID</TableCell>
                                    <TableCell sx={{width: '25%'}}>Item Name</TableCell>
                                    <TableCell sx={{width: '25%'}}>Item Quantity</TableCell>
                                    <TableCell sx={{width: '25%'}}>Item Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow 
                                    // key={row.user_id}
                                >
                                    <TableCell sx={{width: '25%'}}>1</TableCell>
                                    <TableCell sx={{width: '25%'}}>Product A</TableCell>
                                    <TableCell sx={{width: '25%'}}>10</TableCell>
                                    <TableCell sx={{width: '25%'}}>S$123</TableCell>
                                </TableRow>
                                <TableRow 
                                    // key={row.user_id}
                                >
                                    <TableCell sx={{width: '25%'}}>2</TableCell>
                                    <TableCell sx={{width: '25%'}}>Product B</TableCell>
                                    <TableCell sx={{width: '25%'}}>7</TableCell>
                                    <TableCell sx={{width: '25%'}}>S$13.00</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default OrderDetails;