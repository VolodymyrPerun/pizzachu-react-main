import React from 'react'
import { reduxForm } from 'redux-form'
import { makeStyles } from '@material-ui/core/styles'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
//
import styles from './RegisterClientsForm.module.scss'
//
import FieldsetComponent from '../../../commons/Fieldset/Fieldset'
import fieldSettings from '../../Purchase/PurchaseForm/FieldSettings'
import SubmitFollowBtn
  from '../../../commons/Buttons/SubmitFollow/SubmitFollowBtn'
import {
  RenderError,
  CheckErrorMessage
} from '../../ErrorsComponents/ErrorsComponents'
//////////////////////////////////////////////////

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        width: '25ch',
        margin: theme.spacing(2),
    },
    '& .MuiSelect-root': {
        width: '25ch',
        margin: theme.spacing(2),
    },
  },
}))

const RegisterClientsForm = ({
  reset,
  error,
  pristine,
  submitting,
  errorMessage,
  handleSubmit,
  adminErrorMessage,
}) => {

  const classes = useStyles()

  return (
    <>
      <form
        autoComplete='on'
        onSubmit={handleSubmit}
        className={classes.root}
      >
        <div>
          {
            fieldSettings.map((field, index) => (
                <FieldsetComponent key={index} field={field}/>
              ),
            )
          }
        </div>
        <div className={styles.order}>
          <SubmitFollowBtn
            name='Submit'
            type='submit'
            onClick={reset}
            icon={faArrowRight}
            label='Зареєструватись '
            disabled={pristine || submitting}
          />
        </div>
        <RenderError error={error} />
        <CheckErrorMessage
          url='/registerClients'
          adminUrl='/auth-admin'
          errorMessage={errorMessage}
          adminErrorMessage={adminErrorMessage}
        />
      </form>
    </>
  )
}

export default reduxForm({
  form: 'registerForm',
})(RegisterClientsForm)
