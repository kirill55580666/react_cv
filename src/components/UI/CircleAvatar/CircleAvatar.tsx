import React, {FC} from 'react';
import styles from './CircleAvatar.module.scss'
import avatar from './assets/shelly.jpg'
import jsPNG from './assets/js.png'
import reactPNG from './assets/react.png'
import nodePNG from './assets/nodejs.png'
import typescriptPNG from './assets/typescript.png'
import expressPNG from './assets/express.svg'
import mongoPNG from './assets/mongo.png'
import reduxPNG from './assets/redux.png'
import CircleElement from "./Circle/CircleElement/CircleElement";
import Circle from "./Circle/Circle";
import angleCoordinates from "./Circle/angleCoordinates";

interface ICircleAvatar {
    sizeImage: number;
    smallSize: number;
    bigSize: number;
    sizeElement: number;
}

const CircleAvatar: FC<ICircleAvatar> = ({bigSize, sizeImage, sizeElement, smallSize}) => {

    const alt = 'Фото скилла'

    // возможно стоить вынести в useState, но тогда ухудшится читаемость кода
    const X: Array<number> = [];
    const Y: Array<number> = [];

    ([X[0], Y[0]] = angleCoordinates(smallSize, 225));
    ([X[1], Y[1]] = angleCoordinates(smallSize, 135));
    ([X[2], Y[2]] = angleCoordinates(smallSize, 0));
    ([X[3], Y[3]] = angleCoordinates(bigSize, 0));
    ([X[4], Y[4]] = angleCoordinates(bigSize, 90));
    ([X[5], Y[5]] = angleCoordinates(bigSize, 180));
    ([X[6], Y[6]] = angleCoordinates(bigSize, 270));

    return (
        <div className={styles.wrapper}>
            <img style={{height: sizeImage}} className={styles.avatar} src={avatar} alt="моё фото"/>
            <Circle
                className={styles.circle_to_center}
                size={smallSize}
                color='#184e7c'
                borderSize={3}
            >
                <CircleElement
                    animationName='circle1'
                    src={jsPNG}
                    size={sizeElement}
                    parentSize={smallSize}
                    alt={alt}
                    startX ={X[0]}
                    startY={Y[0]}
                />
                <CircleElement
                    animationName='circle2'
                    src={reactPNG}
                    size={sizeElement}
                    parentSize={smallSize}
                    alt={alt}
                    startX={X[1]}
                    startY={Y[1]}
                />
                <CircleElement
                    animationName='circle3'
                    src={typescriptPNG}
                    size={sizeElement}
                    parentSize={smallSize}
                    alt={alt}
                    startX={X[2]}
                    startY={Y[2]}
                />
            </Circle>
            <Circle
                className={styles.circle_to_center}
                size={bigSize}
                color='#184e7c'
                borderSize={2}
            >
                <CircleElement
                    animationName='circle4'
                    src={expressPNG}
                    size={sizeElement}
                    parentSize={bigSize}
                    alt={alt}
                    startX={X[3]}
                    startY={Y[3]}
                />
                <CircleElement
                    animationName='circle5'
                    src={mongoPNG}
                    size={sizeElement}
                    parentSize={bigSize}
                    alt={alt}
                    startX={X[4]}
                    startY={Y[4]}
                />
                <CircleElement
                    animationName='circle6'
                    src={reduxPNG}
                    size={sizeElement}
                    parentSize={bigSize}
                    alt={alt}
                    startX={X[5]}
                    startY={Y[5]}
                />
                <CircleElement
                    animationName='circle7'
                    src={nodePNG}
                    size={sizeElement}
                    parentSize={bigSize}
                    alt={alt}
                    startX={X[6]}
                    startY={Y[6]}
                />
            </Circle>
        </div>
    );
};

export default CircleAvatar;