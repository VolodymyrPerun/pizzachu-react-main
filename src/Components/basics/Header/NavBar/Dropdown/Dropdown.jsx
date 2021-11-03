import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Dropdown.module.scss'
import { MenuItems } from '../MenuItems/MenuItems'
//////////////////////////////////////////////////

const Dropdown = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? styles.clicked : styles.dropdownMenu}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                onClick={() => setClick(false)}
                className={`${styles.dropdownLink} ${item.cName}`}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Dropdown
