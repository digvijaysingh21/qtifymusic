import React, { useState } from 'react';
import styles from './section.module.css';
import { CircularProgress } from '@mui/material';
import Card from '../Card/card';
import Carousel from '../Carousel/carousel';

const Section = ({title, data, type,header}) =>{
   const [carouselToggle, setCarouselToggle] = useState(true);
    const handleToggle = () =>{
         setCarouselToggle(!carouselToggle);
    }
    return(
        <div>
            {header === "all" ? (
				<></>
			) : (
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>
                    {carouselToggle?"Show All" : "Collapse All"}
                </h4>
            </div>
            )}
            {
                !data.length?(
                    <CircularProgress/>
                ):(
                    <div className={styles.cardWrapper}>
                      {!carouselToggle?
                      <div className={styles.wrapper}>
                        {data.map((item) => <Card type={type} key={item.id} data={item}/>)}
                      </div>:(
                        <Carousel data={data} componentRender={(ele) => <Card data={ele} type={type}/>}/>
                      )}
                    </div>
                )
            }
        </div>
    )
}

export default Section;