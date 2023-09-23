import React from 'react';
import styles from './card.module.css';
import { Chip } from '@mui/material';



const Card = ({data,type}) =>{
    

    const getCard = (type)=>{
        switch(type){
            case "album" :
                // const {image,follows,title,songs} = data;
                return(
                    <div className={styles.wrapper}>
                        <div className={styles.card}>
                            <img src={data.image} alt="topalbum"/>
                            <div className={styles.banner}>
                                <Chip className={styles.chip} label={`${data.follows} Follows`} size="small"/>
                            </div>
                        </div>
                        <div className={styles.titleWrapper}>
                            <p>{data.title}</p>
                        </div>
                    </div>
                );
                case "songs":
				return (
					<div className={styles.wrapper}>
						<div className={styles.card}>
							<img src={data.image} alt="song" loading="lazy" />
							<div className={styles.banner}>
								<div id={styles.pill}>
									<p>{data.likes} Likes</p>
								</div>
							</div>
						</div>
						<div className={styles.titleWrapper}>
							<p>{data.title}</p>
						</div>
					</div>
				);

            default:
                return <></>;
        }
    }
    return getCard(type);
}

export default Card;