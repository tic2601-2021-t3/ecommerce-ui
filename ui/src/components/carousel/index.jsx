import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';

import Banner1 from 'images/banner/banner-1.jpg';
import Banner2 from 'images/banner/banner-2.jpg';
import Banner3 from 'images/banner/banner-3.jpg';
import styles from './styles.module.scss';

const CarouselBanner = () => {
    return (
      <Carousel>
        <Carousel.Item interval={3000}>
            <img
                className={styles.imageWrapper}
                src={Banner1}
                alt="Main Banner"
            />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img
                className={styles.imageWrapper}
                src={Banner2}
                alt="Secondary Banner"
            />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img
                className={styles.imageWrapper}
                src={Banner3}
                alt="Secondary Banner"
            />
        </Carousel.Item>
      </Carousel>
    );
}

export default CarouselBanner;