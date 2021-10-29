import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-grid-system';
import {toast} from 'react-toastify'

import useURL from 'common/urls';
import useRequest from 'common/useRequest';

import Card from '@mui/material/Card';

import MenBanner from 'images/category/men.png';
import styles from './styles.module.scss';

const Men = () => {
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
            searchCategory: 'Mens apparel',
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
                        <img className={styles.categoryWrapper} src={MenBanner} alt='banner'/>
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
                                <Card className={styles.productCard}>
                                    <div>
                                        <img className={styles.prodImage} src={row.productImage} alt='Product'/><br/>
                                        <a className={styles.title} href={`/productId=${row.productId}`}>{row.productName}</a>
                                        <p className={styles.desc}>{row.productDesc}</p>
                                        <h2 className={styles.price}>S${row.productPrice}</h2>
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

export default Men;

