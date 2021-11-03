import React from 'react'
import style from './ApplyBtn.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//////////////////////////////////////////////////

const ApplyBtn = React.memo(({ handleClick, label, icon }) => {
  return (
    <>
      <span className={style.button} onClick={handleClick}>
        {<FontAwesomeIcon
          icon={icon}
          style={{ marginRight: '7px', color: 'azure' }}/>}
        {label}
      </span>
    </>
  )
})

export default ApplyBtn
