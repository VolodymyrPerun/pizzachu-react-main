import React from 'react';
import style from './AddTo.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const AddTo = React.memo(({handleClick, label, icon, to}) => {
    return (
        <>
            <NavLink to={to} className={style.button} onClick={handleClick}>
                {<FontAwesomeIcon style={{marginRight: '7px', color: 'azure'}} icon={icon}/>}
                {label}
            </NavLink>
        </>
    )
});

export default AddTo;
