import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faTimes,
  faCaretDown,
  faSignInAlt,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'
//
import styles from './NavBar.module.scss'
import Dropdown from './Dropdown/Dropdown'
import { Button } from './Button/ButtonLogin'
import LangSelect from './LangSelect/LangSelect'
import CartCounts from '../CartCounts/CartCounts'
import logo from '../../../../assets/images/mail_bg.png'
//////////////////////////////////////////////////

const NavBar = ({ me, isAuth }) => {
  const { t } = useTranslation()
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 1020) {
      setDropdown(false)
    }

    setDropdown(true)
  }

  const onMouseLeave = () => setDropdown(false)

  return (
    <>
      <nav className={styles.navbar}>
        <Link to='/home' className={styles.logo} onClick={closeMobileMenu}>
          <p>P<span>i</span>zz<span>ac</span>hu </p>
          <img alt='logo' src={logo}/>
          <span
            role='img'
            aria-label='information'
            className={styles.label}> i cheese you! 🍕</span>
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
              onClick={closeMobileMenu}
            >
              {t('Main')}
            </Link>
          </li>
          <li
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`${styles.navItem} ${styles.navBlockItem}`}>
            <Link
              to='#'
              onClick={closeMobileMenu}
              className={styles.navLinks}
            >
              {t('Service')}
              <FontAwesomeIcon
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
              {t('Promotions')}
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.navMobileItem}`}>
            <Link
              to='/delivery'
              onClick={closeMobileMenu}
              className={styles.navLinks}
            >
              {t('Delivery')}
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.navMobileItem}`}>
            <Link
              to='/orders'
              onClick={closeMobileMenu}
              className={styles.navLinks}
            >
              {t('My Orders')}
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.navMobileItem}`}>
            <Link
              to='/profile'
              onClick={closeMobileMenu}
              className={styles.navLinks}
            >
              {t('My Profile')}
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to='/about'
              onClick={closeMobileMenu}
              className={styles.navLinks}
            >
              {t('About Us')}
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              to='/contact'
              onClick={closeMobileMenu}
              className={styles.navLinks}
            >
              {t('Contacts')}
            </Link>
          </li>
          <LangSelect />
          <li>
            {isAuth
              ? <Link
                to='/login'
                onClick={closeMobileMenu}
                className={styles.navLinksMobile}
                title={me.surname ? me.name + ' ' + me.surname : me.name}
              >
                {t('Logout')} <FontAwesomeIcon icon={faSignOutAlt} className={styles.faBars}/>
              </Link>
              : <Link
                to='/login'
                onClick={closeMobileMenu}
                className={styles.navLinksMobile}
              >
                {t('Login')} <FontAwesomeIcon icon={faSignInAlt} className={styles.faBars}/>
              </Link>}
          </li>
        </ul>
        {isAuth
          ? <Button
            path='/login'
            label={t('Logout')}
            onClick={closeMobileMenu}
            title={me.surname ? me.name + ' ' + me.surname : me.name}
            icon={<FontAwesomeIcon className={styles.faBars} icon={faSignOutAlt}/>}
          />
          : <Button
            path='/login'
            label={t('Login')}
            icon={<FontAwesomeIcon className={styles.faBars} icon={faSignInAlt}/>}/>}
        <CartCounts/>
      </nav>
    </>
  )
}

export default NavBar
