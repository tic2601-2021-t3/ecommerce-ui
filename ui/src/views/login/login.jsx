/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

import React, {useState, useEffect} from 'react';
import {ToastContainer, toast} from 'react-toastify'
import {Redirect} from 'react-router-dom';

import API_URL from 'common/urls';
import useRequest from 'common/useRequest';
import {useAuthentication} from 'common/useAuthentication';

import {TextField} from '@mui/material';
import Button from '@mui/material/Button';

import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setAuthTokens} = useAuthentication();

    const [{status, response}, makeRequest, {SUCCESS, ERROR}] = useRequest(API_URL.LOGIN_URL, {
        verb: 'post',
        params: {
            email: email,
            password: password,
        },
    });
    const onEmailChange = (e) => setEmail(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);
    const onHandleLogin = () => makeRequest();

    useEffect(() => {
        if (status === ERROR) {
            toast.error(response.message);
        }
    }, [status]);

    const customId = 'id1';
    if (status === SUCCESS && response.status === 0) {
        setAuthTokens(response);
        toast.success(response.message, {
            toastId: customId,
        });
        return <Redirect to={response.userType === 1 ? '/user-management' : response.userType === 2 ? '/dashboard' : '/'} />;
    }
    else if (status === SUCCESS && response.status === 1) {
        toast.error(response.message, {
            toastId: customId,
        });
    }

    return (
        <div>
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
                    required
                    id="standard-password"
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
                    onClick={onHandleLogin}
                >
                    Login
                </Button>
                <ToastContainer/>
            </li>
        </div>
    );
}

export default Login;