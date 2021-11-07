/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

import React from 'react';
import {Container, Row, Col} from 'react-grid-system';

import Card from '@mui/material/Card';

import MomSales from './momsales';
import ReturningCustomers from './returningcust';
import ShippingTime from './shippingtime';
import ProductSales from './productsales';
import SalesByDay from './salesbyday';

const Dashboard = () => {
    return(
        <Container fluid>
            <Row align='center'>
                <Col align='center' md={6}>
                    <Card>
                        <ProductSales/>
                    </Card>
                </Col>
                <Col align='center' md={6}>
                    <Card>
                        <SalesByDay/>
                    </Card>
                </Col>

            </Row>
            <br/>
            <Row align='center'>
                <Col align='center' md={4}>
                    <Card>
                        <MomSales/>
                    </Card>
                </Col>
                <Col align='center' md={4}>
                    <Card>
                        <ReturningCustomers/>
                    </Card>
                </Col>
                <Col align='center' md={4}>
                    <Card>
                        <ShippingTime/>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;