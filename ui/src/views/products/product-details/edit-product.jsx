/*
  Author: Rina Chua
  Date: 25 Sep 2021
*/

import React, {Fragment, useState, useEffect} from 'react';
import {Row, Col} from 'react-grid-system';
import {ToastContainer, toast} from 'react-toastify';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

import API_URL from 'common/urls';
import useRequest from 'common/useRequest';
import { OPTIONS_TYPE } from 'components/input';

import styles from './styles.module.scss';

const url = window.location.href;
const id = url.substring(url.indexOf('=') + 1);

const EditProduct = ({productImage, productName, productCategory, productPrice, productDesc, productQty, userType}) => {
    const [editedProductName, setEditedProductName] = useState(productName);
    const [editedProductDesc, setEditedProductDesc] = useState(productDesc);
    const [editedProductCategory, setEditedProductCategory] = useState(productCategory);
    const [editedProductQty, setEditedProductQty] = useState(productQty);
    const [editedProductPrice, setEditedProductPrice] = useState(productPrice);
    const onEditedProductNameChange = (e) => setEditedProductName(e.target.value);
    const onEditedProductDescChange = (e) => setEditedProductDesc(e.target.value);
    const onEditedProductCategoryChange = (e) => setEditedProductCategory(e.target.value);
    const onEditedProductQtyChange = (e) => setEditedProductQty(e.target.value);
    const onEditedProductPriceChange = (e) => setEditedProductPrice(e.target.value);
    const onHandleSaveProduct = () => {
        makeRequest();
        setTimeout(function(){window.location.href=`/productId=${id}`;}, 2000);
    }
    const onHandleCancelProduct = () => window.location.href = `/productId=${id}`;

    const [{ status, response }, makeRequest, { SUCCESS, ERROR }, source] = useRequest(API_URL.EDIT_PRODUCT_URL, {
        verb: 'post',
        params: {
            productId: id,
            userId: JSON.parse(sessionStorage.getItem('email')).userId,
            productName: editedProductName,
            productDesc: editedProductDesc,
            productCategory: editedProductCategory,
            productQty: editedProductQty,
            productPrice: editedProductPrice,
            productImage: productImage,
        },
    });

    useEffect(() => {
        if (status === ERROR) {
            toast.error(response.message);
        }
    }, [status]);

    const customId = 'id1';
    if (status === SUCCESS && response.status === 0) {
        toast.success(response.message, {
            toastId: customId,
        });
    }
    else if (status === SUCCESS && response.status === 1) {
        toast.error(response.message, {
            toastId: customId,
        });
    }

    return (
        <Fragment>
            <Row>
                <Col align='end'>
                    <div className={styles.wrapper}>
                        <Button
                            variant='contained'
                            onClick={onHandleSaveProduct}
                        >
                            Save
                        </Button>
                        <Button
                            onClick={onHandleCancelProduct}
                        >
                            Cancel
                        </Button>
                        <ToastContainer />
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
                                    <li>
                                        <span className={styles.label}>Product Name: </span>
                                        <span className={styles.value}>
                                            <TextField
                                                className={styles.editBtnWrapper}
                                                id="outlined-required"
                                                defaultValue={productName}
                                                onChange={onEditedProductNameChange}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                        </span>
                                    </li>
                                    <li>
                                        <span className={styles.label}>Category: </span>
                                        <span className={styles.value}>
                                            <TextField
                                                className={styles.editBtnWrapper}
                                                id="outlined-select"
                                                select
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                defaultValue={productCategory}
                                                onChange={onEditedProductCategoryChange}
                                            >
                                                {OPTIONS_TYPE.CATEGORY.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </span>
                                    </li>
                                    <li>
                                        <span className={styles.label}>Amount: </span>
                                        <span className={styles.value}>
                                            <FormControl>
                                                <OutlinedInput
                                                    id="outlined-adornment-amount"
                                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                    defaultValue={productPrice}
                                                    onChange={onEditedProductPriceChange}
                                                />
                                            </FormControl>
                                        </span>
                                    </li>
                                    <li>
                                        <span className={styles.label}>Description: </span>
                                        <span className={styles.value}>
                                            <TextField
                                                className={styles.editBtnWrapper}
                                                id="outlined-multiline-static"
                                                multiline
                                                rows={4}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                defaultValue={productDesc}
                                                onChange={onEditedProductDescChange}
                                            />
                                        </span>
                                    </li>
                                    <li>
                                        <span className={styles.label}>Quantity: </span>
                                        {userType === 2 && (
                                            <span className={styles.value}>
                                            <TextField
                                                className={styles.editBtnWrapper}
                                                id="outlined-number"
                                                type ="number"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                defaultValue={productQty}
                                                onChange={onEditedProductQtyChange}
                                            />
                                                &nbsp; pieces available
                                            </span>
                                        )}
                                    </li>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default EditProduct;