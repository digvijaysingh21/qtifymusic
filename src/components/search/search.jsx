import React from 'react';
import {ReactComponent as SearchIcon} from '../../assets/Search icon.svg';
import styles from './search.module.css';

const Search = () =>{
    return (
      <div >
        <form className={styles.wrapper}>
            <input className={styles.search}/>
            <div>
                <button className={styles.searchbtn} type="submit">
                    <SearchIcon/>
                </button>
            </div>
        </form>
      </div>
    )
}

export default Search;