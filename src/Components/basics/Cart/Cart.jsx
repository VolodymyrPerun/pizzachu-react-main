import React from 'react';
import styles from './Cart.module.scss';
import ApplyBtn from "../../commons/Buttons/Apply/ApplyBtn";
import productImage from "../../../assets/images/test_pizza.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faCartArrowDown, faHryvnia, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {CloseCircleOutlined, MinusCircleOutlined, PlusCircleOutlined} from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import cookie from 'js-cookie';


export const setCookie = (key, value) => {
    if (process.browser) {
        cookie.set(key, value, {
            expires: 1
        });
    }
};

export const getCookie = key => {
    if (process.browser) {
        return cookie.get(key);
    }
};

export const setLocalStorage = (key, value) => {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};


const Cart = () => {

    const cartClear = () => {

    };

    return (
        <div className={styles.container}>
            <NavLink className={styles.closeBtn} to={'/home'}>
                <CloseCircleOutlined className={styles.icon}/>
            </NavLink>
            <div className={styles.cartLogoContainer}>
                <div className={styles.cartLogo}>
                    <FontAwesomeIcon
                        style={{marginRight: '7px', color: '#EE7178'}}
                        icon={faCartArrowDown}/>
                    <span className={styles.logoTittle}>
                            Корзина
                        </span>
                </div>
            </div>
            <div className={styles.cartClear}>
                <ApplyBtn
                    handleClick={cartClear}
                    icon={faTrashAlt}
                    label={'Очистити корзину'}
                />
            </div>

            <div className={styles.cartItem}>
                <img className={styles.img}
                    // src={product.product_photo}
                     src={productImage}
                     alt={'productImage'}/>
                <span className={styles.tittle}>Піцца Філадельфія велика</span>
                <span className={styles.size}>22 см</span>
            </div>

            <div className={styles.cartCounter}>
                <div className={styles.minus}><MinusCircleOutlined/></div>
                <div className={styles.count}><span>20000</span></div>
                <div className={styles.plus}><PlusCircleOutlined/></div>
            </div>

            <div className={styles.sum}><span
                style={{marginRight: '7px', marginLeft: '7px', color: '#EE7178'}}>= </span> 23467
                <FontAwesomeIcon
                    style={{marginLeft: '7px', color: '#EE7178'}}
                    icon={faHryvnia}/>
            </div>

            <div className={styles.delete}><CloseCircleOutlined/></div>

            <div className={styles.totalProductsCount}>Всього товарів: <span> 3 шт.</span></div>

            <div className={styles.totalSum}>Сума замовлення: <span
                style={{marginLeft: '7px', color: 'grey'}}>23467</span>
                <FontAwesomeIcon
                    style={{marginLeft: '7px', color: '#EE7178'}}
                    icon={faHryvnia}/>
            </div>

            <NavLink className={styles.goBack} to={'/home'}>
                <ApplyBtn
                    icon={faArrowLeft}
                    label={'Повернутись назад'}
                />
            </NavLink>

            <div className={styles.order}>
                <ApplyBtn
                   // handleClick={cartClear}
                    label={'Замовити товари'}
                />
            </div>
        </div>
    )
};

export default Cart;
