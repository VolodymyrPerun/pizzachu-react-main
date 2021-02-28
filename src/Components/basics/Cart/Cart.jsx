import React, {memo, useCallback, useEffect} from 'react';
import styles from './Cart.module.scss';
import ApplyBtn from "../../commons/Buttons/Apply/ApplyBtn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faArrowRight,
    faCartArrowDown,
    faHryvnia,
    faTrash,
    faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import {CloseCircleOutlined, MinusCircleOutlined, PlusCircleOutlined} from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import emptyCart from "../../../assets/images/modal-cart-dummy.svg";


const Cart = memo(({
                       deleteProductFromCart,
                       updateProductInCart,
                       totalProductsSum,
                       productsLength,
                       deleteCart,
                       getCart,
                       cart
                   }) => {

    const minus = useCallback((id, count) => {
        if (count > 1) {
            updateProductInCart(id, --count);
        } else {
            updateProductInCart(id, 1);
        }
    }, [updateProductInCart]);

    const plus = useCallback((id, count) => {
        updateProductInCart(id, ++count);
    }, [updateProductInCart]);

    const deleteProduct = useCallback(productId => {
        deleteProductFromCart(productId);
    }, [deleteProductFromCart]);

    const cartClear = useCallback(() => {
        deleteCart();
    }, [deleteCart]);


    useEffect(() => {
        getCart()
    }, [getCart, updateProductInCart, plus, minus, deleteProduct, cartClear]);


    return (
        <>
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

                    <div className={styles.cartClear}>
                        <ApplyBtn
                            handleClick={cartClear}
                            icon={faTrashAlt}
                            label={'Очистити корзину'}
                        />
                    </div>
                </div>

                {productsLength !== 0 ?
                    cart.map(cartItem =>
                        <div key={cartItem.id} className={styles.cartItemContainer}>
                            <NavLink to={'/productPage/' + cartItem.productId} className={styles.cartItem}>
                                <img className={styles.img}
                                     src={`http://localhost:5000/${cartItem['Product.product_photo']}`}
                                     alt={'productImage'}/>
                                <span className={styles.tittle}>{cartItem['Product.name']}</span>
                                <span className={styles.size}>{cartItem.price} грн</span>
                            </NavLink>

                            <div className={styles.cartCounter}>
                                <div onClick={() => minus(cartItem.productId, cartItem.count)}
                                     className={cartItem.count > 1 ? styles.minus : styles.disable}>
                                    <MinusCircleOutlined/></div>
                                <div className={styles.count}><span>{cartItem.count}</span></div>
                                <div onClick={() => plus(cartItem.productId, cartItem.count)} className={styles.plus}>
                                    <PlusCircleOutlined/></div>
                            </div>

                            <div className={styles.sum}>
                                <span style={{marginRight: '7px', marginLeft: '7px', color: '#EE7178'}}>= </span>
                                {cartItem.sum}
                                <FontAwesomeIcon
                                    style={{marginLeft: '7px', color: '#EE7178'}}
                                    icon={faHryvnia}/>
                            </div>

                            <div onClick={() => deleteProduct(cartItem.productId)}
                                 className={styles.delete}>
                                <FontAwesomeIcon
                                    icon={faTrash}/>
                            </div>
                        </div>
                    ) : <div style={{height: '50%', width: '50%', margin: '0 auto'}}>
                        <h3>Кошик порожній</h3>
                        <p>Але це ніколи не пізно виправити :)</p>
                        <img className={styles.img}
                             src={emptyCart}
                             alt={'emptyCart'}/>
                    </div>}

                <div className={styles.totalGroup}>
                    <div className={styles.totalProductsCount}>Всього товарів: <span> {productsLength} шт.</span></div>

                    <div className={styles.totalSum}>Сума замовлення: <span
                        style={{marginLeft: '7px', color: 'grey'}}>{totalProductsSum}</span>
                        <FontAwesomeIcon
                            style={{marginLeft: '7px', color: '#EE7178'}}
                            icon={faHryvnia}/>
                    </div>
                </div>

                <div className={styles.btnGroup}>
                    <NavLink className={styles.goBack} to={'/home'}>
                        <ApplyBtn
                            icon={faArrowLeft}
                            label={'Продовжити покупки'}
                        />
                    </NavLink>

                    {productsLength !== 0 ?
                    <NavLink to={'/purchase'} className={styles.order}>
                        <ApplyBtn
                            icon={faArrowRight}
                            label={'Замовити товари'}
                        />
                    </NavLink> : null}
                </div>

            </div>
        </>
    )
});

export default Cart;
