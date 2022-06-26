import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './ChangePassword.module.scss'
import { CloseOutlined } from '@ant-design/icons'
import RestorePasswordForm from './ChangePasswordForm'
import Preloader from '../../commons/Preloader/Preloader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import loginPagePhoto from '../../../assets/images/login-pizza.gif'
import { faSignInAlt, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import SubmitFollowBtn from '../../commons/Buttons/SubmitFollow/SubmitFollowBtn'
//////////////////////////////////////////////////

const ChangePassword = ({
  cart,
  match,
  isFetching,
  errorMessage,
  changeUserPassword,
}) => {

  const onSubmit = data => {

    if (match.path === '/change-password') {
      localStorage.setItem('cart', JSON.stringify(cart))
      changeUserPassword(data.email, data.password, data.newPassword,
        data.repeatNewPassword)
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
              position: 'relative'}}/>
          Змінити пароль
        </h1>
        <RestorePasswordForm
          onSubmit={onSubmit}
          errorMessage={errorMessage}/>
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
          <span>Після зміни перевірте свою електронну почту, якщо SMS з паролем не надіслано,
                        проведіть операцію повторно, якщо все ок, то:
          </span>
        </div>
        <NavLink to='/login' className={styles.inputContainer}>
          <SubmitFollowBtn
            type='button'
            name='Submit'
            icon={faUserCheck}
            label='Перейти до авторизації'/>
        </NavLink>
      </div>
    </div>
  )
}

export default ChangePassword
