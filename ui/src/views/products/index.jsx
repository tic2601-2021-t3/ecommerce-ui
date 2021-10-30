/*
  Author: Rina Chua
  Date: 14 Oct 2021
*/

import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-grid-system';
import {toast} from 'react-toastify';

import useURL from 'common/urls';
import useRequest from 'common/useRequest';
import Button from '@mui/material/Button';
import CarouselBanner from 'components/carousel';
import ProductCard from 'components/product-card';

import styles from './styles.module.scss';

const Products = () => {
    const API_URL = useURL();
    const bytes =
        sessionStorage.getItem('email') &&
        sessionStorage.getItem('email') !== 'undefined';

    const curUser = bytes && JSON.parse(bytes);
    const [authUser] = useState(curUser);
    const [user, setUser] = useState('');
    const [type, setType] = useState('');

    const userId = () => {
        if (authUser === true) {
            if (JSON.parse(sessionStorage.getItem('email')).userId === null || JSON.parse(sessionStorage.getItem('email')).userId === undefined)
                setUser('');
            else
                setUser(JSON.parse(sessionStorage.getItem('email')).userId)
        } else 
            setUser('');
    }
    
    const userType = () => {
        if (authUser === true) {
            if (JSON.parse(sessionStorage.getItem('email')).userType === null || JSON.parse(sessionStorage.getItem('email')).userType === undefined)
                setType('');
            else
                setType(JSON.parse(sessionStorage.getItem('email')).userType)
        } else 
            setType('');
    }

    const [{status, response}, makeRequest, {FETCHING, SUCCESS, ERROR}, source] = useRequest(API_URL.PRODUCT_LIST_URL, {
        verb: 'post',
        params: {
            userId: user,
            searchTerm: '',
            searchCategory: '',
        },
    });

    useEffect(() => {
        userId();
        userType();
    }, []);

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

    console.log(user);

    return(
        <div>
            {type !== 1 && type !== 2 && (
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
                        {type !== 1 && type !== 2 && (
                            <h3 className={styles.title}>All Products</h3>
                        )}
                        {type === 2 && 
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
        </div>
    )
}

export default Products;

