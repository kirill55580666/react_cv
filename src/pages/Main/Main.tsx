import React, {FC} from 'react';
import CircleAvatar from "../../components/UI/CircleAvatar/CircleAvatar";
import styles from './Main.module.scss'
import JsonCard from "../../components/UI/JsonCard/JsonCard";


const Main: FC = () => {

    return (
        <>
            <div className={styles.wrapperSkills}>
                <JsonCard/>
            </div>
            <div className={styles.wrapperAvatar }>
                <CircleAvatar/>
            </div>
        </>
    );
};

export default Main;