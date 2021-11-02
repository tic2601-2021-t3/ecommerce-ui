/*
  Author: Rina Chua
  Date: 31 Oct 2021
*/

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import styles from './styles.module.scss';

const ProductCard = ({id, image, name, desc, price}) => {
    return (
        <Card sx={{maxWidth: 345, marginBottom: '30px'}}>
            <CardMedia
                component="img"
                height="250"
                width="100%"
                image={image}
                alt="Product Image"
            />
            <CardContent>
                <a className={styles.title} href={`/productId=${id}`}>{name}</a>
                <p className={styles.desc}>{desc}</p>
                <h2 className={styles.price}>S${price}</h2>
            </CardContent>
        </Card>
    );
}

export default ProductCard;