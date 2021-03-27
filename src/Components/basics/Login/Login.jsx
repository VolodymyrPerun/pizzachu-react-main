import React from 'react';
import styles from './Login.module.scss';
import loginPagePhoto from '../../../assets/images/login-pizza.gif';
import LoginForm from "./LoginForm";
import {faSignInAlt, faSignOutAlt, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";
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
                   cart,
                   logout,
                   setCart
               }) => {


    const onSubmit = data => {

        if (match.path === '/login') {
            localStorage.setItem("cart", JSON.stringify(cart));
            login(data.email, data.password);
            cart = JSON.parse(localStorage.getItem("cart"));
            localStorage.setItem("cart", '');
        }

        if (match.path === '/auth-admin') {
            loginAdmin(data.email, data.password);
        }
    };

    const onClickLogout = () => {
        localStorage.setItem("cart", JSON.stringify(cart));
        cart = JSON.parse(localStorage.getItem("cart"));
        logout();
        setCart(cart)
        localStorage.setItem("cart", '');
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
                {!isAuth ? <h1 className={styles.title}>
                    <FontAwesomeIcon
                        style={{marginRight: '13px', bottom: '-5px', position: 'relative'}}
                        icon={faSignInAlt}/>
                    Вхід
                </h1> : <h1 className={styles.title}>
                    <FontAwesomeIcon
                        style={{marginRight: '13px', bottom: '-5px', position: 'relative'}}
                        icon={faSignOutAlt}/>
                    Вихід
                </h1>}

                <LoginForm onSubmit={onSubmit}
                           errorMessage={errorMessage}
                           adminErrorMessage={adminErrorMessage}
                           isAuth={isAuth}
                           onClickLogout={onClickLogout}
                />

                <div style={{marginTop: '10px', marginBottom: '10px'}}>
                    <span>Якщо ви ще не зареєстровані, то спочатку слід зареєструватись</span>
                </div>

                <NavLink to="/registerClients" className={styles.inputContainer}>
                    <SubmitFollowBtn
                        label={"Перейти до реєстрації"}
                        name={'Submit'}
                        type={"button"}
                        icon={faUserPlus}
                    />
                </NavLink>
            </div>
        </div>
    )
};


export default Login;

