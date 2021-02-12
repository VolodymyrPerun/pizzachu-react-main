import React from 'react';
import style from './CardTabs.module.scss';

const CardTabs = React.memo(({handleClick, label}) => {
    return (
        <>
            <button className={style.button} onClick={handleClick}>{label}</button>
        </>
    )
});

export default CardTabs;
