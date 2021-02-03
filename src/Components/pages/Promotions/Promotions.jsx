import React from 'react';
import style from './Promotions.module.scss';
import newsPagePhoto from '../../../assets/images/newsPagePhoto.png'

const Promotions = () => {
    return (
        <div>
            <img className={style.news}
                 alt='img'
                 src={newsPagePhoto}/>
            News
        </div>
    )
};

export default Promotions;
