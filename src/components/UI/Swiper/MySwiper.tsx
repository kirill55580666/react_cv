import React, {FC} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import styles from './MySwiper.module.scss'
import www from './assets/www.svg'
//import github from './assets/github.png'
import github from './assets/github_white.svg'
//import githubBlue from './assets/github_blue.svg'
import './index.css'


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {EffectCoverflow, Pagination} from "swiper";

export interface ISwiperSlide {
    src?: string;
    github?: string;
    title?: string;
    image?: any;
    titleColor?: any;
}

interface ISwiperSlides {
    slides: ISwiperSlide[];
}


const MySwiper: FC<ISwiperSlides> = ({slides}) => {
    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className={`${styles.swiper} mySwiper`}
        >

            {slides.map((slide) =>
                <SwiperSlide key={slide.src} className={styles.swiper__slide}>
                    <div className={styles.title} style={slide.titleColor ? {color: slide.titleColor} : {color: '#F9F4F4'}}>{slide.title}</div>
                    {slide.src ?
                        <a className={`${styles.www} ${styles.icon}`} href={slide.src} target="_blank" rel="noreferrer">
                            <img src={www} alt="ссылка"/>
                        </a>
                        : ""
                    }

                    <a className={`${styles.github} ${styles.icon}`}
                       href={slide.github} target="_blank" rel="noreferrer">
                        <img src={github} alt="ссылка"/>
                    </a>
                    <img src={slide.image} alt=''/>
                </SwiperSlide>
            )}
        </Swiper>
    );
};

export default MySwiper;