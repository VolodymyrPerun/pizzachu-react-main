import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'
//////////////////////////////////////////////////

export const Button = ({ icon, path, label, title, onClick }) => {
  return (
    <Link to={path} title={title}>
      <button onClick={onClick} className={styles.btn}>{label} {icon}</button>
    </Link>
  )
}
