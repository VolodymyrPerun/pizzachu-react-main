import React from 'react';
import styles from './ChangePassword.module.scss';
import loginPagePhoto from '../../../assets/images/login-pizza.gif';
import {faSignInAlt, faUserCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";
import Preloader from "../../commons/Preloader/Preloader";
import {CloseOutlined} from '@ant-design/icons';
import SubmitFollowBtn from "../../commons/Buttons/SubmitFollow/SubmitFollowBtn";
import RestorePasswordForm from "./ChangePasswordForm";


const ChangePassword = ({
                            isFetching,
                            errorMessage,
                            match,
                            changeUserPassword,
                            cart
                        }) => {


    const onSubmit = data => {

        if (match.path === '/change-password') {
            localStorage.setItem("cart", JSON.stringify(cart));
            changeUserPassword(data.email, data.password, data.newPassword, data.repeatNewPassword);
            cart = JSON.parse(localStorage.getItem("cart"));
            localStorage.setItem("cart", '');
        }
    };


    if (isFetching) {
        return <div className={styles.preloader}><Preloader/></div>
    }

    return (
        <div className={styles.login}>
            <img
                alt='img'
                src={loginPagePhoto}/>

            <div className={styles.forms}>
                <NavLink className={styles.closeBtn} to={'/home'}>
                    <CloseOutlined className={styles.icon}/>
                </NavLink>
                <h1 className={styles.title}>
                    <FontAwesomeIcon
                        style={{marginRight: '13px', bottom: '-5px', position: 'relative'}}
                        icon={faSignInAlt}/>
                    Змінити пароль
                </h1>

                <RestorePasswordForm
                    onSubmit={onSubmit}
                    errorMessage={errorMessage}
                />

                <div style={{marginTop: '10px', marginBottom: '10px'}}>
                    <span>Після зміни перевірте свою електронну почту, якщо SMS з паролем не надіслано,
                        проведіть операцію повторно, якщо все ок, то:
                    </span>
                </div>

                <NavLink to="/login" className={styles.inputContainer}>
                    <SubmitFollowBtn
                        label={"Перейти до авторизації"}
                        name={'Submit'}
                        type={"button"}
                        icon={faUserCheck}
                    />
                </NavLink>
            </div>
        </div>
    )
};


export default ChangePassword;

