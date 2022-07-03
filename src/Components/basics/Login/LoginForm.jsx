import React from 'react'
import { reduxForm } from 'redux-form'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
//
import styles from './Login.module.scss'
//
import fieldSettings from './FieldSettings'
import FieldsetComponent from '../../commons/Fieldset/Fieldset'
import SubmitFollowBtn from '../../commons/Buttons/SubmitFollow/SubmitFollowBtn'
//////////////////////////////////////////////////

let LoginForm = ({
  reset,
  error,
  isAuth,
  pristine,
  submitting,
  handleSubmit,
  errorMessage,
  onClickLogout,
  adminErrorMessage,
}) => {
  const { t } = useTranslation()

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        {
          !isAuth
            ? <>
              {
                fieldSettings.map((field, index) => (
                    <FieldsetComponent key={index} field={field}/>
                  ),
                )
              }
              <SubmitFollowBtn
                name='Submit'
                type='submit'
                onClick={reset}
                label={t('Login')}
                icon={faSignInAlt}
                disabled={pristine || submitting}
              />
            </>
            : <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <SubmitFollowBtn
                name='logout'
                type='button'
                label={t('Logout')}
                icon={faSignOutAlt}
                handleClick={onClickLogout}
              />
              <NavLink
                to='/change-password'
                className={styles.menuItemLink}
              >
                {t('Change Password')}
              </NavLink>
              <NavLink
                to='/restore-password'
                className={styles.menuItemLink}
              >
                {t('Forgot Password?')}
              </NavLink>
            </div>
        }
      </div>
      {
        error &&
        <div className={styles.formsSummaryError}>
          <span>{t('ERROR')}: {error}</span>
        </div>
      }
      {
        errorMessage && '/' + window.location.href.split('/').pop() ===
        '/login' &&
        <div className={styles.errMsg}>{errorMessage}</div>
      }
      {
        adminErrorMessage && '/' + window.location.href.split('/').pop() ===
        '/auth-admin' &&
        <div className={styles.errMsg}>{adminErrorMessage}</div>
      }
    </form>
  )
}

export default reduxForm({
  form: 'loginForm',
})(LoginForm)

