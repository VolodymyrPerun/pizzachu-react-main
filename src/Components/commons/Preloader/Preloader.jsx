import React from 'react'
import { Spin } from 'antd'
import style from './Preloader.module.scss'
import { LoadingOutlined } from '@ant-design/icons'
//////////////////////////////////////////////////

const Preloader = () => {

  return (
    <div className={style.preloader}>
      <Spin
        className={style.tip}
        tip="Зачекайте будь ласка..."
        indicator={
          <LoadingOutlined
            spin
            className={`${style.spinner} ${style.spinnerBig}`}/>}/>
    </div>
  )
}

export default Preloader
