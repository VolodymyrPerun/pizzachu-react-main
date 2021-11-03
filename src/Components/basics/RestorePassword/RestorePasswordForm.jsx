import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './RestorePassword.module.scss'
import { INPUT } from '../../../constants/formsControls.enum'
import { faAt, faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FormsControlItem from '../../commons/FormsControls/FormsControls'
import SubmitFollowBtn from '../../commons/Buttons/SubmitFollow/SubmitFollowBtn'
import {
  email,
  isRequired,
  maxLengthCreator,
  minLengthCreator,
} from '../../../validators/validators'
//////////////////////////////////////////////////

const minLength2 = minLengthCreator(2)
const maxLength45 = maxLengthCreator(45)

let RestorePasswordForm = ({
  reset,
  error,
  pristine,
  submitting,
  errorMessage,
  handleSubmit,
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <Field
          className={styles.input}
          name='email'
          type='email'
          warn={email}
          placeholder='Емейл'
          component={FormsControlItem(INPUT)}
          validate={[isRequired, maxLength45, minLength2]}
          label={
            <FontAwesomeIcon
              icon={faAt}
              style={{
                bottom: '-5px',
                marginRight: '13px',
                position: 'relative',
              }}/>}/>
        <SubmitFollowBtn
          icon={faKey}
          name='Submit'
          type='submit'
          onClick={reset}
          disabled={pristine || submitting}
          label={'Надіслати SMS для зміни пароля'}/>
      </div>
      {error &&
      <div className={styles.formsSummaryError}>
        <span>ERROR: {error}</span>
      </div>}
      {errorMessage && '/' + window.location.href.split('/').pop() ===
      '/reset-password' &&
      <div className={styles.errMsg}>{errorMessage}</div>}
    </form>
  )
}

export default reduxForm({
  form: 'resetPasswordForm',
})(RestorePasswordForm)

