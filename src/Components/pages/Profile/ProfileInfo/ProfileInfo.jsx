import React, {useState} from 'react';
import styles from './ProfileInfo.module.scss';
import {CloseCircleOutlined} from '@ant-design/icons';
import Preloader from "../../../commons/Preloader/Preloader";
import ProfileInfoData from "../ProfileInfoData/ProfileInfoData";
import ProfileInfoDataForm from "../ProfileInfoDataForm/ProfileInfoDataForm";
import {NavLink} from "react-router-dom";
import ApplyBtn from "../../../commons/Buttons/Apply/ApplyBtn";
import {faArrowLeft, faUserTie} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const ProfileInfo = ({
                         me: {
                             user_photo,
                             email,
                             phone,
                             name,
                             age,
                             surname,
                             gender_id,
                             city,
                             street,
                             house,
                             apartment,
                             entrance,
                             floor
                         }
                         , isFetching, isAuth, savePhoto, errorMessage, updateProfileInfo, error
                     }) => {


    const [editMode, setEditMode] = useState(false);

    let goToEditMode = () => {
        setEditMode(true);
    };

    let onSubmit = formData => {
        updateProfileInfo(formData).then(
            () => {
                setEditMode(false);
            }
        );
    };

    const onMainPhotoSelected = e => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (
        <>
            <div className={styles.descriptionBlock}>
                <NavLink className={styles.closeBtn} to={'/home'}>
                    <CloseCircleOutlined className={styles.icon}/>
                </NavLink>
                {isFetching
                    ? <div>
                        <Preloader/>
                    </div>
                    : <div className={styles.content}>
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
                        <div className={styles.contentInfo}>
                            {editMode
                                ?
                                <ProfileInfoDataForm initialValues={{
                                    phone,
                                    name,
                                    age,
                                    surname,
                                    gender_id,
                                    city,
                                    street,
                                    house,
                                    apartment,
                                    entrance,
                                    floor
                                }} onMainPhotoSelected={onMainPhotoSelected} setEditMode={setEditMode} onSubmit={onSubmit}/>
                                :
                                <ProfileInfoData me={{
                                    user_photo,
                                    email,
                                    phone,
                                    name,
                                    age,
                                    surname,
                                    city,
                                    street,
                                    house,
                                    apartment,
                                    entrance,
                                    floor
                                }} isAuth={isAuth} goToEditMode={goToEditMode}/>}
                        </div>
                        {error &&
                        <div className={styles.formsSummaryError}>
                            <span>ERROR: {error}</span>
                        </div>}

                        {errorMessage && '/' + window.location.href.split('/').pop() === '/profile' &&
                        <div className={styles.errMsg}>{errorMessage}</div>}
                        {/*{adminErrorMessage && '/' + window.location.href.split('/').pop() === '/auth-admin' &&*/}
                        {/*<div className={styles.errMsg}>{adminErrorMessage}</div>}*/}

                        <div className={styles.btn}>
                            <NavLink className={styles.goBack} to={'/home'}>
                                <ApplyBtn
                                    icon={faArrowLeft}
                                    label={'На головну'}
                                />
                            </NavLink>
                        </div>
                    </div>
                }
            </div>
        </>
    )
};

export default ProfileInfo;
