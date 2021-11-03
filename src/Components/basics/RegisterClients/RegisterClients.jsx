import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './RegisterClients.module.scss'
import { CloseCircleOutlined } from '@ant-design/icons'
import Preloader from '../../commons/Preloader/Preloader'
import ApplyBtn from '../../commons/Buttons/Apply/ApplyBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RegisterClientsForm from './RegisterClientsForm/RegisterClientsForm'
import {
  faUserPlus,
  faArrowLeft,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons'
//////////////////////////////////////////////////

const RegisterClients = memo(({
  me,
  error,
  reset,
  isAuth,
  pristine,
  isFetching,
  submitting,
  errorMessage,
  registerClient,
  isRegisterSuccess,
}, match) => {

  const onSubmit = formData => {
    registerClient(
      formData.user_photo,
      formData.email,
      formData.phone,
      formData.name,
      formData.surname,
      formData.age,
      formData.password,
      formData.gender_id,
      formData.city,
      formData.street,
      formData.house,
      formData.apartment,
      formData.entrance,
      formData.floor,
    )
    localStorage.setItem('tempId', '')
  }

  if (!isFetching) {
    return <Preloader/>
  }

  return (
    <>
      {
        !isRegisterSuccess //TODO:
          // && (match.path === '/my-profile/register-admin' || match.path === '/registerClients')
          ? <div className={styles.container}>
            {
              // match.path === '/registerClients' ?
              <div>
                <h1 className={styles.tittle}>
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    style={{ marginRight: '7px', color: '#EE7178' }}
                  /> Реєстрація:</h1>
              </div>
              // : <h1 className={styles.tittle}>Реєстрація адміністратора:</h1>
            }
            <div className={styles.container}>
              <NavLink to='/home' className={styles.closeBtn}>
                <CloseCircleOutlined className={styles.icon}/>
              </NavLink>
              <div className={styles.logo}>
                <span className={styles.tittle}>
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    style={{ marginRight: '7px', color: '#EE7178' }}
                  />  Персональні дані
                </span>
              </div>
              <RegisterClientsForm
                me={me}
                reset={reset}
                error={error}
                isAuth={isAuth}
                onSubmit={onSubmit}
                pristine={pristine}
                submitting={submitting}
                errorMessage={errorMessage}/>
              <div className={styles.btnGroup}>
                <NavLink to='/home' className={styles.goBack}>
                  <ApplyBtn
                    icon={faArrowLeft}
                    label='На головну сторінку'/>
                </NavLink>
              </div>
            </div>
          </div>
          : <div className={styles.container}>
            <NavLink to='/home' className={styles.closeBtn}>
              <CloseCircleOutlined className={styles.icon}/>
            </NavLink>
            <div className={styles.messageContent}>
              <p>Реєстрація пройшла успішно!</p>
              <NavLink
                to='/login'
                className={styles.loginBtnLink}>
                <span>Авторизуватись</span>
              </NavLink>
            </div>
            <div className={styles.btn}>
              <NavLink to='/home' className={styles.goBack}>
                <ApplyBtn
                  label='На головну'
                  icon={faArrowLeft}/>
              </NavLink>
            </div>
          </div>
      }
    </>
  )
})

export default RegisterClients
