import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { CloseOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'
//
import styles from './Login.module.scss'
//
import LoginForm from './LoginForm'
import Preloader from '../../commons/Preloader/Preloader'
import loginPagePhoto from '../../../assets/images/login-pizza.gif'
import SubmitFollowBtn from '../../commons/Buttons/SubmitFollow/SubmitFollowBtn'
//////////////////////////////////////////////////

const Login = ({
  cart,
  login,
  match,
  isAuth,
  logout,
  setCart,
  isFetching,
  loginAdmin,
  errorMessage,
  adminErrorMessage,
}) => {
  const { t } = useTranslation()

  const onSubmit = data => {
    if (match.path === '/login') {
      localStorage.setItem('cart', JSON.stringify(cart))
      login(data.email, data.password)
      cart = JSON.parse(localStorage.getItem('cart'))
      localStorage.setItem('cart', '')
    }

    if (match.path === '/auth-admin') {
      loginAdmin(data.email, data.password)
    }
  }

  const onClickLogout = () => {
    localStorage.setItem('cart', JSON.stringify(cart))
    cart = JSON.parse(localStorage.getItem('cart'))
    logout()
    setCart(cart)
    localStorage.setItem('cart', '')
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
        {
          !isAuth
            ? <h1 className={styles.title}>
              <FontAwesomeIcon
                icon={faSignInAlt}
                style={{
                  bottom: '-5px',
                  marginRight: '13px',
                  position: 'relative',
                }}
              />
              {t('Login')}
            </h1>
            : <h1 className={styles.title}>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                style={{
                  bottom: '-5px',
                  marginRight: '13px',
                  position: 'relative',
                }}
              />
              {t('Logout')}
            </h1>
        }
        <LoginForm
          isAuth={isAuth}
          onSubmit={onSubmit}
          errorMessage={errorMessage}
          onClickLogout={onClickLogout}
          adminErrorMessage={adminErrorMessage}
        />
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
          <span>{t('If you are not registered')}</span>
        </div>
        <NavLink to='/registerClients' className={styles.inputContainer}>
          <SubmitFollowBtn
            name='Submit'
            type='button'
            icon={faUserPlus}
            label={t('Go to registration')}
          />
        </NavLink>
      </div>
    </div>
  )
}

export default Login
