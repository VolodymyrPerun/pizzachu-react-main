import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { faAt, faKey } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//
import styles from './RestorePassword.module.scss'
//
import { INPUT } from '../../../constants/formsControls.enum'
import FormsControlItem from '../../commons/FormsControls/FormsControls'
import SubmitFollowBtn from '../../commons/Buttons/SubmitFollow/SubmitFollowBtn'
import {
  RenderError,
  CheckErrorMessage
} from '../ErrorsComponents/ErrorsComponents'
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
      <RenderError error={error} />
      <CheckErrorMessage url='/reset-password' errorMessage={errorMessage} />
    </form>
  )
}

export default reduxForm({
  form: 'resetPasswordForm',
})(RestorePasswordForm)

