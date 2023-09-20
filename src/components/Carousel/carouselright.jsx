import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react';
import {ReactComponent as RightArrow} from '../../assets/RightArrow.svg';
import styles from './carousel.module.css';


const CarouselRight = () => {
    const swiper = useSwiper();

    const [isEnd, setIsEnd] = useState(swiper.isEnd);
    useEffect(() =>{
       swiper.on("slideChange", () => {
           setIsEnd(swiper.isEnd);
       });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
      <div className={styles.rightNavigation}>
        {!isEnd && <RightArrow onClick={() => swiper.slideNext()}/>}
        </div>
    );
  };

export default CarouselRight;
