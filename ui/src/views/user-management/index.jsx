/*
  Author: Rina Chua
  Date: 19 Oct 2021
*/

import React, {useEffect, useState} from 'react';
import {toast} from 'react-toastify'
import {Container, Row, Col} from 'react-grid-system';

import useURL from 'common/urls';
import useRequest from 'common/useRequest';
import {useAuthentication} from 'common/useAuthentication';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';

import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.scss';

const UserManagement = () => {
    const API_URL = useURL();
    const {setAuthTokens} = useAuthentication();
    const [open, setOpen] = useState(null);

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    };
  
    const handleClose = () => {
        setOpen(null);
    };
  
    const openFlag = Boolean(open);
    const id = openFlag ? 'simple-popover' : undefined;

    const [{ status, response }, makeRequest, { FETCHING, SUCCESS, ERROR }, source] = useRequest(API_URL.USER_LIST_URL, {
        verb: 'post',
        params: {
            email: JSON.parse(sessionStorage.getItem('email')).email.toString(),
            userType: parseInt(JSON.parse(sessionStorage.getItem('email')).userType),
        },
    });

    useEffect(() => {
        makeRequest();
        return () => {
            source.cancel();
        };
    }, []);

    useEffect(() => {
        if (status === ERROR) {
            toast.error(response.message);
        }
    }, [status]);

    return (
        <Container fluid>
            <Row>
                <Col md={12}>
                    <div className={styles.buttonWrapper}>
                        <Button onClick={handleClick}>
                            Add User
                        </Button>
                        <Popover
                            id={id}
                            open={openFlag}
                            anchorEl={open}
                            onClose={handleClose}
                            anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                            }}
                        >
                            
                        </Popover>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ width: '25%' }}>User ID</TableCell>
                                    <TableCell sx={{ width: '25%' }}>User Name</TableCell>
                                    <TableCell sx={{ width: '25%' }}>Email</TableCell>
                                    <TableCell sx={{ width: '25%' }}>User Type</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {status === SUCCESS &&
                                    response.users.map((row) => (
                                        <TableRow key={row.user_id}>
                                            <TableCell sx={{ width: '25%' }}>{row.userId}</TableCell>
                                            <TableCell sx={{ width: '25%' }}>{row.userName}</TableCell>
                                            <TableCell sx={{ width: '25%' }}>{row.email}</TableCell>
                                            <TableCell sx={{ width: '25%' }}>{row.userType}</TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Col>
            </Row>
        </Container>
    );
}

export default UserManagement;
