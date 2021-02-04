import React from 'react';
import styles from './Button.module.scss';
import {Link} from 'react-router-dom';
import SingUpIcon from "../../../../commons/CustomIcons/SingUp";

export const Button = () => {
    return (
        <Link to='sign-up'>
            <button className={styles.btn}><SingUpIcon/></button>
        </Link>
    );
}
