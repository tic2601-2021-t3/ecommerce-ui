/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

import React from 'react';
import {Container, Row, Col} from 'react-grid-system';

import Card from '@mui/material/Card';

import LineChart from './linechart';
import BarChart from './barchart';

const Dashboard = () => {
    
    return(
        <Container fluid>
            <Row align='center'>
                <Col align='center' md={4}>
                    <Card>
                        <LineChart/>
                    </Card>
                </Col>
                <Col align='center' md={4}>
                    <Card>
                        <BarChart/>
                    </Card>
                </Col>
                <Col align='center' md={4}>
                    <Card>
                        <BarChart/>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row align='center'>
                <Col align='center' md={4}>
                    <Card>
                        <LineChart/>
                    </Card>
                </Col>
                <Col align='center' md={4}>
                    <Card>
                        <BarChart/>
                    </Card>
                </Col>
                <Col align='center' md={4}>
                    <Card>
                        <BarChart/>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;