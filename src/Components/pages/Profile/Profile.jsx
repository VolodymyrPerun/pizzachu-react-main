import React from 'react';
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import '../../../App.scss';
import styles from "./ProfileInfo/ProfileInfo.module.scss";
import {CloseCircleOutlined} from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import ApplyBtn from "../../commons/Buttons/Apply/ApplyBtn";
import {faArrowLeft, faUserTie} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Profile = ({me, isFetching, isAuth, savePhoto, errorMessage, updateUserDates: updateProfileInfo}) => {
    return (
        <>
            {isAuth
                ?
                <div className='app-wrapper-content'>
                    <ProfileInfo
                        isAuth={isAuth}
                        me={me}
                        isFetching={isFetching}
                        errorMessage={errorMessage}
                        savePhoto={savePhoto}
                        updateProfileInfo={updateProfileInfo}
                    />
                </div>
                : <div className={styles.emptyProfile}>
                    <NavLink className={styles.closeBtn} to={'/home'}>
                        <CloseCircleOutlined className={styles.icon}/>
                    </NavLink>
                    <div className={styles.logoContainer}>
                        <div className={styles.logo}>
                            <FontAwesomeIcon
                                style={{marginRight: '7px', color: '#EE7178'}}
                                icon={faUserTie}/>
                            <span className={styles.tittle}>
                            Мій профіль
                        </span>
                        </div>
                    </div>
                    <p>Для того, щоб переглянути свій профіль, необхідно увійти</p>
                    <NavLink className={styles.register}
                             to={'/login'}><span>Ввійти зараз?</span></NavLink>
                    <div className={styles.btn}>
                        <NavLink className={styles.goBack} to={'/home'}>
                            <ApplyBtn
                                icon={faArrowLeft}
                                label={'На головну'}
                            />
                        </NavLink>
                    </div>
                </div>}
        </>
    )
};

export default Profile;
