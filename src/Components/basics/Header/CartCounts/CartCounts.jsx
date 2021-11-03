import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styles from './CartCounts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faHryvnia } from '@fortawesome/free-solid-svg-icons'
//////////////////////////////////////////////////

const CartCounts = () => {
  const { productsLength, totalProductsSum } = useSelector(({ cart }) => (
    {
      productsLength: cart.productsLength,
      totalProductsSum: (cart.totalProductsSum)
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.'),
    }))

  return (
    <NavLink to='/cart' title='Перейти в корзину' className={styles.container}>
      <div style={{ fontSize: '14px' }}>
        {totalProductsSum}
        <FontAwesomeIcon
          icon={faHryvnia}
          style={{ marginLeft: '7px', color: 'azure' }}/>
      </div>
      <div style={{ fontSize: '14px' }}>
        <FontAwesomeIcon
          icon={faCartArrowDown}
          style={{ marginRight: '7px', color: 'azure' }}/>
        {productsLength}
      </div>
    </NavLink>
  )
}

export default CartCounts
