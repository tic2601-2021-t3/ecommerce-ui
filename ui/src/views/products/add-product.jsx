/*
  Author: Rina Chua
  Date: 25 Sep 2021
*/

import React, {useState} from 'react';
import {Container, Row, Col} from 'react-grid-system';

import Card from '@mui/material/Card';
import {Button, TextField} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

import {OPTIONS_TYPE} from 'components/input';
import ZoneUpload from 'components/zone-upload';

import styles from './styles.module.scss';


const AddProduct = () => {
    const [productName, setProductName] = useState();

    const onProductNameChange = (e) => setProductName(e.target.value);
    
    return(
        <Container fluid>
            <Row align='center'>
                <Col align='center'>
                    <h2 className={styles.titleWrapper}>Add Product</h2>
                    <Card className={styles.card}>
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
                                            />
                                        </FormControl>
                                    </li>
                                    <li>
                                        <TextField
                                            id="outlined-required"
                                            label="Discount Rate"
                                            placeholder="Eg, 20%"
                                            value={productName}
                                            onChange={onProductNameChange}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </li>
                                </div>
                            </Col>
                            <Col md={6}>
                                <ZoneUpload/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="contained">
                                    Add Product
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AddProduct;