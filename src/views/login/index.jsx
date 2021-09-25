/*
  Author: Rina Chua
  Date: 25 Sep 2021
*/

import React, {useState} from 'react';
import {Container, Row, Col} from 'react-grid-system';

import {TextField} from '@mui/material';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Logo from 'images/lightmap.png';
import styles from './styles.module.scss';

const Login = () => {
    const [tabItem, setTabItem] = useState('1');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onTabItemChange = (e, value) => setTabItem(value);
    const onEmailChange = (e) => setEmail(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);

    return (
        <Container fluid>
            <Row align='center'>
                <Col align='center' md={6}>
                    <h2 className={styles.xtitle}>
                        Top 1 Leading Ecommerce Platform
                    </h2>
                    <img src={Logo} />
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
                                    <h2 className={styles.title}>
                                        Not Registered? Sign Up Now!
                                    </h2>
                                    <li>
                                        <TextField
                                            required
                                            id="standard-required"
                                            label="Enter Email"
                                            variant="standard"
                                            value={email}
                                            onChange={onEmailChange}
                                        />
                                    </li>
                                    <li>
                                        <TextField
                                            id="standard-password-input"
                                            label="Enter Password"
                                            type="password"
                                            autoComplete="current-password"
                                            variant="standard"
                                            value={password}
                                            onChange={onPasswordChange}
                                        />
                                    </li>
                                    <li>
                                        <Button 
                                            className={styles.btnWrapper}
                                            size="large" 
                                            variant="contained"
                                        >
                                            Register
                                        </Button>
                                    </li>
                                </TabPanel>
                                <TabPanel className={styles.inputWrapper} value='2'>
                                    <h2 className={styles.title}>
                                        Login to your Account
                                    </h2>
                                    <li>
                                        <TextField
                                            required
                                            id="standard-required"
                                            label="Enter Email"
                                            variant="standard"
                                            value={email}
                                            onChange={onEmailChange}
                                        />
                                    </li>
                                    <li>
                                        <TextField
                                            id="standard-password-input"
                                            label="Enter Password"
                                            type="password"
                                            autoComplete="current-password"
                                            variant="standard"
                                            value={password}
                                            onChange={onPasswordChange}
                                        />
                                    </li>
                                    <li>
                                        <Button 
                                            className={styles.btnWrapper}
                                            size="large" 
                                            variant="contained"
                                        >
                                            Login
                                        </Button>
                                    </li>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;