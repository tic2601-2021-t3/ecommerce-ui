/*
  Author: Rina Chua
  Date: 14 Oct 2021
*/

import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import {toast} from 'react-toastify';

import API_URL from 'common/urls';
import useRequest from 'common/useRequest';
import Button from '@mui/material/Button';
import CarouselBanner from 'components/carousel';
import ProductCard from 'components/product-card';

import styles from './styles.module.scss';

const Products = () => {
    const bytes =
        sessionStorage.getItem('email') &&
        sessionStorage.getItem('email') !== 'undefined';
    const curUser = bytes && JSON.parse(bytes);
    const [authUser] = useState(curUser);
    const userType = (authUser === true ? JSON.parse(sessionStorage.getItem('email')).userType : '');

    const [{status, response}, makeRequest, {SUCCESS, ERROR}, source] = useRequest(API_URL.PRODUCT_LIST_URL, {
        verb: 'post',
        params: {
            userId: authUser === true && userType === 2 ? JSON.parse(sessionStorage.getItem('email')).userId : '',
            searchTerm: '',
            searchCategory: '',
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

    return(
        <div>
            {userType !== 1 && userType !== 2 && (
                <div className={styles.bannerWrapper}>
                    <CarouselBanner/>
                </div>
            )}
            <Container fluid>
                <Row>
                    <Col>
                        <div className={styles.wrapper}>
                            {userType !== 1 && userType !== 2 && (
                                <h3 className={styles.title}>All Products</h3>
                            )}
                            {userType === 2 && 
                                <Row>
                                    <Col md={10}></Col>
                                    <Col md={2}>
                                        <div className={styles.buttonWrapper}>
                                            <Button href='/add-product'>
                                                Add Product
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            }
                            <Row>
                            {status === SUCCESS && response.products.map((row) => (
                                <Col md={3}>
                                    <ProductCard
                                        id={row.productId}
                                        image={row.productImage}
                                        name={row.productName}
                                        desc={row.productDesc}
                                        price={row.productPrice}
                                    />
                                </Col>
                            ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Products;

