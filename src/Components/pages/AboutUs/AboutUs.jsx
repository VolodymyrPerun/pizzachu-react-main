import React from 'react';
import style from './AboutAs.module.scss';
import musicPagePhoto from '../../../assets/images/musicPagePhoto.png'

const AboutUs = () => {
    return (
        <div>
            <img className={style.music}
                 alt='img'
                 src={musicPagePhoto}/>
            Music
        </div>
    )
};

export default AboutUs;
