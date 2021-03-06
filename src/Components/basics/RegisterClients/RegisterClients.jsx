import React, {memo, useEffect, useState} from 'react';
import styles from './RegisterClients.module.scss';
import ApplyBtn from "../../commons/Buttons/Apply/ApplyBtn";
import {faAddressCard, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {NavLink, Redirect} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CloseCircleOutlined} from '@ant-design/icons';
import RegisterClientsForm from "./RegisterClientsForm/RegisterClientsForm";


const RegisterClients = memo(({
                                  me,
                                  isAuth,
                                  registerClient,
                                  errorMessage,
                                  pristine, submitting, reset, error
                              }) => {


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

    useEffect((
    ) => {

    }, [registerClient, setState]);


    return (
        <>
            {!isAuth
                ?
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
                : <Redirect to={'/home'}/>}
        </>
    );
});

export default RegisterClients;
