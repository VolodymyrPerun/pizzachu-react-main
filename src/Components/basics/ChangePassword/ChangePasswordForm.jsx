import React from 'react'
import i18next from 'i18next'
import { reduxForm } from 'redux-form'
import { faKey } from '@fortawesome/free-solid-svg-icons'
//
import styles from './ChangePassword.module.scss'
//
import fieldSettings from './FieldSettings'
import FieldsetComponent from '../../commons/Fieldset/Fieldset'
import SubmitFollowBtn from '../../commons/Buttons/SubmitFollow/SubmitFollowBtn'
import {
  RenderError,
  CheckErrorMessage,
} from '../ErrorsComponents/ErrorsComponents'
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
      {
        fieldSettings.map(
          (field, index) => (
            <FieldsetComponent key={index} field={field}/>
          ),
        )
      }
      <SubmitFollowBtn
        icon={faKey}
        type='submit'
        name='Submit'
        onClick={reset}
        disabled={pristine || submitting}
        label={i18next.t('Change Password')}
      />
    </div>
    <RenderError error={error} errClassName={styles.formsSummaryError} />
    <CheckErrorMessage
      url='/change-password'
      errorMessage={errorMessage}
      errMsgClassName={styles.errMsg}
    />
  </form>
)

export default reduxForm({
  form: 'changePasswordForm',
})(ChangePasswordForm)
