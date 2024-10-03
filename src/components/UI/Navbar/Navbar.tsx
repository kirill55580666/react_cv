import React, {FC} from 'react';
import styles from './navbar.module.scss'
import {Link} from "react-router-dom";

const Navbar: FC = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.title}>
                Frontend Developer
            </div>
            <div className={styles.links}>
                <Link to="">ГЛАВНАЯ</Link>
                <Link to="/projects">ПРОЕКТЫ</Link>
                <a href="https://github.com/kirill55580666" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://spb.hh.ru/resume/9a0fc1d0ff057764510039ed1f58494b59565a"
                   target="_blank" rel="noreferrer">HeadHunter</a>
            </div>
        </div>
    );
};

export default Navbar;