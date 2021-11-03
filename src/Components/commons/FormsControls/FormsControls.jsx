import React from 'react'
import style from './FormsControls.module.scss'
import TextField from '@material-ui/core/TextField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExclamationCircle,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons'
import {
  INPUT,
  SELECT,
  TEXTAREA,
  TEXT_FIELD,
} from '../../../constants/formsControls.enum'
//////////////////////////////////////////////////

const FormsControlItem = item =>
  ({
    input, value, label, meta: { touched, error, warning }, child, ...restProps
  }) => {

    let isError = touched && ((error || warning))

    const Error = () => {
      return (
        <div className={style.errorsContainer}>
          {touched &&
          ((error &&
            <span>
              <FontAwesomeIcon
                icon={faExclamationCircle}
                style={{ marginRight: '3px' }}/>
              {error}
          </span>) ||
            (warning &&
              <span className={style.warning}>
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  style={{ marginRight: '3px' }}/>
                {warning}
              </span>))}
        </div>
      )
    }

    switch (item) {
      case TEXTAREA:
        return (
          <>
            <label>{restProps.label}</label>
            <div
              className={`${style.formsControls} ${isError
                ? style.error
                : ''}`}>
                <textarea
                  {...input}
                  {...restProps}
                  rows={4}
                  cols={50}
                  className={style.textareaField}/>
              <Error/>
            </div>
          </>
        )
      case INPUT:
        return (
          <>
            <label>{restProps.label}</label>
            <div
              className={`${style.formsControls} ${isError
                ? style.error
                : ''}`}>
              <input
                {...input}
                {...restProps}
                className={style.inputField}/>
              <Error/>
            </div>
          </>
        )
      case TEXT_FIELD:
        return (
          <>
            <div
              className={`${style.formsControls} ${isError
                ? style.error
                : ''}`}>
              <TextField
                {...input}
                {...restProps}
                label={label}
                value={value}/>
              <Error/>
            </div>
          </>
        )
      case SELECT:
        return (
          <>
            <div
              className={`${style.formsControls} ${isError
                ? style.error
                : ''}`}>
              <select
                {...input}
                {...restProps}
                value={value}/>
              <Error/>
            </div>
          </>
        )
      default:
        return null
    }
  }

export default FormsControlItem
