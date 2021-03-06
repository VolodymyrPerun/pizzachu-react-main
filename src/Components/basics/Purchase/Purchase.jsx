import React, {memo, useEffect, useState} from 'react';
import styles from './Purchase.module.scss';
import ApplyBtn from "../../commons/Buttons/Apply/ApplyBtn";
import {
    faAddressCard,
    faArrowLeft,
    faHryvnia,
    faMoneyCheck,
    faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CloseCircleOutlined} from '@ant-design/icons';
import OrderMessage from "../../../containers/OrderMessage/OrderMessage";
import PurchaseForm from "./PurchaseForm/PurchaseForm";


const Purchase = memo(({
                           totalProductsSum,
                           productsLength,
                           getCart,
                           cart,
                           me,
                           isAuth,
                           addPurchase,
                           deleteCart,
                           pristine, submitting, reset, error
                       }) => {


    let [state, setState] = useState({
        email: me ? me.email : '',
        phone: me ? me.phone : '',
        city: me ? me.city : 'Львів',
        name: me ? me.name : '',
        street: me ? me.street : '',
        house: me ? me.house : '',
        apartment: me ? me.apartment : '',
        entrance: me ? me.entrance : '',
        floor: me ? me.floor : '',
    });

    const handleChange = event => {
        const city = event.target.name;
        setState({
            ...state,
            [city]: event.target.value,
        });
    };

    const onSubmit = () => {
        addPurchase(
            state.email,
            state.phone,
            state.name,
            state.city,
            state.street,
            state.house,
            state.apartment,
            state.entrance,
            state.floor
        );
        deleteCart();
        localStorage.setItem('tempId', '');
    };

    useEffect(() => {
        getCart();
    }, [getCart, deleteCart, addPurchase]);


    return (
        <>
            {productsLength
                ? <div className={styles.container}>
                    <NavLink className={styles.closeBtn} to={'/cart'}>
                        <CloseCircleOutlined className={styles.icon}/>
                    </NavLink>

                    <div className={styles.logoContainer}>
                        <div className={styles.logo}>
                            <FontAwesomeIcon
                                style={{marginRight: '7px', color: '#EE7178'}}
                                icon={faMoneyCheck}/>
                            <span className={styles.tittle}>
                            Оформити замовлення
                        </span>
                        </div>
                    </div>

                    <div className={styles.logoContainer}>
                        <div className={styles.logo}>
                            <FontAwesomeIcon
                                style={{marginRight: '7px', color: '#EE7178'}}
                                icon={faShoppingCart}/>
                            <span className={styles.tittle}>
                Ваше замовлення
                </span>
                        </div>
                    </div>

                    <div className={styles.wrapper}>
                        {cart && cart.map(cartItem =>
                            <div key={cartItem.id} className={styles.itemContainer}>
                                <NavLink to={'/productPage/' + cartItem.productId} className={styles.cartItem}>
                                    <img className={styles.img}
                                         src={`http://localhost:5000/${cartItem['Product.product_photo']}`}
                                         alt={'productImage'}/>
                                    <span className={styles.tittle}>{cartItem['Product.name']}</span>
                                    <span className={styles.size}>{cartItem.price} грн</span>
                                </NavLink>


                                <NavLink to={'/productPage/' + cartItem.productId} className={styles.counter}>
                                    <div className={styles.count}><span>{cartItem.count} шт</span></div>
                                </NavLink>

                                <NavLink to={'/productPage/' + cartItem.productId} className={styles.sum}>
                                        <span
                                            style={{marginRight: '7px', marginLeft: '7px', color: '#EE7178'}}>= </span>
                                    {cartItem.sum}
                                    <FontAwesomeIcon
                                        style={{marginLeft: '7px', color: '#EE7178'}}
                                        icon={faHryvnia}/>
                                </NavLink>
                            </div>
                        )}

                        <div className={styles.totalGroup}>
                            <div className={styles.totalProductsCount}>Всього
                                товарів: <span> {productsLength} шт.</span></div>

                            <div className={styles.totalSum}>Сума замовлення: <span
                                style={{marginLeft: '7px', color: 'grey'}}>{totalProductsSum}</span>
                                <FontAwesomeIcon
                                    style={{marginLeft: '7px', color: '#EE7178'}}
                                    icon={faHryvnia}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.logoContainer}>
                        <div className={styles.logo}>
                            <FontAwesomeIcon
                                style={{marginRight: '7px', color: '#EE7178'}}
                                icon={faAddressCard}/>
                            <span className={styles.tittle}>
                            Персональні дані
                        </span>
                        </div>
                    </div>

                    <PurchaseForm
                        onSubmit={onSubmit}
                        me={me}
                        isAuth={isAuth}
                        handleChange={handleChange}
                        error={error}
                        state={state}
                        setState={setState}
                    />

                    <div className={styles.btnGroup}>
                        <NavLink className={styles.goBack} to={'/home'}>
                            <ApplyBtn
                                icon={faArrowLeft}
                                label={'Продовжити покупки'}
                            />
                        </NavLink>
                    </div>
                </div>
                : <OrderMessage/>}
        </>
    );
});

export default Purchase;
