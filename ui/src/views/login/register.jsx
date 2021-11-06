/*
  Author: Rina Chua
  Date: 13 Oct 2021
*/

import React, {useState, useEffect} from 'react';
import {ToastContainer, toast} from 'react-toastify';

import API_URL from 'common/urls';
import useRequest from 'common/useRequest';

import {TextField} from '@mui/material';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.scss';

const Register = ({location}) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState(3);

    const [{status, response}, makeRequest, {SUCCESS, ERROR}] = useRequest(API_URL.ADD_USER_URL, {
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
        if (status === SUCCESS) {
            toast.success(response.message);
        }
        else if (status === ERROR) {
            toast.error(response.message);
        }
    }, [status]);
    
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
                <FormControl component="fieldset">
                    <div className={styles.radioWrapper}>
                        <label>Register As</label>
                        <RadioGroup row aria-label="userType" defaultValue="3" value={userType} name="row-radio-buttons-group" onChange={onUserTypeChange}>
                            <FormControlLabel value="3" control={<Radio />} label="Customer" />
                            <FormControlLabel value="2" control={<Radio />} label="Merchant" />
                        </RadioGroup>
                    </div>
                </FormControl>
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