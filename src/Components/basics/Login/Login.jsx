import React from 'react'
import LoginForm from './LoginForm'
import styles from './Login.module.scss'
import { NavLink } from 'react-router-dom'
import { CloseOutlined } from '@ant-design/icons'
import Preloader from '../../commons/Preloader/Preloader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import loginPagePhoto from '../../../assets/images/login-pizza.gif'
import SubmitFollowBtn from '../../commons/Buttons/SubmitFollow/SubmitFollowBtn'
import {
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'
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

  if (isFetching) {
    return <div className={styles.preloader}><Preloader/></div>
  }

  return (
    <div className={styles.login}>
      <img
        alt='img'
        src={loginPagePhoto}/>

      <div className={styles.forms}>
        <NavLink to='/home' className={styles.closeBtn}>
          <CloseOutlined className={styles.icon}/>
        </NavLink>
        {!isAuth ? <h1 className={styles.title}>
          <FontAwesomeIcon
            style={{
              bottom: '-5px',
              marginRight: '13px',
              position: 'relative',
            }}
            icon={faSignInAlt}/>
          Вхід
        </h1> : <h1 className={styles.title}>
          <FontAwesomeIcon
            style={{
              bottom: '-5px',
              marginRight: '13px',
              position: 'relative',
            }}
            icon={faSignOutAlt}/>
          Вихід
        </h1>}
        <LoginForm
          isAuth={isAuth}
          onSubmit={onSubmit}
          errorMessage={errorMessage}
          onClickLogout={onClickLogout}
          adminErrorMessage={adminErrorMessage}/>
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
          <span>Якщо ви ще не зареєстровані, то спочатку слід зареєструватись</span>
        </div>
        <NavLink to='/registerClients' className={styles.inputContainer}>
          <SubmitFollowBtn
            name='Submit'
            type='button'
            icon={faUserPlus}
            label='Перейти до реєстрації'/>
        </NavLink>
      </div>
    </div>
  )
}

export default Login
