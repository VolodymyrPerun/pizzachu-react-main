import React from 'react';
import styles from './Button.module.scss';
import {Link} from 'react-router-dom';

export const Button = ({icon, path, label}) => {
    return (
        <Link to={path}>
            <button className={styles.btn}>{label} {icon}</button>
        </Link>
    );
};
