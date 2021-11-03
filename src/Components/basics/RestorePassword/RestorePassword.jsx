import React from 'react'
import { NavLink } from 'react-router-dom'
import { CloseOutlined } from '@ant-design/icons'
import styles from './RestorePassword.module.scss'
import RestorePasswordForm from './RestorePasswordForm'
import Preloader from '../../commons/Preloader/Preloader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import loginPagePhoto from '../../../assets/images/login-pizza.gif'
import { faSignInAlt, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import SubmitFollowBtn from '../../commons/Buttons/SubmitFollow/SubmitFollowBtn'
//////////////////////////////////////////////////

const RestorePassword = ({
  cart,
  match,
  isFetching,
  errorMessage,
  sendEmailForChangeForgotPassword,
}) => {

  const onSubmit = data => {

    if (match.path === '/restore-password') {
      localStorage.setItem('cart', JSON.stringify(cart))
      sendEmailForChangeForgotPassword(data.email)
      cart = JSON.parse(localStorage.getItem('cart'))
      localStorage.setItem('cart', '')
    }
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
        <h1 className={styles.title}>
          <FontAwesomeIcon
            icon={faSignInAlt}
            style={{
              bottom: '-5px',
              marginRight: '13px',
              position: 'relative',
            }}/>
          Змінити пароль
        </h1>
        <RestorePasswordForm onSubmit={onSubmit} errorMessage={errorMessage}/>
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
          <span>Після відправлення перевірте свою електронну почту, якщо SMS з паролем не надіслано,
            спробуйте надіслати його повторно, якщо все ок, то:
          </span>
        </div>
        <NavLink to='/login' className={styles.inputContainer}>
          <SubmitFollowBtn
            name='Submit'
            type='button'
            icon={faUserCheck}
            label='Перейти до авторизації'/>
        </NavLink>
      </div>
    </div>
  )
}

export default RestorePassword

