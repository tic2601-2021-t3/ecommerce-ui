/*
  Author: Rina Chua
  Date: 25 Sep 2021
*/

import React, {useState} from 'react';
import {Container, Row, Col} from 'react-grid-system';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Login from './login';
import Register from './register';
import Logo from 'images/lightbluemap.png';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.scss';

const User = ({location}) => {
    const [tabItem, setTabItem] = useState('1');

    const onTabItemChange = (e, value) => setTabItem(value);

    return (
        <Container fluid>
            <Row>
                <Col align='center' md={6}>
                    <h2 className={styles.topTitle}>
                        Top 1 Leading Ecommerce Platform
                    </h2>
                    <img className={styles.logo} src={Logo} alt='Login' />
                </Col>
                <Col align='center' md={6}>
                    <Card className={styles.card}>
                        <Box className={styles.tabWrapper}>
                            <TabContext value={tabItem}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={onTabItemChange} aria-label="tabs">
                                        <Tab label="New Customer" value='1' />
                                        <Tab label="Existing Customer" value='2' />
                                    </TabList>
                                </Box>
                                <TabPanel className={styles.inputWrapper} value='1'>
                                    <Register/>
                                </TabPanel>
                                <TabPanel className={styles.inputWrapper} value='2'>
                                    <Login/>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default User;