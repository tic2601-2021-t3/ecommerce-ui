/*
  Author: Rina Chua
  Date: 15 Oct 2021
*/

import React, {Fragment, useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import {toast} from 'react-toastify'
import _ from 'lodash';

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import StarRateIcon from '@mui/icons-material/StarRate';

import {useCart} from 'common/useCart';
import API_URL from 'common/urls';
import useRequest from 'common/useRequest';

import ProductListing from 'views/products/product-details/product-listing';
import styles from './styles.module.scss';

const url = window.location.href;
const id = url.substring(url.indexOf('=') + 1);

const ProductDetails = () => {
    const [itemQty, setItemQty] = useState(1);

    // Login Storage
    const bytes =
        sessionStorage.getItem('email') &&
        sessionStorage.getItem('email') !== 'undefined';
    const curUser = bytes && JSON.parse(bytes);
    const [authUser] = useState(curUser);
    const userType = (authUser === true ? JSON.parse(sessionStorage.getItem('email')).userType : '');

    // API for Product Details
    const [{ status, response }, makeRequest, { SUCCESS, ERROR }, source] = useRequest(API_URL.PRODUCT_DETAIL_URL, {
        verb: 'post',
        params: {
            userId: authUser === true ? JSON.parse(sessionStorage.getItem('email')).userId : '',
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

    // Add to Cart
    const {setCart} = useCart();
    const customId = 'id1';
    const onAddCartClick = () => {
        if (userType === 3) {
            const cartProduct = {
                'productImage': response.product.productImage,
                'productName': response.product.productName,
                'productId': response.product.productId,
                'productQuantity': itemQty,
                'productPrice': (itemQty * response.product.productPrice).toFixed(2)
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
            {status === SUCCESS && (
                <ProductListing
                    productImage={response.product.productImage}
                    productName={response.product.productName}
                    productCategory={response.product.productCategory}
                    userName={response.product.userName}
                    productPrice={response.product.productPrice}
                    productDesc={response.product.productDesc}
                    productQty={response.product.productQty}
                    itemQty={itemQty}
                    setItemQty={setItemQty}
                    onAddCartClick={onAddCartClick}
                    userType={userType}
                />
            )}
            <br />
            <Fragment>
                <Row align='center'>
                    <Col align='left'>
                        <Card className={styles.cardWrapper}>
                            <h4 className={styles.subTitle}>Product Reviews</h4>
                            {(status === SUCCESS && response.product.reviews.length === 0) && (
                                <label className={styles.emptyLabel}>There is no reviews for this product.</label>
                            )}
                            {(status === SUCCESS && response.product.reviews.length > 0) && (
                                <Table className={styles.tableWrapper} sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ width: '50%' }}>User ID</TableCell>
                                            <TableCell sx={{ width: '50%' }}>Ratings</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {status === SUCCESS &&
                                            response.product.reviews.map((row) => (
                                                <TableRow key={row.user_id}>
                                                    <TableCell sx={{ width: '50%' }}>{row.user_id}</TableCell>
                                                    <TableCell sx={{ width: '50%' }}>
                                                        {row.rating === 1 &&
                                                            <StarRateIcon className={styles.button} />
                                                        }
                                                        {row.rating === 2 &&
                                                            <Fragment>
                                                                <StarRateIcon className={styles.button} />
                                                                <StarRateIcon className={styles.button} />
                                                            </Fragment>
                                                        }
                                                        {row.rating === 3 &&
                                                            <Fragment>
                                                                <StarRateIcon className={styles.button} />
                                                                <StarRateIcon className={styles.button} />
                                                                <StarRateIcon className={styles.button} />
                                                            </Fragment>
                                                        }
                                                        {row.rating === 4 &&
                                                            <Fragment>
                                                                <StarRateIcon className={styles.button} />
                                                                <StarRateIcon className={styles.button} />
                                                                <StarRateIcon className={styles.button} />
                                                                <StarRateIcon className={styles.button} />
                                                            </Fragment>
                                                        }
                                                        {row.rating === 5 &&
                                                            <Fragment>
                                                                <StarRateIcon className={styles.button} />
                                                                <StarRateIcon className={styles.button} />
                                                                <StarRateIcon className={styles.button} />
                                                                <StarRateIcon className={styles.button} />
                                                                <StarRateIcon className={styles.button} />
                                                            </Fragment>
                                                        }
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                    </TableBody>
                                </Table>
                            )}
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        </Container>
    )
};

export default ProductDetails;