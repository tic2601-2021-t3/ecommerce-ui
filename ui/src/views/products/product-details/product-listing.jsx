import React, {Fragment, useState} from 'react';
import {Row, Col} from 'react-grid-system';
import {ToastContainer} from 'react-toastify';
import classNames from 'classnames';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import QtyField from 'components/qty-field';
import EditProduct from './edit-product';

import styles from './styles.module.scss';

const ProductListing = ({productImage, productName, productCategory, userName, productPrice, productDesc, productQty, itemQty, setItemQty, onAddCartClick, userType}) => {
    const [edit, setEdit] = useState(false);
    const onHandleEditProduct = () => setEdit(true);

    if (edit === true) {
        return (
            <EditProduct
                productImage={productImage}
                productName={productName}
                productCategory={productCategory}
                productPrice={productPrice}
                productDesc={productDesc}
                productQty={productQty}
                userType={userType}
            />
        );
    }
    return (
        <Fragment>
            <Row>
                <Col align='end'>
                    <div className={styles.wrapper}>
                        <Button
                            onClick={onHandleEditProduct}
                        >
                            Edit Product
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row align='center'>
                <Col align='center'>
                    <Card className={styles.cardWrapper}>
                        <Row>
                            <Col md={6}>
                                <img className={styles.productImage} src={productImage} alt='Product' />
                            </Col>
                            <Col md={6} align='left'>
                                <div className={styles.inputWrapper}>
                                    <h3 className={styles.productName}>{productName}</h3>
                                    <span className={styles.categoryLabel}>Category: </span>
                                    <span className={styles.categoryValue}>{productCategory}</span>
                                    <span className={styles.categoryLabel}>{' '}| Merchant: </span>
                                    <span className={styles.categoryValue}>{userName}</span><br />
                                    <label className={classNames(styles.priceValue, styles.value)}>S${productPrice}</label>
                                    <li>
                                        <span className={styles.label}>Description: </span>
                                        <span className={styles.value}>{productDesc}</span>
                                    </li>
                                    <li>
                                        <span className={styles.label}>Quantity: </span>
                                        {userType !== 1 && userType !== 2 && (
                                            <Fragment>
                                                <QtyField
                                                    itemQty={itemQty}
                                                    setItemQty={setItemQty}
                                                /> &nbsp;&nbsp;
                                                <label className={styles.categoryValue}>{productQty} pieces available</label>
                                            </Fragment>
                                        )}
                                        {userType === 2 && (
                                            <span className={styles.value}>{productQty} pieces available</span>
                                        )}
                                    </li>
                                    {userType !== 1 && userType !== 2 && (
                                        <li>
                                            <Button
                                                variant="contained"
                                                size="large"
                                                onClick={onAddCartClick}
                                            >
                                                Add to Cart
                                            </Button>
                                            <ToastContainer />
                                        </li>
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
}

export default ProductListing;