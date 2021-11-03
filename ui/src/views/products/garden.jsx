/*
  Author: Rina Chua
  Date: 21 Oct 2021
*/

import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-grid-system';
import {toast} from 'react-toastify'

import useURL from 'common/urls';
import useRequest from 'common/useRequest';
import ProductCard from 'components/product-card';

import GardenBanner from 'images/category/garden.png';
import styles from './styles.module.scss';

const Garden = () => {
    const API_URL = useURL();
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
            searchCategory: 'Garden',
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
                <Row>
                    <Col md={12}>
                        <img className={styles.categoryWrapper} src={GardenBanner} alt='banner'/>
                    </Col>
                </Row>
            )}
            <Row>
                <Col>
                    <div className={styles.wrapper}>
                        <br/>
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

export default Garden;

