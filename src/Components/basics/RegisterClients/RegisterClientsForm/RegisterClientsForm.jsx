import React from 'react'
import { reduxForm } from 'redux-form'
import { makeStyles } from '@material-ui/core/styles'
import styles from './RegisterClientsForm.module.scss'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import FieldsetComponent from '../../../commons/Fieldset/Fieldset'
import fieldSettings from '../../Purchase/PurchaseForm/FieldSettings'
import SubmitFollowBtn
  from '../../../commons/Buttons/SubmitFollow/SubmitFollowBtn'
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
}) => {

  const classes = useStyles()

  return (
    <>
      <form
        autoComplete='on'
        onSubmit={handleSubmit}
        className={classes.root}>
        <div>
            {fieldSettings.map((field, index) => (
                <FieldsetComponent key={index} field={field}/>
              ),
            )}
        </div>
        <div className={styles.order}>
          <SubmitFollowBtn
            name='Submit'
            type='submit'
            onClick={reset}
            icon={faArrowRight}
            label='Зареєструватись '
            disabled={pristine || submitting}/>
        </div>
        {error &&
        <div className={styles.formsSummaryError}>
          <span>ERROR: {error}</span>
        </div>}
        {errorMessage && '/' + window.location.href.split('/').pop() ===
        '/registerClients' &&
        <div className={styles.errMsg}>{errorMessage}</div>}
        {/*{adminErrorMessage && '/' + window.location.href.split('/').pop() === '/auth-admin' &&*/}
        {/*<div className={styles.errMsg}>{adminErrorMessage}</div>}*/}
      </form>
    </>
  )
}

export default reduxForm({
  form: 'registerForm',
})(RegisterClientsForm)
