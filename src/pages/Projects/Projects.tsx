import React, {FC, useState} from 'react';
import styles from './Projects.module.scss'
import MySwiper, {ISwiperSlide} from "../../components/UI/Swiper/MySwiper";

import mernDisk from './assets/mernDisk.png'
import kremlinCeramiks from './assets/kremlinCeramiks.png'
import paint from './assets/paint.png'
import reactCV from './assets/reactCV.png'
import avanta from './assets/avanta.png'

const Projects: FC = () => {
    // eslint-disable-next-line
    const [slides, setSlides] = useState<ISwiperSlide[]>([
        {src: "https://kirill55580666.github.io/KREMLIN-CERAMIKS/", title: 'Сайт гончарной мастерской (HTML + SCSS + JS + Winter CMS)', github: 'https://github.com/kirill55580666/kremlin-ceramiks.ru', image: kremlinCeramiks},
        {src: "https://kirill55580666.github.io/DISK_STORAGE_FRONT/", title: "Файловое хранилище (Mongo + Express + React + Node)", github: "https://github.com/kirill55580666/disk_storage", image: mernDisk},
        {src: "https://kirill55580666.github.io/PAINT-ONLINE-FRONT/", title: 'Рисовалка в режиме онлайн (Websockets + Node + MobX + Express)', github: 'https://github.com/kirill55580666/react_paint_online', image: paint},
        {src: "https://kirill55580666.github.io/avanta/", title: 'Сайт продажи электрооборудования', github: 'https://github.com/kirill55580666/avanta', image: avanta},
        {src: "http://cyril-ryzhikov.ru/", title: 'Сайт резюме (React + TypeScript + MobX)', github: 'https://github.com/kirill55580666/react_cv', image: reactCV},
        ])

    return (
        <div className={styles.projects}>
            <div className={styles.wrapper}>
                <MySwiper slides={slides}/>
            </div>
        </div>
    );
};

export default Projects;