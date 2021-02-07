import React from 'react';
import style from './SectionsTabs.module.scss';

const SectionsTabs = React.memo(({handleClick, label}) => {
    return (
        <>
            <button className={style.button} onClick={handleClick}>{label}</button>
        </>
    )
});

export default SectionsTabs;
