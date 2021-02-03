import React from 'react';
import style from './Home.module.scss';
import newsPagePhoto from '../../../assets/images/newsPagePhoto.png'

const Home = () => {
    return (
        <div>
            <img className={style.news}
                 alt='img'
                 src={newsPagePhoto}/>
            News
        </div>
    )
};

export default Home;
