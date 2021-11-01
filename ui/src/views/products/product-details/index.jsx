/*
  Author: Rina Chua
  Date: 15 Oct 2021
*/

import React, {Fragment, useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import {ToastContainer, toast} from 'react-toastify'
import classNames from 'classnames';
import _ from 'lodash';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import StarRateIcon from '@mui/icons-material/StarRate';
import QtyField from 'components/qty-field';

import {useCart} from 'common/useCart';
import useURL from 'common/urls';
import useRequest from 'common/useRequest';

import styles from './styles.module.scss';

const url = window.location.href;
const id = url.substring(url.indexOf('=') + 1);

const ProductDetails = () => {
    const API_URL = useURL();
    const [itemQty, setItemQty] = useState(1);

    // Login Storage
    const bytes =
        sessionStorage.getItem('email') &&
        sessionStorage.getItem('email') !== 'undefined';
    const curUser = bytes && JSON.parse(bytes);
    const [authUser] = useState(curUser);

    // API for Product Details
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

    const {setCart} = useCart();
    const customId = 'id1';
    const onAddCartClick = () => {
        if (authUser === true && JSON.parse(sessionStorage.getItem('email')).userType === 3) {
            const cartProduct = {
                'productImage': response.product.productImage,
                'productName': response.product.productName,
                'productId': response.product.productId, 
                'productQuantity': 1,
                'productPrice': response.product.productPrice
            };
            setCart(cartProduct);
            toast.success('Item has been added to the cart.', {
                toastId: customId,
            });
        } else {
            window.location.href = '/login';
        }
    }

    return (
        <Container fluid>
            <Row align='center'>
                <Col align='center'>
                    <Card className={styles.cardWrapper}>
                        <Row>
                        {status === SUCCESS && (
                        <Fragment>
                            <Col md={6}>
                                <img className={styles.productImage} src={response.product.productImage} alt='Product' />
                            </Col>
                            <Col md={6} align='left'>
                                <div className={styles.inputWrapper}>
                                    <h3 className={styles.productName}>{response.product.productName}</h3>
                                    <span className={styles.categoryLabel}>Category: </span>
                                    <span className={styles.categoryValue}>{response.product.productCategory}</span>
                                    <span className={styles.categoryLabel}>{' '}| Merchant: </span>
                                    <span className={styles.categoryValue}>{response.product.userName}</span><br/>
                                    <label className={classNames(styles.priceValue, styles.value)}>S${response.product.productPrice}</label>
                                    <li>
                                        <span className={styles.label}>Description: </span>
                                        <span className={styles.value}>{response.product.productDesc}</span>
                                    </li>
                                    <li>
                                        <span className={styles.label}>Quantity: </span>
                                        <QtyField
                                            itemQty={itemQty}
                                            setItemQty={setItemQty}
                                        /> &nbsp;&nbsp;
                                        <label className={styles.categoryValue}>{response.product.productQty} pieces available</label>
                                    </li>
                                    {/* {authUser === true && (sessionStorage.getItem('email').userType !== 1 || sessionStorage.getItem('email').userType !== 2) && ( */}
                                        <li>
                                            <Button
                                                variant="contained"
                                                size="large"
                                                onClick={onAddCartClick}
                                            >
                                                Add to Cart
                                            </Button>
                                            <ToastContainer/>
                                        </li>
                                    {/* )} */}
                                </div>
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
                    <Card className={styles.cardWrapper}>
                        <h4 className={styles.subTitle}>Product Reviews</h4>
                        <Table className={styles.tableWrapper} sx={{ minWidth: 650 }} aria-label="simple table">
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