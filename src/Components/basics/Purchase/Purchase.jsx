import React, { memo, useEffect } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import styles from './Purchase.module.scss'
import PurchaseForm from './PurchaseForm/PurchaseForm'
import { CloseCircleOutlined } from '@ant-design/icons'
import ApplyBtn from '../../commons/Buttons/Apply/ApplyBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OrderMessage from '../../../containers/OrderMessage/OrderMessage'
import {
  faHryvnia,
  faArrowLeft,
  faMoneyCheck,
  faAddressCard,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'
//////////////////////////////////////////////////

const Purchase = memo(({
  me,
  cart,
  reset,
  error,
  isAuth,
  getCart,
  pristine,
  deleteCart,
  submitting,
  addPurchase,
  errorMessage,
  productsLength,
  totalProductsSum,
  isPurchaseSuccess,
}) => {

  const onSubmit = formData => {
    addPurchase(
      formData.name,
      formData.city,
      formData.house,
      formData.floor,
      formData.email,
      formData.phone,
      formData.street,
      formData.entrance,
      formData.apartment,
    )
    deleteCart()
    localStorage.setItem('tempId', '')
  }

  useEffect(() => {
    getCart()
  }, [getCart, deleteCart, addPurchase])

  if (!cart) {
    return <Redirect to='/home'/>
  }

  return (
    <>
      {!isPurchaseSuccess
        ? <div className={styles.container}>
          <NavLink to='/cart' className={styles.closeBtn}>
            <CloseCircleOutlined className={styles.icon}/>
          </NavLink>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <FontAwesomeIcon
                icon={faMoneyCheck}
                style={{ marginRight: '7px', color: '#EE7178' }}/>
              <span className={styles.tittle}>Оформити замовлення</span>
            </div>
          </div>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ marginRight: '7px', color: '#EE7178' }}/>
              <span className={styles.tittle}>
                Ваше замовлення
                </span>
            </div>
          </div>
          <div className={styles.wrapper}>
            {cart && cart.map(cartItem =>
              <div key={cartItem.id} className={styles.itemContainer}>
                <NavLink
                  className={styles.cartItem}
                  to={'/productPage/' + cartItem.productId}>
                  <img
                    alt='productImage'
                    className={styles.img}
                    src={`http://localhost:5000/${cartItem['Product.product_photo']}`}/>
                  <span className={styles.tittle}>
                    {cartItem['Product.name']}
                  </span>
                  <span className={styles.size}>{cartItem.price} грн</span>
                </NavLink>
                <NavLink
                  className={styles.counter}
                  to={'/productPage/' + cartItem.productId}>
                  <div className={styles.count}><span>{cartItem.count} шт</span>
                  </div>
                </NavLink>
                <NavLink
                  className={styles.sum}
                  to={'/productPage/' + cartItem.productId}>
                  <span
                    style={{
                      color: '#EE7178',
                      marginLeft: '7px',
                      marginRight: '7px',
                    }}>= </span>
                  {cartItem.sum}
                  <FontAwesomeIcon
                    style={{ marginLeft: '7px', color: '#EE7178' }}
                    icon={faHryvnia}/>
                </NavLink>
              </div>,
            )}
            <div className={styles.totalGroup}>
              <div className={styles.totalProductsCount}>Всього
                товарів: <span> {productsLength} шт.</span></div>
              <div className={styles.totalSum}>Сума замовлення: <span
                style={{
                  color: 'grey',
                  marginLeft: '7px',
                }}>{totalProductsSum}</span>
                <FontAwesomeIcon
                  icon={faHryvnia}
                  style={{ marginLeft: '7px', color: '#EE7178' }}/>
              </div>
            </div>
          </div>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <FontAwesomeIcon
                icon={faAddressCard}
                style={{ marginRight: '7px', color: '#EE7178' }}/>
              <span className={styles.tittle}>Персональні дані</span>
            </div>
          </div>
          <PurchaseForm
            me={me}
            reset={reset}
            error={error}
            isAuth={isAuth}
            pristine={pristine}
            onSubmit={onSubmit}
            submitting={submitting}
            errorMessage={errorMessage}/>
          <div className={styles.btnGroup}>
            <NavLink to='/home' className={styles.goBack}>
              <ApplyBtn
                icon={faArrowLeft}
                label='Продовжити покупки'/>
            </NavLink>
          </div>
        </div>
        : <OrderMessage/>}
    </>
  )
})

export default Purchase
