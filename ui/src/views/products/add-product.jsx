/*
  Author: Rina Chua
  Date: 25 Sep 2021
*/

import React, {useState, useEffect, useCallback} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import {ToastContainer, toast} from 'react-toastify'
import classNames from 'classnames';

import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

import API_URL from 'common/urls';
import useRequest from 'common/useRequest';

import {OPTIONS_TYPE} from 'components/input';
import ZoneUpload from 'components/zone-upload';

import styles from './styles.module.scss';

const AddProduct = () => {
    const [productName, setProductName] = useState();
    const [productDesc, setProductDesc] = useState();
    const [productCategory, setProductCategory] = useState();
    const [productQty, setProductQty] = useState();
    const [productPrice, setProductPrice] = useState();
    const [imageBase, setImageBase] = useState();
    const onProductNameChange = (e) => setProductName(e.target.value);
    const onProductDescChange = (e) => setProductDesc(e.target.value);
    const onProductCategoryChange = (e) => setProductCategory(e.target.value);
    const onProductQtyChange = (e) => setProductQty(e.target.value);
    const onProductPriceChange = (e) => setProductPrice(e.target.value);
    const onHandleAddProduct = () => { 
        makeRequest();
        setTimeout(function(){window.location.href='/';}, 3000);
    };
    const onHandleCancel = () => window.history.back();

    // Image Upload
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader();
          reader.onabort = () => console.log('Process of file has been aborted');
          reader.onerror = () => console.log('Process of reading file is failed');
          reader.onload = () => {
            setImageBase(reader.result);
            return imageBase;
          }
          reader.readAsDataURL(file)
        })
    }, []);

    const [{status, response}, makeRequest, {SUCCESS, ERROR}, source] = useRequest(API_URL.ADD_PRODUCT_URL, {
        verb: 'post',
        params: {
            userId: JSON.parse(sessionStorage.getItem('email')).userId,
            productName: productName, 
            productDesc: productDesc, 
            productCategory: productCategory, 
            productQty: productQty, 
            productPrice: productPrice,
            productImage: imageBase,
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

    return(
        <Container fluid>
            <Row>
                <Col>
                    <h3 className={classNames(styles.title, styles.wrapper)}>Add Product</h3>
                </Col>
            </Row>
            <Row align='center'>
                <Col align='center'>
                    <Card className={styles.cardWrapper}>
                        <Row>
                            <Col md={6}>
                                <div className={styles.inputWrapper}>
                                    <li>
                                        <TextField
                                            id="outlined-required"
                                            label="Product Name"
                                            placeholder="Eg, Men's Underwear"
                                            value={productName}
                                            onChange={onProductNameChange}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </li>
                                    <li>
                                        <TextField
                                            id="outlined-multiline-static"
                                            label="Product Description"
                                            placeholder="Eg, Premium cotton material and design for comfortable and sleek fit. Sizes available from S to XXXXXXXXXXXXXXXXXXXL."
                                            multiline
                                            rows={4}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={productDesc}
                                            onChange={onProductDescChange}
                                        />
                                    </li>
                                    <li>
                                        <TextField
                                            id="outlined-select"
                                            select
                                            label="Product Category"
                                            placeholder="Select Product Category"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={productCategory}
                                            onChange={onProductCategoryChange}
                                        >
                                            {OPTIONS_TYPE.CATEGORY.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </li>
                                    <li>
                                        <TextField
                                            id="outlined-number"
                                            label="Quantity"
                                            type="number"
                                            placeholder="Eg, 1000"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={productQty}
                                            onChange={onProductQtyChange}
                                        />
                                    </li>
                                    <li>
                                        <FormControl>
                                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-amount"
                                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                label="Amount"
                                                placeholder="Eg, 9.99"
                                                value={productPrice}
                                                onChange={onProductPriceChange}
                                            />
                                        </FormControl>
                                    </li>
                                </div>
                            </Col>
                            <Col md={6}>
                                <ZoneUpload
                                    image={imageBase}
                                    onDrop={onDrop}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button 
                                    variant="contained"
                                    onClick={onHandleAddProduct}
                                >
                                    Add Product
                                </Button> &nbsp;
                                <Button variant="text"
                                    onClick={onHandleCancel}
                                >
                                    Cancel
                                </Button>
                                <ToastContainer/>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AddProduct;