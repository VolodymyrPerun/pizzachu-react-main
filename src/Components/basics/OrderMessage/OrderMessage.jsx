import React from 'react';
import style from "./OrderMessage.module.scss";
import 'react-lazy-load-image-component/src/effects/blur.css';
import {faClock, faStopwatch, faTruck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";
import {CloseCircleOutlined} from '@ant-design/icons';


export const OrderMessage = ({isAuth, me}) => {


    return (
        <div className={style.page}>

            <NavLink className={style.closeBtn} to={'/home'}>
                <CloseCircleOutlined className={style.icon}/>
            </NavLink>

            <div className={style.messageContent}>

                <h3>{isAuth && me.gender_id === 2 ? 'Шановнa ' : 'Шановний '} <span>{isAuth
                    ? me.name + ' ' + (me.surname ? me.surname + ' ' : '') : 'клієнте '}</span>!
                </h3>

                <h3>Ваше замовлення прийнято о <FontAwesomeIcon
                    style={{marginRight: '2px', marginLeft: '5px', color: '#EE7178'}}
                    icon={faClock}/>
                    <span>{new Date().toTimeString().replace(/ .*/, '')}</span>, очікуйте на
                    дзвінок від наших продавців напротязі <span>
                        <FontAwesomeIcon
                            style={{marginRight: '2px', marginLeft: '5px', color: '#EE7178'}}
                            icon={faStopwatch}/>30</span> секунд.</h3>

                <span><FontAwesomeIcon
                    style={{marginRight: '7px', color: '#EE7178'}}
                    icon={faTruck}/>Доставимо до <span style={{color: '#EE7178'}}>29
                    </span> хвилин або даруємо піцу/рол за спізнення</span>
            </div>
        </div>
    );
};
