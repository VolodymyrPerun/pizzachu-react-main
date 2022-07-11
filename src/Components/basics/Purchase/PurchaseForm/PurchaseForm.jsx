import React, { memo } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
//
import styles from './PurchaseForm.module.scss'
//
import fieldSettings from './FieldSettings'
import FieldsetComponent from '../../../commons/Fieldset/Fieldset'
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

const PurchaseForm = memo(({
  error,
  reset,
  pristine,
  submitting,
  handleSubmit,
  errorMessage,
}) => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <>
      <form
        autoComplete='on'
        onSubmit={handleSubmit}
        className={classes.root}
      >
        {
          fieldSettings.map((field, index) => (
              <FieldsetComponent key={index} field={field} />
            ),
          )
        }
        <div className={styles.order}>
          <SubmitFollowBtn
            name='Submit'
            type='submit'
            onClick={reset}
            icon={faArrowRight}
            label={`${t('Confirm order')} `}
            disabled={pristine || submitting}
          />
        </div>
        <RenderError error={error} />
        <CheckErrorMessage url='/purchase' errorMessage={errorMessage} />
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
