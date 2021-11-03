import React, { memo } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import fieldSettings from './FieldSettings'
import styles from './PurchaseForm.module.scss'
import { makeStyles } from '@material-ui/core/styles'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import FieldsetComponent from '../../../commons/Fieldset/Fieldset'
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

const PurchaseForm = memo(({
  error,
  reset,
  pristine,
  submitting,
  handleSubmit,
  errorMessage,
}) => {

  const classes = useStyles()

  return (
    <>
      <form
        onSubmit={handleSubmit} className={classes.root} autoComplete='on'>

        {fieldSettings.map((field, index) => (
            <FieldsetComponent key={index} field={field}/>
          ),
        )}
        <div className={styles.order}>
          <SubmitFollowBtn
            name='Submit'
            type='submit'
            onClick={reset}
            icon={faArrowRight}
            label='Підтвердити замовлення '
            disabled={pristine || submitting}/>
        </div>

        {error &&
        <div className={styles.formsSummaryError}>
          <span>ERROR: {error}</span>
        </div>}

        {errorMessage && '/' + window.location.href.split('/').pop() ===
        '/purchase' &&
        <div className={styles.errMsg}>{errorMessage}</div>}
      </form>
    </>
  )
})

export default connect(({ auth }) => ({

  initialValues: {
    name: (auth.me ? auth.me.name : ''),
    city: (auth.me ? auth.me.city : ''),
    email: (auth.me ? auth.me.email : ''),
    phone: (auth.me ? auth.me.phone : ''),
    house: (auth.me ? auth.me.house : ''),
    floor: (auth.me ? auth.me.floor : ''),
    street: (auth.me ? auth.me.street : ''),
    entrance: (auth.me ? auth.me.entrance : ''),
    apartment: (auth.me ? auth.me.apartment : ''),
  },
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
}))(reduxForm({
  form: 'purchaseForm',
})(PurchaseForm))

