import React from 'react'
import { NavLink } from 'react-router-dom'
import 'react-lazy-load-image-component/src/effects/blur.css'
import {
  faClock,
  faTruck,
  faStopwatch,
} from '@fortawesome/free-solid-svg-icons'
import style from './OrderMessage.module.scss'
import { CloseCircleOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//////////////////////////////////////////////////

export const OrderMessage = ({ me, isAuth }) => {

  return (
    <div className={style.page}>
      <NavLink to='/home' className={style.closeBtn}>
        <CloseCircleOutlined className={style.icon}/>
      </NavLink>
      <div className={style.messageContent}>
        <h3>{isAuth && me.gender_id === 2 ? 'Шановнa ' : 'Шановний '}
          <span>{isAuth
            ? me.name + ' ' + (me.surname ? me.surname + ' ' : '')
            : 'клієнте '}
          </span>!
        </h3>
        <h3>
          Ваше замовлення прийнято о
          <FontAwesomeIcon
            icon={faClock}
            style={{
              color: '#EE7178',
              marginLeft: '5px',
              marginRight: '2px',
            }}/>
          <span>
            {new Date().toTimeString().replace(/ .*/, '')}
          </span>, очікуйте на дзвінок від наших продавців напротязі
          <span>
            <FontAwesomeIcon
              icon={faStopwatch}
              style={{
                color: '#EE7178',
                marginLeft: '5px',
                marginRight: '2px',
              }}/> 30
          </span> секунд.
        </h3>
        <span>
          <FontAwesomeIcon
            icon={faTruck}
            style={{ marginRight: '7px', color: '#EE7178' }}/>
          Доставимо до
          <span style={{ color: '#EE7178' }}> 29 </span>
          хвилин або даруємо піцу/рол за спізнення
        </span>
      </div>
    </div>
  )
}
