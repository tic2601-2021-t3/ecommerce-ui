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

const Orders = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h3 className={classNames(styles.title, styles.wrapper)}>Order History</h3>
                </Col>
            </Row>
            <Row align='center'>
                <Col align='center'>
                    <Card className={styles.cardWrapper}>
                        <Table className={styles.tableWrapper} sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{width: '25%'}}>Order Date</TableCell>
                                    <TableCell sx={{width: '25%'}}>Order Number</TableCell>
                                    <TableCell sx={{width: '25%'}}>Order Quantity</TableCell>
                                    <TableCell sx={{width: '25%'}}>Total Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow 
                                    // key={row.user_id}
                                >
                                    <TableCell sx={{width: '25%'}}>2021-09-20</TableCell>
                                    <TableCell sx={{width: '25%'}}>12342</TableCell>
                                    <TableCell sx={{width: '25%'}}>10</TableCell>
                                    <TableCell sx={{width: '25%'}}>S$123</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Orders;