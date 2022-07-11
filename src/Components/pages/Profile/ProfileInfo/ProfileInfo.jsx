import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CloseCircleOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
//
import styles from './ProfileInfo.module.scss'
//
import Preloader from '../../../commons/Preloader/Preloader'
import ApplyBtn from '../../../commons/Buttons/Apply/ApplyBtn'
import ProfileInfoData from '../ProfileInfoData/ProfileInfoData'
import ProfileInfoDataForm from '../ProfileInfoDataForm/ProfileInfoDataForm'
import {
    RenderError,
    CheckErrorMessage,
} from '../../../basics/ErrorsComponents/ErrorsComponents'
//////////////////////////////////////////////////

const ProfileInfo = ({
    me: {
        age,
        name,
        city,
        floor,
        phone,
        email,
        house,
        street,
        surname,
        entrance,
        gender_id,
        apartment,
        user_photo
    },
    error,
    isAuth,
    savePhoto,
    isFetching,
    errorMessage,
    adminErrorMessage,
    updateProfileInfo
}) => {

    const [editMode, setEditMode] = useState(false)

    let goToEditMode = () => setEditMode(true)

    let onSubmit = formData => updateProfileInfo(formData).then(
      () => setEditMode(false)
    )

    const onMainPhotoSelected = e => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
      <>
          <div className={styles.descriptionBlock}>
              <NavLink to='/home' className={styles.closeBtn}>
                  <CloseCircleOutlined className={styles.icon} />
              </NavLink>
              {
                  isFetching
                    ? <div><Preloader /></div>
                    : <div className={styles.content}>
                        <div className={styles.logoContainer}>
                            <div className={styles.logo}>
                                <FontAwesomeIcon
                                  icon={faUserTie}
                                  style={{ marginRight: '7px', color: '#EE7178' }}
                                />
                                <span className={styles.tittle}>
                                  Мій профіль
                              </span>
                            </div>
                        </div>
                        <div className={styles.contentInfo}>
                            {
                                editMode
                                  ? <ProfileInfoDataForm
                                    initialValues={{
                                        age,
                                        city,
                                        name,
                                        house,
                                        phone,
                                        floor,
                                        street,
                                        surname,
                                        entrance,
                                        apartment,
                                        gender_id
                                    }}
                                    onSubmit={onSubmit}
                                    setEditMode={setEditMode}
                                    onMainPhotoSelected={onMainPhotoSelected}
                                  />
                                  : <ProfileInfoData
                                    me={{
                                        age,
                                        name,
                                        city,
                                        phone,
                                        email,
                                        floor,
                                        house,
                                        street,
                                        surname,
                                        entrance,
                                        apartment,
                                        user_photo
                                    }}
                                    isAuth={isAuth}
                                    goToEditMode={goToEditMode}
                                  />
                            }
                        </div>
                        <RenderError error={error}/>
                        <CheckErrorMessage
                          url='/profile'
                          adminUrl='/auth-admin'
                          errorMessage={errorMessage}
                          adminErrorMessage={adminErrorMessage}
                        />
                        <div className={styles.btn}>
                            <NavLink to='/home' className={styles.goBack}>
                                <ApplyBtn
                                  icon={faArrowLeft}
                                  label='На головну'
                                />
                            </NavLink>
                        </div>
                    </div>
              }
          </div>
      </>
    )
}

export default ProfileInfo
