import React, {FC, ReactNode} from 'react';
import styles from './MyGradientBackground.module.scss'

interface Props {
    children?: ReactNode;
}

const MyGradientBackground: FC<Props> = ({children}) => {
    return (
        <div className={styles.background}>
            {children}
        </div>
    );
};

export default MyGradientBackground;