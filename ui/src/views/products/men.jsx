import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-grid-system';
import {toast} from 'react-toastify'

import useURL from 'common/urls';
import useRequest from 'common/useRequest';
import ProductCard from 'components/product-card';

import MenBanner from 'images/category/men.png';
import styles from './styles.module.scss';

const Men = () => {
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
            if (JSON.parse(sessionStorage.getItem('email')).type === null || JSON.parse(sessionStorage.getItem('email')).type === undefined)
                setType('');
            else
                setType(JSON.parse(sessionStorage.getItem('email')).type)
        } else 
            setType('');
    }

    const [{status, response}, makeRequest, {FETCHING, SUCCESS, ERROR}, source] = useRequest(API_URL.PRODUCT_LIST_URL, {
        verb: 'post',
        params: {
            userId: user,
            searchTerm: '',
            searchCategory: 'Mens apparel',
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


    return(
        <div>
            {type !== 1 && type !== 2 && type !== 3 && (
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

export default Men;

