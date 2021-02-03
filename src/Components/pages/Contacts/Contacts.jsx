import React from 'react';
import style from './Contacts.module.scss';
import settingsPagePhoto from '../../../assets/images/settingsPagePhoto.png'

const Contacts = () => {
    return (
        <div>
            <img className={style.settings}
                 alt='img'
                 src={settingsPagePhoto} />
            Settings
        </div>
    )
};

export default Contacts;
