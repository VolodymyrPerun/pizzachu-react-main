import React, { useMemo } from 'react'
import style from './Page404.module.scss'
import PagePhoto from '../../../assets/images/404.gif'
import error from '../../../assets/images/not_found_bg.png'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
//////////////////////////////////////////////////

export const Page404 = ({ history }) => {

  useMemo(() => {
    setTimeout(() => history.push('/'), 10000)
  }, [history])

  return (
    <div className={style.page}>
      <LazyLoadImage
        alt='img'
        effect='blur'
        src={PagePhoto}/>
      <div
        className={style.errorContent}
        style={{
          alignContent: 'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${error})`,
        }}>
      </div>
    </div>
  )
}
