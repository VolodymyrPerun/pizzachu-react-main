import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.scss'
import Dropdown from './Dropdown/Dropdown'
import { Button } from './Button/ButtonLogin'
import CartCounts from '../CartCounts/CartCounts'
import logo from '../../../../assets/images/mail_bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faTimes,
  faCaretDown,
  faSignInAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'
//////////////////////////////////////////////////

const NavBar = ({ isAuth, me }) => {

  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 1020) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 1020) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return (
    <>
      <nav className={styles.navbar}>
        <Link to='/home' className={styles.logo} onClick={closeMobileMenu}>
          <p>P<span>i</span>zz<span>ac</span>hu</p> <img src={logo}
                                                         alt={'logo'}/>
          <span role="img" aria-label="information" className={styles.label}> i cheese you! 🍕</span>
        </Link>
        <div className={styles.menuIcon} onClick={handleClick}>
          {click
            ? <FontAwesomeIcon
              icon={faTimes}
              className={styles.faTimes}/>
            : <FontAwesomeIcon
              icon={faBars}
              className={styles.faBars}/>}
        </div>
        <ul className={click
          ? `${styles.navMenu} ${styles.active}`
          : `${styles.navMenu}`}>
          <li className={styles.navItem}>
            <Link
              to='/home'
              className={styles.navLinks}
              onClick={closeMobileMenu}>
              Головна
            </Link>
          </li>
          <li
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`${styles.navItem} ${styles.navBlockItem}`}
          >
            <Link
              to='#'
              className={styles.navLinks}
              onClick={closeMobileMenu}
            >
              Сервіс <FontAwesomeIcon
              icon={faCaretDown}
              className={styles.faCaretDown}/>
            </Link>
            {dropdown && <Dropdown className={styles.navBlockItem}/>}
          </li>
          <li className={`${styles.navItem} ${styles.navMobileItem}`}>
            <Link
              to='/promotions'
              onClick={closeMobileMenu}
              className={styles.navLinks}
            >
              Акції
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.navMobileItem}`}>
            <Link
              to='/delivery'
              onClick={closeMobileMenu}
              className={styles.navLinks}
            >
              Доставка
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.navMobileItem}`}>
            <Link
              to='/orders'
              onClick={closeMobileMenu}
              className={styles.navLinks}
            >
              Мої замовлення
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.navMobileItem}`}>
            <Link
              to='/profile'
              onClick={closeMobileMenu}
              className={styles.navLinks}
            >
              Мій профіль
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to='/about'
              onClick={closeMobileMenu}
              className={styles.navLinks}
            >
              Про нас
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to='/contact'
              onClick={closeMobileMenu}
              className={styles.navLinks}
            >
              Контакти
            </Link>
          </li>
          <li>
            {isAuth ?
              <Link
                title={me.surname ? me.name + ' ' + me.surname : me.name}
                to='/login'
                onClick={closeMobileMenu}
                className={styles.navLinksMobile}
              >
                Вихід <FontAwesomeIcon className={styles.faBars}
                                       icon={faSignOutAlt}/>
              </Link>
              : <Link
                to='/login'
                onClick={closeMobileMenu}
                className={styles.navLinksMobile}
              >
                Вхід <FontAwesomeIcon className={styles.faBars}
                                      icon={faSignInAlt}/>
              </Link>}
          </li>
        </ul>
        {isAuth ?
          <Button
            path={'/login'}
            label={'Вихід'}
            title={me.surname ? me.name + ' ' + me.surname : me.name}
            onClick={closeMobileMenu}
            icon={<FontAwesomeIcon className={styles.faBars}
                                   icon={faSignOutAlt}/>}
          />
          : <Button
            label={'Вхід'}
            path={'/login'}
            icon={<FontAwesomeIcon className={styles.faBars}
                                   icon={faSignInAlt}/>}/>}
        <CartCounts/>
      </nav>
    </>
  )
}

export default NavBar
