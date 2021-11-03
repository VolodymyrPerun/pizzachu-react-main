import React from 'react'
import { reduxForm } from 'redux-form'
import fieldSettings from './FieldSettings'
import styles from './ChangePassword.module.scss'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import FieldsetComponent from '../../commons/Fieldset/Fieldset'
import SubmitFollowBtn from '../../commons/Buttons/SubmitFollow/SubmitFollowBtn'
//////////////////////////////////////////////////

let ChangePasswordForm = ({
  reset,
  error,
  pristine,
  submitting,
  errorMessage,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <div className={styles.inputContainer}>
      {fieldSettings.map((field, index) => (
          <FieldsetComponent key={index} field={field}/>
        ),
      )}
      <SubmitFollowBtn
        icon={faKey}
        type='submit'
        name='Submit'
        onClick={reset}
        label='Змінити пароль'
        disabled={pristine || submitting}/>
    </div>
    {error &&
    <div className={styles.formsSummaryError}>
      <span>ERROR: {error}</span>
    </div>}
    {errorMessage && '/' + window.location.href.split('/').pop() ===
    '/change-password' &&
    <div className={styles.errMsg}>{errorMessage}</div>}
  </form>
)

export default reduxForm({
  form: 'changePasswordForm',
})(ChangePasswordForm)
