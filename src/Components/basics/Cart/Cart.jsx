import styles from './Cart.module.scss'
import { NavLink } from 'react-router-dom'
import React, { memo, useCallback, useEffect } from 'react'
import ApplyBtn from '../../commons/Buttons/Apply/ApplyBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import emptyCart from '../../../assets/images/modal-cart-dummy.svg'
import {
  PlusCircleOutlined,
  CloseCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons'
import {
  faTrash,
  faHryvnia,
  faTrashAlt,
  faArrowLeft,
  faArrowRight,
  faCartArrowDown,
} from '@fortawesome/free-solid-svg-icons'
//////////////////////////////////////////////////

const Cart = memo(({
  cart,
  getCart,
  deleteCart,
  productsLength,
  totalProductsSum,
  updateProductInCart,
  deleteProductFromCart,
}) => {

  const minus = useCallback((id, count) => {
    if (count > 1) {
      updateProductInCart(id, --count)
    } else {
      updateProductInCart(id, 1)
    }
  }, [updateProductInCart])

  const plus = useCallback((id, count) => {
    updateProductInCart(id, ++count)
  }, [updateProductInCart])

  const deleteProduct = useCallback(productId => {
    deleteProductFromCart(productId)
  }, [deleteProductFromCart])

  const cartClear = useCallback(() => {
    deleteCart()
  }, [deleteCart])

  useEffect(() => {
    getCart()
  }, [getCart, updateProductInCart, plus, minus, deleteProduct, cartClear])

  return (
    <>
      <div className={styles.container}>
        <NavLink to='/home' className={styles.closeBtn}>
          <CloseCircleOutlined className={styles.icon}/>
        </NavLink>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <FontAwesomeIcon
              icon={faCartArrowDown}
              style={{ marginRight: '7px', color: '#EE7178' }}/>
            <span className={styles.tittle}>Корзина</span>
          </div>
          <div className={styles.cartClear}>
            <ApplyBtn
              icon={faTrashAlt}
              handleClick={cartClear}
              label='Очистити корзину'/>
          </div>
        </div>
        {productsLength !== 0 ?
          cart.map(cartItem =>
            <div key={cartItem.id} className={styles.itemContainer}>
              <NavLink
                className={styles.cartItem}
                to={'/productPage/' + cartItem.productId}
              >
                <img
                  alt='productImage'
                  className={styles.img}
                  src={`http://localhost:5000/${cartItem['Product.product_photo']}`}/>
                <span
                  className={styles.tittle}>{cartItem['Product.name']}</span>
                <span className={styles.size}>{cartItem.price} грн</span>
              </NavLink>
              <div className={styles.counter}>
                <div
                  onClick={() => minus(cartItem.productId, cartItem.count)}
                  className={cartItem.count > 1 ? styles.minus : styles.disable}
                >
                  <MinusCircleOutlined/></div>
                <div className={styles.count}><span>{cartItem.count}</span>
                </div>
                <div
                  className={styles.plus}
                  onClick={() => plus(cartItem.productId, cartItem.count)}
                >
                  <PlusCircleOutlined/></div>
              </div>
              <div className={styles.sum}>
                <span style={{
                  color: '#EE7178',
                  marginLeft: '7px',
                  marginRight: '7px',
                }}>= </span>
                {cartItem.sum}
                <FontAwesomeIcon
                  icon={faHryvnia}
                  style={{ marginLeft: '7px', color: '#EE7178' }}/>
              </div>
              <div
                className={styles.delete}
                onClick={() => deleteProduct(cartItem.productId)}
              >
                <FontAwesomeIcon icon={faTrash}/>
              </div>
            </div>,
          ) : <div style={{ height: '50%', width: '50%', margin: '0 auto' }}>
            <h3>Кошик порожній</h3>
            <p>Але це ніколи не пізно виправити :)</p>
            <img
              src={emptyCart}
              alt='emptyCart'
              className={styles.img}/>
          </div>}
        <div className={styles.totalGroup}>
          <div className={styles.totalProductsCount}>Всього
            товарів: <span> {productsLength} шт.</span></div>
          <div className={styles.totalSum}>Сума замовлення:
            <span
              style={{ marginLeft: '7px', color: 'grey' }}
            >{totalProductsSum}</span>
            <FontAwesomeIcon
              icon={faHryvnia}
              style={{ marginLeft: '7px', color: '#EE7178' }}/>
          </div>
        </div>
        <div className={styles.btnGroup}>
          <NavLink  to='/home' className={styles.goBack}>
            <ApplyBtn
              icon={faArrowLeft}
              label='Продовжити покупки'/>
          </NavLink>
          {productsLength !== 0 ?
            <NavLink to='/purchase' className={styles.order}>
              <ApplyBtn
                icon={faArrowRight}
                label='Замовити товари'/>
            </NavLink> : null}
        </div>
      </div>
    </>
  )
})

export default Cart
