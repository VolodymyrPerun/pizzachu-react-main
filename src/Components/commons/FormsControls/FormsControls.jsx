import React from 'react';
import style from './FormsControls.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationCircle, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import {INPUT, SELECT, TEXT_FIELD, TEXTAREA} from '../../../constants/formsControls.enum'
import TextField from "@material-ui/core/TextField";
import Rating from "material-ui-rating/lib";
import Box from "@material-ui/core/Box";


const FormsControlItem = item => ({input, value, label, meta: {touched, error, warning}, child, ...restProps}) => {

    let isError = touched && ((error || warning));


    const Error = () => {


        return (
            <div className={style.errorsContainer}>
                {touched &&
                ((error && <span>
                            <FontAwesomeIcon
                                style={{marginRight: '3px'}}
                                icon={faExclamationCircle}/>
                        {error}</span>) ||
                    (warning && <span className={style.warning}>
                            <FontAwesomeIcon
                                style={{marginRight: '3px'}}
                                icon={faExclamationTriangle}/>
                        {warning}</span>))}
            </div>
        )
    };

    switch (item) {
        case TEXTAREA:
            return (
                <>
                    <label>{restProps.label}</label>
                    <div className={`${style.formsControls} ${isError ? style.error : ""}`}>
                <textarea className={style.textareaField}
                          {...input}
                          {...restProps}
                          rows={4}
                          cols={50}/>
                        <Error/>
                    </div>
                </>
            )
        case INPUT:
            return (
                <>
                    <label>{restProps.label}</label>
                    <div className={`${style.formsControls} ${isError ? style.error : ""}`}>
                        <input className={style.inputField}
                               {...input}
                               {...restProps}
                        />
                        <Error/>
                    </div>
                </>
            )
        case TEXT_FIELD:
            return (
                <>
                    <div className={`${style.formsControls} ${isError ? style.error : ""}`}>
                        <TextField label={label}
                                   value={value}
                                   {...input}
                                   {...restProps}
                        />
                        <Error/>
                    </div>
                </>
            )
        case SELECT:
            return (
                <>
                    <div className={`${style.formsControls} ${isError ? style.error : ""}`}>
                        <select value={value}
                                   {...input}
                                   {...restProps}
                        />
                        <Error/>
                    </div>
                </>
            )
        default:
            return null;
    }
};

export default FormsControlItem;
