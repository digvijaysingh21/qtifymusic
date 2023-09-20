import React, { useEffect } from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import styles from './carousel.module.css';
import CarouselLeft from './carouselLeft';
import CarouselRight from './carouselright';
import 'swiper/css';
import { Navigation } from "swiper/modules";


const Controls = ({data}) =>{
    const swiper = useSwiper();
    console.log(swiper);
    useEffect(() =>{
         swiper.slideTo(0,null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])
    return <></>;
}

const Carousel = ({data,componentRender}) =>{
   
    return (
        <div className={styles.wrapper}>
            <Swiper 
                 initialSlide={0} 
                 modules={{ Navigation }} 
                 slidesPerView={"auto"} 
                 spaceBetween={10} 
                 allowTouchMove>
                <Controls data={data}/>
                <CarouselLeft/>
                <CarouselRight/>
                {
                    data?.map((item)=>(
                            <SwiperSlide key={item?.id}>{componentRender(item)} </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
};

export default Carousel;