import React from 'react';
import styles from './CartCounts.module.scss';
import {useSelector} from "react-redux";
import {faCartArrowDown, faHryvnia} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const CartCounts = () => {

    const {productsLength, totalProductsSum} = useSelector(({cart}) => (
        {
            productsLength: cart.productsLength,
            totalProductsSum: (cart.totalProductsSum).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
        }));

    return (
        <NavLink to="/cart" title={'Перейти в корзину'} className={styles.container}>
            <div style={{fontSize: '14px'}}>
                {totalProductsSum}
                <FontAwesomeIcon
                style={{marginLeft: '7px', color: 'azure'}}
                icon={faHryvnia}/>
            </div>
            <div style={{fontSize: '14px'}}>
                <FontAwesomeIcon
                    style={{marginRight: '7px', color: 'azure'}}
                    icon={faCartArrowDown}/>
                {productsLength}
            </div>
        </NavLink>
    )
};

export default CartCounts;
