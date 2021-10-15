/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

import React from 'react';
import {Container, Row, Col} from 'react-grid-system';

import Card from '@mui/material/Card';

import LineChart from './linechart';
import LineChart2 from './linechart2';
import LineChart3 from './linechart3';
import BarChart from './barchart';
import BarChart2 from './barchart2';

const Dashboard = () => {
    return(
        <Container fluid>
            <Row align='center'>
                <Col align='center' md={6}>
                    <Card>
                        <BarChart/>
                    </Card>
                </Col>
                <Col align='center' md={6}>
                    <Card>
                        <BarChart2/>
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
                        <LineChart2/>
                    </Card>
                </Col>
                <Col align='center' md={4}>
                    <Card>
                        <LineChart3/>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;