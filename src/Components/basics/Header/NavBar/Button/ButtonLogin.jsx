import React from 'react';
import styles from './Button.module.scss';
import {Link} from 'react-router-dom';

export const Button = ({icon, path, label, title}) => {
    return (
        <Link to={path} title={title}>
            <button className={styles.btn}>{label} {icon}</button>
        </Link>
    );
};
