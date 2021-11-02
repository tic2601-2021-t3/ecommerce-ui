/*
  Author: Rina Chua
  Date: 2 Nov 2021
*/

import React, {useEffect, useState} from 'react';
import {ToastContainer, toast} from 'react-toastify'

import useURL from 'common/urls';
import useRequest from 'common/useRequest';

import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import {OPTIONS_TYPE} from 'components/input';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.scss';

const AddUser = ({onClose}) => {
    const API_URL = useURL();
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [userType, setUserType] = useState();

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

    const customId = 'id1';
    if (status === SUCCESS && response.status === 0) {
        toast.success(response.message, 
            {
                toastId: customId,
            }
        );
        setTimeout(function(){onClose();}, 5000);
    }
    else if (status === SUCCESS && response.status === 1) {
        toast.error(response.message,
            {
                toastId: customId,
            }
        );
    }

    return (
        <div className={styles.inputWrapper}>
            <li>
                <TextField
                    required
                    id="outlined-required"
                    label="Enter User Name"
                    value={userName}
                    onChange={onUserNameChange}
                />
            </li>
            <li>
                <TextField
                    required
                    id="outlined-required"
                    label="Enter Email"
                    value={email}
                    onChange={onEmailChange}
                />
            </li>
            <li>
                <TextField
                    required
                    id="outlined-password-input"
                    label="Enter Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={onPasswordChange}
                />
            </li>
            <li>
                <TextField
                    id="outlined-select"
                    select
                    label="User Type"
                    placeholder="Select User Type"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={userType}
                    onChange={onUserTypeChange}
                >
                    {OPTIONS_TYPE.USER_TYPE.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
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

export default AddUser;
