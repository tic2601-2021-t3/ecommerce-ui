/*
  Author: Rina Chua
  Date: 31 Oct 2021
*/

import React from 'react';
import {Container, Row, Col} from 'react-grid-system';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import Checked from 'images/checked.png';
import styles from './styles.module.scss';

const Checkout = () => {
    return (
        <Container fluid>
            <Row align='center'>
                <Col align='center'>
                    <Card className={styles.cardWrapper}>
                        <div className={styles.inputWrapper}>
                            <li>
                                <img width='200px' height='180px' src={Checked} alt='Checked'/>
                            </li>
                            <li>
                                <h1>Thank You!</h1>
                            </li>
                            <li>
                                <h3>Your order was completed successfully.</h3>
                            </li>
                            <li>
                                <label>Keep a look out at our page to discover your favourite brands in one place!</label>
                            </li>
                            <li>
                                <Button variant='contained' href='/orders'>View Orders</Button> &nbsp;
                                <Button href='/'>Return to Homepage</Button>
                            </li>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;