import React, {FC} from 'react';
import styles from './Footer.module.scss'
import github from './assets/github.svg'
import telegram from './assets/telegram.svg'

const Footer: FC = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.title}>
                Cyril Ryzhikov © 2024
            </div>
            <div className={styles.links}>
                <a href="https://github.com/kirill55580666" target="_blank" rel="noreferrer"><img src={github} alt="GitHub"/></a>
                <a href="https://t.me/pipipupacheck" target="_blank" rel="noreferrer"><img src={telegram} alt="Telegram"/></a>
            </div>
        </div>
    );
};

export default Footer;