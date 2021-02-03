import React from 'react';
import style from './Header.module.scss';
import logo from '../../../assets/images/logo.png'
import {NavLink} from "react-router-dom";
import {UserOutlined, UserAddOutlined} from '@ant-design/icons';
import SubmitFollowBtn from "../../commons/Buttons/SubmitFollow/SubmitFollowBtn";
import NavBar from "./NavBar/NavBar";

const Header = ({isAuth, login, logout}) => {

    return (
        <header className={style.header}>
            <NavBar />
            <div className={style.loginBlock}>
                {/*{isAuth*/}
                {/*    ? <div className={style.itemLink}*/}
                {/*           style={{top: '-7px', fontSize: '9px !important', padding: '0', marginRight: '10px'}}>*/}
                {/*        {login}*/}
                {/*        <div>*/}
                {/*            <SubmitFollowBtn handleClick={logout} label="Logout"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    : <div>*/}
                {/*        <div><NavLink activeClassName={style.active} className={style.itemLink} to={'/login'}>*/}
                {/*            <UserOutlined style={{marginRight: '5px'}}/><SubmitFollowBtn handleClick={login}*/}
                {/*                                                                         label={'login'}/>*/}
                {/*        </NavLink></div>*/}
                {/*        <div><NavLink activeClassName={style.active} className={style.itemLink} to={'/register'}>*/}
                {/*            <UserAddOutlined style={{marginRight: '5px'}}/><SubmitFollowBtn handleClick={login}*/}
                {/*                                                                            label={'register'}/>*/}
                {/*        </NavLink></div>*/}
                {/*    </div>}*/}
            </div>
        </header>
    )
};

export default Header;
