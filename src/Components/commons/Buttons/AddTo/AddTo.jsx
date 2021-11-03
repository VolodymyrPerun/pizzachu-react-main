import React from 'react'
import style from './AddTo.module.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//////////////////////////////////////////////////

const AddTo = React.memo(({ handleClick, label, icon, to }) => {
  return (
    <>
      <NavLink to={to} className={style.button} onClick={handleClick}>
        {<FontAwesomeIcon
          icon={icon}
          style={{ marginRight: '7px', color: 'azure' }}/>}
        {label}
      </NavLink>
    </>
  )
})

export default AddTo
