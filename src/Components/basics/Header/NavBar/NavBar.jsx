import React, {useState} from 'react';
import {Button} from './Button/Button';
import {Link} from 'react-router-dom';
import styles from './NavBar.module.scss'
import Dropdown from './Dropdown/Dropdown';
import {faBars, faTimes, faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from '../../../../assets/images/mail_bg.png'
import SingUpIcon from "../../../commons/CustomIcons/SingUp";

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className={styles.navbar}>
                <Link to='/' className={styles.logo} onClick={closeMobileMenu}>
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
                        <Link to='/' className={styles.navLinks} onClick={closeMobileMenu}>
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
                        <Link
                            to='/sign-up'
                            className={styles.navLinksMobile}
                            onClick={closeMobileMenu}
                        >
                            Sign Up<SingUpIcon/>
                        </Link>
                    </li>
                </ul>
                <Button/>
            </nav>
        </>
    );
}

export default NavBar;
