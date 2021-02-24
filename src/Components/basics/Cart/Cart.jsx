import React, {useCallback, useEffect} from 'react';
import styles from './Cart.module.scss';
import ApplyBtn from "../../commons/Buttons/Apply/ApplyBtn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faCartArrowDown, faHryvnia, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {CloseCircleOutlined, MinusCircleOutlined, PlusCircleOutlined} from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import emptyCart from "../../../assets/images/modal-cart-dummy.svg"


const Cart = ({
                  updateProductInCart,
                  totalProductsSum,
                  productsLength,
                  productCount,
                  getCart,
                  cart
              }) => {

    // const plus = (id, count) => {
    //     count = productCount + count;
    //     updateProductInCart(id, count);
    // };
    //
    // const minus = (id, count) => {
    //     if (count > 1) {
    //         count = productCount - count;
    //     } else {
    //         count = 1;
    //     }
    //     updateProductInCart(id, count);
    // };

    const plusCallback = useCallback((id) => {
        ++productCount;
        updateProductInCart(id, productCount);
    }, [productCount]);



    const minusCallback = useCallback((id) => {
        if (productCount > 1) {
            --productCount;
        }
        updateProductInCart(id, productCount);
    }, [productCount]);

   useEffect(() => {
        let cleanupFunction = false;
        try {
            (!cleanupFunction) &&
            getCart();
        } catch (e) {
            console.error(e);
        }
        return (() => {
                cleanupFunction = true;
                getCart();
            }
        );
    }, [getCart, productCount,updateProductInCart, plusCallback, minusCallback]);




    const cartClear = () => {

    };

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

                {productCount && cart ?
                    cart.map(cartItem =>
                        <div key={cartItem.id} className={styles.cartItemContainer}>
                            <div className={styles.cartItem}>
                                <img className={styles.img}
                                     src={`http://localhost:5000/${cartItem['Product.product_photo']}`}
                                     alt={'productImage'}/>
                                <span className={styles.tittle}>{cartItem['Product.name']}</span>
                                <span className={styles.size}>{cartItem.price} грн</span>
                            </div>

                            <div className={styles.cartCounter}>
                                <div onClick={() => minusCallback(cartItem.productId, 1)} className={styles.minus}><MinusCircleOutlined/></div>
                                <div className={styles.count}><span>{cartItem.count}</span></div>
                                <div onClick={() => plusCallback(cartItem.productId, 1)} className={styles.plus}><PlusCircleOutlined/></div>
                            </div>

                            <div className={styles.sum}>
                                <span style={{marginRight: '7px', marginLeft: '7px', color: '#EE7178'}}>= </span>
                                {cartItem.sum}
                                <FontAwesomeIcon
                                    style={{marginLeft: '7px', color: '#EE7178'}}
                                    icon={faHryvnia}/>
                            </div>

                            <div className={styles.delete}><CloseCircleOutlined/></div>
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
                            label={'Повернутись назад'}
                        />
                    </NavLink>

                    <div className={styles.order}>
                        <ApplyBtn
                            icon={faArrowRight}
                            // handleClick={cartClear}
                            label={'Замовити товари'}
                        />
                    </div>
                </div>

            </div>
        </>
    )
};

export default Cart;
