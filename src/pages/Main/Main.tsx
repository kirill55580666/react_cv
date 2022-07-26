import React, {FC, useState} from 'react';
import CircleAvatar from "../../components/UI/CircleAvatar/CircleAvatar";
import styles from './Main.module.scss'
import JsonCard from "../../components/UI/JsonCard/JsonCard";
import {useMediaQuery} from "react-responsive";


const Main: FC = () => {

    //     xs: 0,
    //     sm: 576px,
    //     md: 768px,
    //     lg: 992px,
    //     xl: 1200px,
    //     xxl: 1400px
    //     xxxl: 1824px специальное 'свое' значение

    const [sizeImage, setSizeImage] = useState(450)
    const [smallSize, setSmallSize] = useState(650)
    const [bigSize, setBigSize] = useState(900)
    const [sizeElement, setSizeElement] = useState(70)

    const handleXXXL = (matches: boolean) => {
        if(matches === true) {
            setSizeImage(450);
            setSmallSize(650);
            setBigSize(900);
            setSizeElement(70);
        }
    }
    const handleXXL = (matches: boolean) => {
        if(matches === true) {
            setSizeImage(400);
            setSmallSize(600);
            setBigSize(800);
            setSizeElement(60);
        }
    }

    const isXXXL = useMediaQuery(
        { query: '(min-width: 1824px)' }, undefined, handleXXXL)
    const isXXL = useMediaQuery(
        { query: '(min-width: 1400px)' }, undefined, handleXXL)

    return (
        <>
            <div className={styles.wrapperSkills}>
                <JsonCard/>
            </div>
            <div className={styles.wrapperAvatar }>
                <CircleAvatar sizeImage={sizeImage} smallSize={smallSize} bigSize={bigSize} sizeElement={sizeElement}/>
            </div>
        </>
    );
};

export default Main;