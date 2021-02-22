import React from 'react';
import style from './Header.module.scss';
import NavBar from "../../../containers/NavBar/NavBar";

const Header = ({isAuth, login, logout}) => {

    return (
        <header className={style.header}>
            <NavBar/>
        </header>
    )
};

export default Header;
