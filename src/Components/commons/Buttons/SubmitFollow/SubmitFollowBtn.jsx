import React from 'react';
import style from './SubmitFollowBtn.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SubmitFollowBtn = React.memo(({handleClick, label, icon}) => {
    return (
        <>
            <button className={style.button} onClick={handleClick}>
                {label}
                {<FontAwesomeIcon style={{marginLeft: '7px', color: 'azure'}} icon={icon}/>}
            </button>
        </>
    )
});

export default SubmitFollowBtn;
