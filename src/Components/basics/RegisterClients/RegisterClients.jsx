import React, {memo, useEffect, useState} from 'react';
import styles from './RegisterClients.module.scss';
import ApplyBtn from "../../commons/Buttons/Apply/ApplyBtn";
import {faAddressCard, faArrowLeft, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CloseCircleOutlined} from '@ant-design/icons';
import RegisterClientsForm from "./RegisterClientsForm/RegisterClientsForm";
import Preloader from "../../commons/Preloader/Preloader";


const RegisterClients = memo(({
                                  me,
                                  isAuth,
                                  registerClient,
                                  errorMessage,
                                  isFetching,
                                  isRegisterSuccess,
                                  pristine, submitting, reset, error
                              }, match) => {


    let [state, setState] = useState({
        user_photo: null,
    });

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
            formData.floor
        );
        localStorage.setItem('tempId', '');
    };

    useEffect(() => {

    }, [registerClient, setState]);

    if (!isFetching) {
        return <Preloader/>
    }

    return (
        <>
            {
                !isRegisterSuccess
                    // && (match.path === '/my-profile/register-admin' || match.path === '/registerClients')
                    ? <div className={styles.container}>

                        {

                            // match.path === '/registerClients' ?
                            <div>
                                <h1 className={styles.tittle}><FontAwesomeIcon
                                    style={{marginRight: '7px', color: '#EE7178'}}
                                    icon={faUserPlus}/> Реєстрація:</h1>
                            </div>
                            // : <h1 className={styles.tittle}>Реєстрація адміністратора:</h1>
                        }

                        <div className={styles.container}>

                            <NavLink className={styles.closeBtn} to={'/home'}>
                                <CloseCircleOutlined className={styles.icon}/>
                            </NavLink>

                            <div className={styles.logo}>

                        <span className={styles.tittle}>
                           <FontAwesomeIcon
                               style={{marginRight: '7px', color: '#EE7178'}}
                               icon={faAddressCard}/>  Персональні дані
                        </span>
                            </div>

                            <RegisterClientsForm
                                onSubmit={onSubmit}
                                me={me}
                                isAuth={isAuth}
                                error={error}
                                state={state}
                                setState={setState}
                                errorMessage={errorMessage}
                                pristine={pristine}
                                submitting={submitting}
                                reset={reset}
                            />

                            <div className={styles.btnGroup}>
                                <NavLink className={styles.goBack} to={'/home'}>
                                    <ApplyBtn
                                        icon={faArrowLeft}
                                        label={'На головну'}
                                    />
                                </NavLink>
                            </div>
                        </div>

                    </div>

                    : <div className={styles.container}>

                        <NavLink className={styles.closeBtn} to={'/home'}>
                            <CloseCircleOutlined className={styles.icon}/>
                        </NavLink>

                        <div className={styles.messageContent}>
                            <p>Реєстрація пройшла успішно!</p>

                            <NavLink className={styles.loginBtnLink}
                                     to={'/login'}><span>Авторизуватись</span>
                            </NavLink>

                        </div>

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
        </>
    );
});

export default RegisterClients;
