import React, {useMemo, useState} from 'react';
import {Button} from './Button/ButtonLogin';
import {Link} from 'react-router-dom';
import styles from './NavBar.module.scss';
import Dropdown from './Dropdown/Dropdown';
import {faBars, faCaretDown, faSignInAlt, faSignOutAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from '../../../../assets/images/mail_bg.png';
import CartCounts from "../CartCounts/CartCounts";


const NavBar = ({isAuth, me}) => {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 1020) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 1020) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };


    useMemo(() => {
        console.log(me);
    }, [me])

    return (
        <>
            <nav className={styles.navbar}>
                <Link to='/home' className={styles.logo} onClick={closeMobileMenu}>
                    <p>P<span>i</span>zz<span>ac</span>hu</p> <img src={logo} alt={'logo'}/>
                    <span role="img" aria-label="information" className={styles.label}> i cheese you! 🍕</span>
                </Link>
                <div className={styles.menuIcon} onClick={handleClick}>
                    {click
                        ? <FontAwesomeIcon
                            className={styles.faTimes}
                            icon={faTimes}/>
                        : <FontAwesomeIcon
                            className={styles.faBars}
                            icon={faBars}/>}
                </div>
                <ul className={click ? `${styles.navMenu} ${styles.active}` : `${styles.navMenu}`}>
                    <li className={styles.navItem}>
                        <Link to='/home' className={styles.navLinks} onClick={closeMobileMenu}>
                            Головна
                        </Link>
                    </li>
                    <li
                        className={`${styles.navItem} ${styles.navBlockItem}`}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to='#'
                            className={styles.navLinks}
                            onClick={closeMobileMenu}
                        >
                            Сервіс <FontAwesomeIcon
                            className={styles.faCaretDown}
                            icon={faCaretDown}/>
                        </Link>
                        {dropdown && <Dropdown className={styles.navBlockItem}/>}
                    </li>
                    <li className={`${styles.navItem} ${styles.navMobileItem}`}>
                        <Link
                            to='/promotions'
                            className={styles.navLinks}
                            onClick={closeMobileMenu}
                        >
                            Акції
                        </Link>
                    </li>
                    <li className={`${styles.navItem} ${styles.navMobileItem}`}>
                        <Link
                            to='/delivery'
                            className={styles.navLinks}
                            onClick={closeMobileMenu}
                        >
                            Доставка
                        </Link>
                    </li>
                    <li className={`${styles.navItem} ${styles.navMobileItem}`}>
                        <Link
                            to='/feedbacks'
                            className={styles.navLinks}
                            onClick={closeMobileMenu}
                        >
                            Відгуки
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link
                            to='/about'
                            className={styles.navLinks}
                            onClick={closeMobileMenu}
                        >
                            Про нас
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link
                            to='/contact'
                            className={styles.navLinks}
                            onClick={closeMobileMenu}
                        >
                            Контакти
                        </Link>
                    </li>
                    <li>
                        {isAuth ?
                            <Link
                                title={me.surname ? me.name + ' ' + me.surname : me.name}
                                to='/logout'
                                className={styles.navLinksMobile}
                                onClick={closeMobileMenu}
                            >
                                Вихід <FontAwesomeIcon className={styles.faBars} icon={faSignOutAlt}/>
                            </Link>
                            : <Link
                                to='/login'
                                className={styles.navLinksMobile}
                                onClick={closeMobileMenu}
                            >
                                Вхід <FontAwesomeIcon className={styles.faBars} icon={faSignInAlt}/>
                            </Link>}
                    </li>
                </ul>
                {isAuth ?
                    <Button
                        title={me.surname ? me.name + ' ' + me.surname : me.name}
                        path={'/logout'}
                        label={'Вихід'}
                        icon={<FontAwesomeIcon className={styles.faBars} icon={faSignOutAlt}/>
                        }/>
                    : <Button
                        path={'/login'}
                        label={'Вхід'}
                        icon={<FontAwesomeIcon className={styles.faBars} icon={faSignInAlt}/>
                        }/>}
                <CartCounts/>
            </nav>
        </>
    );
};

export default NavBar;
