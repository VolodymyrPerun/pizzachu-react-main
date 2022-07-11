import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CloseOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUserCheck } from '@fortawesome/free-solid-svg-icons'
//
import styles from './ChangePassword.module.scss'
//
import RestorePasswordForm from './ChangePasswordForm'
import Preloader from '../../commons/Preloader/Preloader'
import loginPagePhoto from '../../../assets/images/login-pizza.gif'
import SubmitFollowBtn from '../../commons/Buttons/SubmitFollow/SubmitFollowBtn'
//////////////////////////////////////////////////

const ChangePassword = ({
  cart,
  match,
  isFetching,
  errorMessage,
  changeUserPassword,
}) => {
  const { t } = useTranslation()
  const onSubmit = data => {
    if (match.path === '/change-password') {
      localStorage.setItem('cart', JSON.stringify(cart))
      changeUserPassword(
        data.email, data.password, data.newPassword, data.repeatNewPassword
      )
      cart = JSON.parse(localStorage.getItem('cart'))
      localStorage.setItem('cart', '')
    }
  }

  if (isFetching) return <div className={styles.preloader}><Preloader/></div>

  return (
    <div className={styles.login}>
      <img
        alt='img'
        src={loginPagePhoto}
      />
      <div className={styles.forms}>
        <NavLink to='/home' className={styles.closeBtn}>
          <CloseOutlined className={styles.icon}/>
        </NavLink>
        <h1 className={styles.title}>
          <FontAwesomeIcon
            icon={faSignInAlt}
            style={{
              bottom: '-5px',
              marginRight: '13px',
              position: 'relative'}}
          />
          {t('Change Password')}
        </h1>
        <RestorePasswordForm
          onSubmit={onSubmit}
          errorMessage={errorMessage}
        />
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
          <span>{t('After the change')}</span>
        </div>
        <NavLink to='/login' className={styles.inputContainer}>
          <SubmitFollowBtn
            type='button'
            name='Submit'
            icon={faUserCheck}
            label={t('Go to authorization')}
          />
        </NavLink>
      </div>
    </div>
  )
}

export default ChangePassword
