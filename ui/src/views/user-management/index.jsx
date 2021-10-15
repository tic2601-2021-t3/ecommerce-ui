import React, {useState, useEffect} from 'react';
import {ToastContainer, toast} from 'react-toastify'
import {Redirect} from 'react-router-dom';
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

import 'react-toastify/dist/ReactToastify.css';

const UserManagement = () => {
    const API_URL = useURL();
    // const {setAuthTokens} = useAuthentication();

    // const [{status, response}, makeRequest, {FETCHING, SUCCESS, ERROR}] = useRequest(API_URL.USER_LIST_URL, {
    //     verb: 'get',
    //     params: {
    //         email: JSON.parse(sessionStorage.getItem('email')).email,
    //         userType: JSON.parse(sessionStorage.getItem('email')).userType,
    //     },
    // });

    // useEffect(() => {
    //     if (status === ERROR) {
    //         toast.error(response.message);
    //     }
    // }, [status]);

    // const customId = 'id1';

    // if (status === SUCCESS && response.status === 0) {
    //     setAuthTokens(response);
    //     toast.success(response.message, {
    //         toastId: customId,
    //     });
    //     // return <Redirect to={referer} />;
    // }
    // else if (status === SUCCESS && response.status === 1) {
    //     toast.error(response.message, {
    //         toastId: customId,
    //     });
    // }

    return (
        <Container fluid>
            <TableContainer component={Paper}> 
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>User ID</TableCell>
                            <TableCell align="right">User Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">User Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {response.users.map((row) => ( */}
                            <TableRow
                            // key={row.userId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {/* <TableCell component="th" scope="row">
                                    {row.userId}
                                </TableCell>
                                <TableCell align="right">{row.userName}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.userType}</TableCell> */}
                                <TableCell component="th" scope="row">
                                    1
                                </TableCell>
                                <TableCell align="right">rina</TableCell>
                                <TableCell align="right">rina@test.com</TableCell>
                                <TableCell align="right">Merchant</TableCell>
                            </TableRow>
                        {/* ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default UserManagement;
