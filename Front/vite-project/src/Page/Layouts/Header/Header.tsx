import React from "react";
import { useState } from "react";
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

// @ts-ignore — добавьте эту строку, если TypeScript ругается на отсутствие типов для file.js

import { Photo } from "../../../file";

export default function Header(): React.JSX.Element {

    return(
<>
<header>

    <div className={styles.headerBlockTop}>
        <div className={styles.headerJC}>
            <div className={styles.logoPhoto}>
                <img src={Photo.Vector} alt="" />
                <p>Pinnacle</p>
            </div>
            <nav className={styles.nav}>
                    <NavLink to={"/"}  className={({ isActive }) => (isActive ? `${styles.active} ${styles.activee}` : "")}>Home</NavLink>
                    <NavLink to={""} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>About Us</NavLink>
                    <NavLink to={""} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>Projects</NavLink>
                    <NavLink to={""} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>Service</NavLink>
                    <NavLink to={""} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>News</NavLink>


            </nav> 
            <button className={styles.ConectUs}>Contact Us</button>
        </div>
    </div>
</header>
</>
)
}

