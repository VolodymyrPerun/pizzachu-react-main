import React from 'react';
import style from './Login.module.scss';
import loginPagePhoto from '../../../assets/images/login-pizza.gif'
import LoginForm from "./LoginForm";
import {faSignInAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";
import {login} from "../../../redux/reducers/authReducer/thunks";
import {NavLink, Redirect} from "react-router-dom";
import Preloader from "../../commons/Preloader/Preloader";
import styles from "../../basics/Login/Login.module.scss";
import {CloseOutlined} from '@ant-design/icons';


const Login = ({
                   isAuth,
                   isFetching,
                   errorMessage,
                   match,
                   login,
                   loginAdmin,
                   adminErrorMessage
               }) => {


    console.log(isAuth);

    const onSubmit = data => {

        if (match.path === '/login') {
            login(data.email, data.password)
        }

        if (match.path === '/auth-admin') {
            loginAdmin(data.email, data.password)
        }
    };

    if (isAuth) {
        return <Redirect to={`/home`}/>
    }
    if (isFetching) {
        return <div className={styles.preloader}>

            <Preloader/>
            </div>
    }

    return (
        <div className={style.login}>
            <img
                alt='img'
                src={loginPagePhoto}/>

            <div className={style.forms}>
                    <NavLink className={styles.closeBtn} to={'/home'}>
                        <CloseOutlined className={styles.icon}/>
                    </NavLink>
                <h1 className={style.title}>
                    <FontAwesomeIcon
                        style={{marginRight: '13px', bottom: '-5px', position: 'relative'}}
                        icon={faSignInAlt}/>
                    Вхід
                </h1>
                <LoginForm onSubmit={onSubmit}
                           errorMessage={errorMessage}
                           adminErrorMessage={adminErrorMessage}/>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
};

export default connect(mapStateToProps, {login})(Login);

