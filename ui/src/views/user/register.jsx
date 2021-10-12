/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

import React, {useState, useEffect} from 'react';
import {ToastContainer, toast} from 'react-toastify'
import {Redirect} from 'react-router-dom';

import useURL from 'common/urls';
import useRequest from 'common/useRequest';

import {TextField} from '@mui/material';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.scss';

const Register = ({location}) => {
    const API_URL = useURL();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');

    const referer = (location && location.state && location.state.referer) || '/';

    const [{status, response}, makeRequest, {FETCHING, SUCCESS, ERROR}] = useRequest(API_URL.ADD_USER_URL, {
        verb: 'post',
        params: {
            userName: userName,
            password: password,
            email: email,
            userType: userType,
        },
    });

    const onUserNameChange = (e) => setUserName(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);
    const onEmailChange = (e) => setEmail(e.target.value);
    const onUserTypeChange = (e) => setUserType(e.target.value);
    const onHandleRegister = () => makeRequest();

    useEffect(() => {
        if (status === ERROR) {
            toast.error(response.message);
        }
    }, [status]);

    const customErrorId = 'error1';

    if (status === SUCCESS && response.status === 0) {
        return <Redirect to={referer} />;
    }
    else if (status === SUCCESS && response.status === 1) {
        toast.error(response.message, {
            toastId: customErrorId,
        });
    }
    
    return (
        <div>
            <h2 className={styles.title}>
                Not Registered? Sign Up Now!
            </h2>
            <li>
                <TextField
                    required
                    id="standard-required"
                    label="Enter User Name"
                    variant="standard"
                    value={userName}
                    onChange={onUserNameChange}
                />
            </li>
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
                <FormControlLabel 
                    control={<Checkbox />} 
                    label="Register as Merchant" 
                    onChange={onUserTypeChange}
                />
            </li>
            <li>
                <Button 
                    className={styles.btnWrapper}
                    size="large" 
                    variant="contained"
                    onClick={onHandleRegister}
                >
                    Register
                </Button>
                <ToastContainer/>
            </li>
        </div>
    );
}

export default Register;