import React, { useState } from 'react';
import styles from './section.module.css';
import { CircularProgress } from '@mui/material';
import Card from '../Card/card';

const Section = ({title, data}) =>{
   const [carouselToggle, setCarouselToggle] = useState(true);
    const handleToggle = () =>{
         setCarouselToggle(!carouselToggle);
    }
    return (
        <div>
            <div className={styles.header}>
               <h3>{title}</h3>
               <h4 className={styles.toggleText} onClick={handleToggle}>
                    {carouselToggle ? "Show All" : "Collapse All"}
               </h4>
            </div>
            {
                !data.length?(
                    <CircularProgress/>
                ):(<div className={styles.cardWrapper}>
                    {!carouselToggle?
                  <div className={styles.wrapper}>
                    {data.map((item) => <Card key={item.id} data={item} type="album"/>)}
                </div>:null}</div>)
            }
        </div>
    )
}

export default Section;