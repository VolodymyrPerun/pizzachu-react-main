import React from 'react'
import style from './Header.module.scss'
import NavBar from '../../../containers/NavBar/NavBar'
//////////////////////////////////////////////////

const Header = () => {
  return (
    <header className={style.header}>
      <NavBar/>
    </header>
  )
}

export default Header
