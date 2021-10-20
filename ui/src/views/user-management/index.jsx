import React, {useEffect} from 'react';
import {toast} from 'react-toastify'
import {Container} from 'react-grid-system';

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

import 'react-toastify/dist/ReactToastify.css';

const UserManagement = () => {
    const API_URL = useURL();
    const {setAuthTokens} = useAuthentication();

    const [{status, response}, makeRequest, {FETCHING, SUCCESS, ERROR}, source] = useRequest(API_URL.USER_LIST_URL, {
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
            <TableContainer component={Paper}> 
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{width: '25%'}}>User ID</TableCell>
                            <TableCell sx={{width: '25%'}}>User Name</TableCell>
                            <TableCell sx={{width: '25%'}}>Email</TableCell>
                            <TableCell sx={{width: '25%'}}>User Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {status === SUCCESS &&
                            response.users.map((row) => (
                            <TableRow key={row.user_id}>
                                <TableCell sx={{width: '25%'}}>{row.user_id}</TableCell>
                                <TableCell sx={{width: '25%'}}>{row.user_name}</TableCell>
                                <TableCell sx={{width: '25%'}}>{row.email}</TableCell>
                                <TableCell sx={{width: '25%'}}>{row.user_type}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default UserManagement;
