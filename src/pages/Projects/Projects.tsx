import React, {FC, useState} from 'react';
import styles from './Projects.module.scss'
import MySwiper, {ISwiperSlide} from "../../components/UI/Swiper/MySwiper";

import mernDisk from './assets/mernDisk.png'
import kremlinCeramiks from './assets/kremlinCeramiks.png'
import vh from './assets/vh.png'
import spotify from './assets/spotify.png'
import paint from './assets/paint.png'
import todo from './assets/todo.png'
import reactCV from './assets/reactCV.png'
import chess from './assets/chess.png'

const Projects: FC = () => {
    // eslint-disable-next-line
    const [slides, setSlides] = useState<ISwiperSlide[]>([
        {src: "http://kremlin-ceramiks.ru/", title: 'Сайт гончарной мастерской (HTML + SCSS + JS + Winter CMS)', github: 'https://github.com/kirill55580666/kremlin-ceramiks.ru', image: kremlinCeramiks},
        {src: "https://react-mern-disk-storage.herokuapp.com/", title: "Файловое хранилище (Mongo + Express + React + Node)", github: "https://github.com/kirill55580666/disk_storage", image: mernDisk},
        {src: "https://react-express-paint-online.herokuapp.com/", title: 'Рисовалка в режиме онлайн (Websockets + Node + MobX + Express)', github: 'https://github.com/kirill55580666/react_paint_online', image: paint},
        {src: "https://react-spotify-nest-next.herokuapp.com/tracks", title: 'Музыкальная площадка (Mongo + Next + Nest + TypeScript + Redux)', github: 'https://github.com/kirill55580666/react_music_platform', image: spotify},
        {src: "https://react-chess-typescript.herokuapp.com/", title: 'Шахматы (недоделано React + TypeScript)', github: 'https://github.com/kirill55580666/react_chess', image: chess},
        {src: "https://react-posts-todo.herokuapp.com/", title: 'Список постов (React Native)', github: 'https://github.com/kirill55580666/react_todo', image: todo},
        {src: "https://suv-vh.herokuapp.com/", title: 'Сайт по продаже внедорожников (HTML + SCSS + JS)', github: 'https://github.com/kirill55580666/suv-vh', image: vh},
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