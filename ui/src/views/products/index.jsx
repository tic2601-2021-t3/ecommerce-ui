/*
  Author: Rina Chua
  Date: 14 Oct 2021
*/

import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-grid-system';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';

import useURL from 'common/urls';
import useRequest from 'common/useRequest';
import CarouselBanner from 'components/carousel';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import styles from './styles.module.scss';

const Products = () => {
    const API_URL = useURL();
    const bytes =
        sessionStorage.getItem('email') &&
        sessionStorage.getItem('email') !== 'undefined';

    const curUser = bytes && JSON.parse(bytes);
    const [authUser] = useState(curUser);

    const userId =
        (authUser === true && JSON.parse(sessionStorage.getItem('email')).userId === null) ? '' : (authUser === true && JSON.parse(sessionStorage.getItem('email')).userId);

    const userType = 
        (authUser === true && JSON.parse(sessionStorage.getItem('email')).userType === null) ? '' : (authUser === true && JSON.parse(sessionStorage.getItem('email')).userType);

    const [{status, response}, makeRequest, {FETCHING, SUCCESS, ERROR}, source] = useRequest(API_URL.PRODUCT_LIST_URL, {
        verb: 'post',
        params: {
            userId: '',
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
            {userType !== 1 && userType !== 2 && userType !== 3 && (
                <Row>
                    <Col md={12}>
                        <div className={styles.bannerWrapper}>
                            <CarouselBanner/>
                        </div>
                    </Col>
                </Row>
            )}
            <Row>
                <Col>
                    <div className={styles.wrapper}>
                        {userType !== 1 && userType !== 2 && userType !== 3 && (
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
                                <Card className={styles.productCard}>
                                    <div>
                                        <img className={styles.prodImage} src={row.productImage} alt='Product'/><br/>
                                        <a className={styles.title} href={`/productId=${row.productId}`}>{row.productName}</a>
                                        <p className={styles.desc}>{row.productDesc}</p>
                                        <h2 className={styles.price}>S${row.productPrice}</h2>
                                        {userType === 2 && (
                                            <Link to={{
                                                pathname: '/edit-product',
                                                state: {row}
                                                }}
                                            >
                                                Edit Product
                                            </Link>
                                        )}
                                        {/* <Button
                                            className={styles.buttonWrapper} 
                                            href='/edit-product'>
                                            Edit Product
                                        </Button> */}
                                    </div>
                                </Card>
                            </Col>
                        ))}
                        </Row>
                    </div>
                </Col>
            </Row> 
        </div>
    )
}

export default Products;

