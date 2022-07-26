import React, {FC} from 'react';
import styles from './Footer.module.scss'

const Footer: FC = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.title}>
                Cyril Ryzhikov © 2022
            </div>
            <div className={styles.links}>
                <a href="https://github.com/kirill55580666 " target="_blank" rel="noreferrer">Telegram</a>
                <a href="https://github.com/kirill55580666 " target="_blank" rel="noreferrer">WhatsUp</a>
                <a href="https://github.com/kirill55580666 " target="_blank" rel="noreferrer">GitHub</a>
            </div>
        </div>
    );
};

export default Footer;