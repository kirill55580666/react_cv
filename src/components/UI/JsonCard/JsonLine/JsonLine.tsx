import React, {FC} from 'react';
import {ISkill} from "../JsonCard";
import styles from "./JsonLine.module.scss";

interface IJsonLine extends ISkill {
    comma?: boolean;
}


const JsonLine: FC<IJsonLine> = ({name, value, comma = false}) => {

    const arrayLine = (item: string) => {
        return(
            <pre key={item}>
                <span className={styles.invisibleName}>
                    &nbsp;{name}:
                </span>
                <span>&nbsp;&nbsp;&nbsp;{item}</span>
            </pre>);
    }

    return (
        <pre>

            <span className={styles.name}>
                &nbsp;{name}:
            </span>

            <span className={styles.value}>
                &nbsp;<span>{(typeof value) === 'string' ? `"${value}"` : ''}</span>
                <span>
                    {(Array.isArray(value)) ?
                        value.map((item, index) => {
                            if(index === 0) {
                                return <span key={item}><span className={styles.bracket}>[ </span>{item}</span>
                            }
                            if(index === (value.length - 1)) {
                                return <span key={item}><span className={styles.invisibleName}>&nbsp;{name}:</span>&nbsp;&nbsp;&nbsp;{item}<span className={styles.bracket}> ]</span></span>
                            }
                            return (
                                arrayLine(item)
                            );
                        })
                        :
                        ''}
                </span>

                <span className={styles.bracket}>{comma ? ',' : ''}</span>
            </span>
        </pre>
    );
};

export default JsonLine;