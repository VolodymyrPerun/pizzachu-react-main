import React from 'react';
import styles from './CartCounts.module.scss';
import {useSelector} from "react-redux";
import {faCartArrowDown, faHryvnia} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const CartCounts = () => {

    const {productsCount, totalPrice} = useSelector(({cart}) => (
        {
            productsCount: cart.productsCount,
            totalPrice: cart.totalPrice
            // totalPrice: cart.totalPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
        }));

    return (
        <NavLink to="/cart" title={'Перейти в корзину'} className={styles.container}>
            <div style={{fontSize: '14px'}}>
                {totalPrice}
                <FontAwesomeIcon
                style={{marginLeft: '7px', color: 'azure'}}
                icon={faHryvnia}/>
            </div>
            <div style={{fontSize: '14px'}}>
                <FontAwesomeIcon
                    style={{marginRight: '7px', color: 'azure'}}
                    icon={faCartArrowDown}/>
                {productsCount}
            </div>
        </NavLink>
    )
};

export default CartCounts;
