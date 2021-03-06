import React from 'react';
import styles from './ProfileInfoData.module.scss';
import SubmitFollowBtn from "../../../commons/Buttons/SubmitFollow/SubmitFollowBtn";
import {
    faBuilding,
    faCalendar,
    faCity,
    faDoorClosed,
    faDoorOpen,
    faEnvelopeOpen,
    faExternalLinkSquareAlt,
    faFileSignature,
    faMobileAlt,
    faStreetView
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faOdnoklassniki} from "@fortawesome/free-brands-svg-icons";
import {configs} from "../../../../config/configs";
import noPhoto from "../../../../assets/images/no-aveliable-image.png";


const ProfileInfoData = ({
                             me: {
                                 user_photo,
                                 email,
                                 phone,
                                 name,
                                 age,
                                 surname,
                                 city,
                                 street,
                                 house,
                                 apartment,
                                 entrance,
                                 floor
                             }
                             , isAuth,
                             goToEditMode
                         }) => {

    return (
        <>
            {isAuth &&
            <SubmitFollowBtn
                handleClick={() => {
                    goToEditMode()
                }}
                label="Змінити профіль"
                name={'Edit'}
                type={"button"}/>}
            <img
                src={user_photo != null ? `${configs.HOST}:${configs.PORT}/${user_photo}` : noPhoto}
                alt='noPhoto'/>
            <ul className={styles.container}>
                <li>
                    <FontAwesomeIcon
                        style={{marginRight: '7px', color: '#EE7178'}}
                        icon={faFileSignature}/><span>Ім'я:</span> {name}
                </li>
                <li>
                    <FontAwesomeIcon
                        style={{marginRight: '7px', color: '#EE7178'}}
                        icon={faOdnoklassniki}/><span>Прізвище:</span> {surname}
                </li>
                <li>
                    <FontAwesomeIcon
                        style={{marginRight: '7px', color: '#EE7178'}}
                        icon={faCalendar}/><span>Вік:</span> {age}
                </li>
                <li>
                    <FontAwesomeIcon
                        style={{marginRight: '7px', color: '#EE7178'}}
                        icon={faMobileAlt}/><span>Телефон:</span> {phone}
                </li>
                <li>
                    <FontAwesomeIcon
                        style={{marginRight: '7px', color: '#EE7178'}}
                        icon={faEnvelopeOpen}/><span>Емейл:</span> {email}
                </li>
                <li>
                    <FontAwesomeIcon
                        style={{marginRight: '7px', color: '#EE7178'}}
                        icon={faCity}/><span>Місто:</span> {city}
                </li>
                <li>
                    <FontAwesomeIcon
                        style={{marginRight: '7px', color: '#EE7178'}}
                        icon={faStreetView}/><span>Вулиця:</span> {street}
                </li>
                <li>
                    <FontAwesomeIcon
                        style={{marginRight: '7px', color: '#EE7178'}}
                        icon={faBuilding}/><span>Будинок:</span> {house}
                </li>
                {apartment && <li>
                    <FontAwesomeIcon
                        style={{marginRight: '7px', color: '#EE7178'}}
                        icon={faDoorClosed}/><span>Квартира:</span> {apartment}
                </li>}
                {entrance && <li>
                    <FontAwesomeIcon
                        style={{marginRight: '7px', color: '#EE7178'}}
                        icon={faDoorOpen}/><span>Під'їзд:</span> {entrance}
                </li>}
                {floor && <li>
                    <FontAwesomeIcon
                        style={{marginRight: '7px', color: '#EE7178'}}
                        icon={faExternalLinkSquareAlt}/><span>Поверх:</span> {floor}
                </li>}
            </ul>
        </>
    )
};

export default ProfileInfoData;
