import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-grid-system';
import {toast} from 'react-toastify'

import useURL from 'common/urls';
import useRequest from 'common/useRequest';

import Card from '@mui/material/Card';

import styles from './styles.module.scss';

const url = window.location.href;
const id = url.substring(url.indexOf('=')+1);

const Garden = () => {
    const API_URL = useURL();
    const bytes =
    sessionStorage.getItem('email') &&
    sessionStorage.getItem('email') !== 'undefined';

    const curUser = bytes && JSON.parse(bytes);
    const [authUser] = useState(curUser);

    const userId = 
        (authUser === true && JSON.parse(sessionStorage.getItem('email')).userId === null) ? '' : (authUser === true && JSON.parse(sessionStorage.getItem('email')).userId);

    const [{status, response}, makeRequest, {FETCHING, SUCCESS, ERROR}, source] = useRequest(API_URL.PRODUCT_LIST_URL, {
        config: {
            params: {
                userId: userId,
                searchTerm: '',
                searchCategory: 'Garden',
            },
        }
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
            <Row>
                <Col>
                    <div className={styles.wrapper}>
                        <h3>All Products</h3>
                        <Row>
                        {status === SUCCESS && response.products.map((row) => (
                            <Col md={3}>
                                <Card className={styles.productCard}>
                                    <div>
                                        <a className={styles.title} href={`/productId=${id}`}>{row.productName}</a>
                                        <p>{row.productDesc}</p>
                                        <h2 className={styles.price}>{row.productPrice}</h2>
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

export default Garden;

