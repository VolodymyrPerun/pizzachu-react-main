import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../../App.scss'
import { CloseCircleOutlined } from '@ant-design/icons'
import styles from './ProfileInfo/ProfileInfo.module.scss'
import ApplyBtn from '../../commons/Buttons/Apply/ApplyBtn'
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faUserTie } from '@fortawesome/free-solid-svg-icons'
//////////////////////////////////////////////////

const Profile = ({
  me,
  isAuth,
  authMe,
  isFetching,
  updateUserProfilePhoto,
  updateUserDates: updateProfileInfo,
  updateUserPhotoErrMsg: errorMessage,
}) => {

  return (
    <>
      {isAuth
        ? <div className='app-wrapper-content'>
          <ProfileInfo
            me={me}
            isAuth={isAuth}
            authMe={authMe}
            isFetching={isFetching}
            errorMessage={errorMessage}
            savePhoto={updateUserProfilePhoto}
            updateProfileInfo={updateProfileInfo}/>
        </div>
        : <div className={styles.emptyProfile}>
          <NavLink to='/home' className={styles.closeBtn}>
            <CloseCircleOutlined className={styles.icon}/>
          </NavLink>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <FontAwesomeIcon
                icon={faUserTie}
                style={{ marginRight: '7px', color: '#EE7178' }}/>
              <span className={styles.tittle}>Мій профіль</span>
            </div>
          </div>
          <p>Для того, щоб переглянути свій профіль, необхідно увійти</p>
          <NavLink
            to='/login'
            className={styles.register}>
            <span>Ввійти зараз?</span></NavLink>
          <div className={styles.btn}>
            <NavLink to='/home' className={styles.goBack}>
              <ApplyBtn icon={faArrowLeft} label='На головну'/>
            </NavLink>
          </div>
        </div>}
    </>
  )
}

export default Profile
