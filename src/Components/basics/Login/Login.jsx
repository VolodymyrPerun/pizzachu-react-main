import React from 'react';
import styles from './Login.module.scss';
import loginPagePhoto from '../../../assets/images/login-pizza.gif'
import LoginForm from "./LoginForm";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink, Redirect} from "react-router-dom";
import Preloader from "../../commons/Preloader/Preloader";
import {CloseOutlined} from '@ant-design/icons';
import SubmitFollowBtn from "../../commons/Buttons/SubmitFollow/SubmitFollowBtn";


const Login = ({
                   isAuth,
                   isFetching,
                   errorMessage,
                   match,
                   login,
                   loginAdmin,
                   adminErrorMessage,
                   cart
               }) => {


    const onSubmit = data => {

        if (match.path === '/login') {
            localStorage.setItem("cart", JSON.stringify(cart));
            login(data.email, data.password);
            cart = JSON.parse(localStorage.getItem("cart"));
            localStorage.setItem("cart", '');
        }

        if (match.path === '/auth-admin') {
            loginAdmin(data.email, data.password)
        }
    };


    if (isAuth) {
        return <Redirect to={`/home`}/>
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
                <NavLink className={styles.closeBtn} to={'/home'}>
                    <CloseOutlined className={styles.icon}/>
                </NavLink>
                <h1 className={styles.title}>
                    <FontAwesomeIcon
                        style={{marginRight: '13px', bottom: '-5px', position: 'relative'}}
                        icon={faSignInAlt}/>
                    Вхід
                </h1>

                <LoginForm onSubmit={onSubmit}
                           errorMessage={errorMessage}
                           adminErrorMessage={adminErrorMessage}/>

                <div style={{marginTop: '10px', marginBottom: '10px'}}>
                    <span>Якщо ви ще не зареєстровані, то спочатку слід зареєструватись</span>
                </div>

                <NavLink to="/registerClients" className={styles.inputContainer}>
                    <SubmitFollowBtn
                        label={"Перейти до реєстрації"}
                        name={'Submit'}
                        type={"button"}
                    />
                </NavLink>
            </div>
        </div>
    )
};


export default Login;

