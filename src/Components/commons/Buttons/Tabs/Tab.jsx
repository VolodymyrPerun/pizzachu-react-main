import React from 'react';
import style from './Tab.module.scss';

const Tab = React.memo(({handleClick, label}) => {
    return (
        <>
            <button className={style.button} onClick={handleClick}>{label}</button>
        </>
    )
});

export default Tab;
