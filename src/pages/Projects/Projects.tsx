import React, {FC, useState} from 'react';
import styles from './Projects.module.scss'
import MySwiper, {ISwiperSlide} from "../../components/UI/Swiper/MySwiper";

import mernDisk from './assets/mernDisk.png'

const Projects: FC = () => {
    // eslint-disable-next-line
    const [slides, setSlides] = useState<ISwiperSlide[]>([
        {src: "https://react-mern-disk-storage.herokuapp.com/", title: "Файловое хранилище (Mongo + Express + React + Node)", github: "https://github.com/kirill55580666/disk_storage", image: mernDisk},
        {src: "https://swiperjs.com/demos/images/nature-2.jpg", title: '1', github: '', image: ''},
        {src: "https://swiperjs.com/demos/images/nature-3.jpg", title: '2', github: '', image: ''},
        {src: "https://swiperjs.com/demos/images/nature-4.jpg", title: '3', github: '', image: ''},
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