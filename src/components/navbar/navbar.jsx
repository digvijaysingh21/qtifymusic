import React from 'react';
import styles from './navbar.module.css';
import Button from '../Button/button';
import Logo from '../logo/logo'
import Search from '../search/search';
const NavBar = () =>{
    return(
        <nav className={styles.navBar}>
            <Logo/>
            <Search/>
            <Button children="Give Feedback"/>
        </nav>
    )
}

export default NavBar;