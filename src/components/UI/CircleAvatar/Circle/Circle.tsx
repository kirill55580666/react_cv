import React, {FC} from 'react';

interface Props {
    size: number;
    color: string;
    borderSize?: number;
    children?: React.ReactNode;
    className?: string;
}

const Circle: FC<Props>= ({size, borderSize = 1, color, children, className}) => {

    const style = {
        borderRadius: '50%',
        width: size,
        height: size,
        border: `${borderSize}px solid ${color}`
    }

    return (
        <div className={className} style={style}>
            {children}
        </div>
    );
};

export default Circle;