import React from 'react';
import styles from './Button.module.scss';
import {Link} from 'react-router-dom';

export const Button = () => {
    return (
        <Link to='sign-up'>
            <button className={styles.btn}>Sign Up</button>
        </Link>
    );
}
