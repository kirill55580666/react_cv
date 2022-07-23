import React, {FC} from 'react';
import createAnimationStyle from "./createAnimationStyle";

interface Props {
    animationName: string;
    src: string;
    alt?: string;
    size: number;
    parentSize: number;
    startX: number;
    startY: number;
}

const CircleElement: FC<Props> = ({src, alt = 'Фото скилла', size, parentSize, animationName, startX, startY}) => {

    const style = createAnimationStyle(animationName, size, parentSize, startX, startY)

    return (
        <img
                src={src}
                alt={alt}
                style={style}
        />
    );
};

export default CircleElement;