import React from 'react';
import HeroImage from '../../assets/headphone.png'
import styles from './hero.module.css';

const Hero = () =>{
    return (
        <div className={styles.hero}>
            <div>
               <h1>100 Thousand Songs, ad-free</h1> 
               <h1>Over thousands podcast episodes</h1>
            </div>
            <div>
                <img src={HeroImage} width={212}  alt="headphone-img"/>
            </div>
        </div>
    )
}
export default Hero;