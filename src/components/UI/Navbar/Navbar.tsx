import React, {FC} from 'react';
import styles from './navbar.module.scss'
import {Link} from "react-router-dom";

const Navbar: FC = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.title}>
                Fullstack Developer
            </div>
            <div className={styles.links}>
                <Link to="">ГЛАВНАЯ</Link>
                <Link to="/projects">ПРОЕКТЫ</Link>
                <a href="https://github.com/kirill55580666 " target="_blank" rel="noreferrer">GitHub</a>
                <Link to="/contacts">HeadHunter</Link>
            </div>
        </div>
    );
};

export default Navbar;