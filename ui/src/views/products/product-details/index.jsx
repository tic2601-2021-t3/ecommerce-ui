/*
  Author: Rina Chua
  Date: 15 Oct 2021
*/

import React, {Fragment, useEffect} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import {toast} from 'react-toastify'

import Card from '@mui/material/Card';
import {Button} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import StarRateIcon from '@mui/icons-material/StarRate';

import useURL from 'common/urls';
import useRequest from 'common/useRequest';

import styles from './styles.module.scss';

const url = window.location.href;
const id = url.substring(url.indexOf('=') + 1);

const ProductDetails = () => {
    const API_URL = useURL();
    const [{ status, response }, makeRequest, { FETCHING, SUCCESS, ERROR }, source] = useRequest(API_URL.PRODUCT_DETAIL_URL, {
        verb: 'post',
        params: {
            userId: '',
            productId: id,
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
            <Row align='center'>
                <Col align='center'>
                    <Card className={styles.card}>
                        <Row>
                        {status === SUCCESS && (
                        <Fragment>
                            <Col md={6}>
                                <img src={response.product.productImage} alt='Product' />
                            </Col>
                            <Col md={6} align='left'>
                                <h3 className={styles.title}>{response.product.productName}</h3>
                                <p className={styles.category}>Category: {response.product.productCategory} | Stock Available: {response.product.productQty}</p>
                                <p className={styles.category}>Merchant: {response.product.productCategory}</p>
                                <p>{response.product.productDesc}</p>
                                <h2 className={styles.price}>S${response.product.productPrice}</h2>
                                <Button
                                    variant="contained"
                                    size="large"
                                >
                                    Add to Cart
                                </Button>
                            </Col>
                            </Fragment> 
                        )}
                        </Row>
                    </Card>
                </Col>
            </Row>
            <br/>
            <Row align='center'>
                <Col align='left'>
                    <Card className={styles.card}>
                        <h4 className={styles.subTitle}>Product Reviews</h4>
                        <Table className={styles.subTitle} sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{width: '50%'}}>User ID</TableCell>
                                    <TableCell sx={{width: '50%'}}>Ratings</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {status === SUCCESS &&
                                response.product.reviews.map((row) => (
                                <TableRow key={row.user_id}>
                                    <TableCell sx={{width: '50%'}}>{row.user_id}</TableCell>
                                    <TableCell sx={{width: '50%'}}>
                                        {row.rating === 1 &&
                                            <StarRateIcon className={styles.button}/>
                                        }
                                        {row.rating === 2 &&
                                            <Fragment>
                                                <StarRateIcon className={styles.button}/>
                                                <StarRateIcon className={styles.button}/>
                                            </Fragment>
                                        }
                                        {row.rating === 3 &&
                                            <Fragment>
                                                <StarRateIcon className={styles.button}/>
                                                <StarRateIcon className={styles.button}/>
                                                <StarRateIcon className={styles.button}/>
                                            </Fragment>
                                        }
                                        {row.rating === 4 &&
                                            <Fragment>
                                                <StarRateIcon className={styles.button}/>
                                                <StarRateIcon className={styles.button}/>
                                                <StarRateIcon className={styles.button}/>
                                                <StarRateIcon className={styles.button}/>
                                            </Fragment>
                                        }
                                        {row.rating === 5 &&
                                            <Fragment>
                                                <StarRateIcon className={styles.button}/>
                                                <StarRateIcon className={styles.button}/>
                                                <StarRateIcon className={styles.button}/>
                                                <StarRateIcon className={styles.button}/>
                                                <StarRateIcon className={styles.button}/>
                                            </Fragment>
                                        }
                                    </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default ProductDetails;