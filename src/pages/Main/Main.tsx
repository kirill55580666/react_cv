import React, {FC, useContext, useEffect} from 'react';
import CircleAvatar from "../../components/UI/CircleAvatar/CircleAvatar";
import styles from './Main.module.scss'
import JsonCard from "../../components/UI/JsonCard/JsonCard";
import {useMediaQuery} from "react-responsive";
import {Context} from "../../index";
import { observer } from 'mobx-react-lite';


const Main: FC = observer(() => {

    //     xs: 0,
    //     sm: 576px,
    //     md: 768px,
    //     lg: 992px,
    //     xl: 1200px,
    //     xxl: 1400px
    //     xxxl: 1824px специальное 'свое' значение

    const {store} = useContext(Context);

    const setXXXL = () => {
        store.setSizeImage(450);
        store.setSmallSize(650);
        store.setBigSize(900);
        store.setSizeElement(70);
    }
    const setXXL = () => {
        store.setSizeImage(400);
        store.setSmallSize(600);
        store.setBigSize(800);
        store.setSizeElement(60);
    }
    const setXL = () => {
        store.setSizeImage(300);
        store.setSmallSize(450);
        store.setBigSize(650);
        store.setSizeElement(60);
    }
    const setLessXL = () => {
        store.setSizeImage(150);
        store.setSmallSize(200);
        store.setBigSize(300);
        store.setSizeElement(20);
    }

    const handleXXXL = (matches: boolean) => {
        if(matches === true) {
            setXXXL();
        }
    }
    const handleXXL = (matches: boolean) => {
        if(matches === true) {
            setXXL();
        }
    }
    const handleXL = (matches: boolean) => {
        if(matches === true) {
            setXL();
        }
    }
    const handleLessXL = (matches: boolean) => {
        if(matches === true) {
            setLessXL();
        }
    }

    const isXXXL = useMediaQuery(
         {minWidth: 1824}, undefined, handleXXXL)
    const isXXL = useMediaQuery(
        { minWidth: 1400, maxWidth: 1823 }, undefined, handleXXL)
    const isXL = useMediaQuery(
        { minWidth: 1200, maxWidth: 1399}, undefined, handleXL)
    const isLessXL = useMediaQuery(
        { maxWidth: 1200}, undefined, handleLessXL)

    useEffect(() => {
        if (isXXXL) {
            setXXXL();
        }
        if (isXXL) {
            setXXL();
        }
        if(isXL) {
            setXL();
        }
        if(isLessXL) {
            setLessXL();
        }
    },[])

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperSkills}>
                <JsonCard/>
            </div>
            <div className={styles.wrapperAvatar }>
                <CircleAvatar sizeImage={store.sizeImage} smallSize={store.smallSize} bigSize={store.bigSize} sizeElement={store.sizeElement}/>
            </div>
        </div>
    );
});

export default Main;