import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
//
import styles from './ProductsCard.module.scss'
import AddTo from '../../../commons/Buttons/AddTo/AddTo'
import { PRODUCT_TYPE, PRODUCT_SECTION } from '../../../../constants'
import noPhoto from '../../../../assets/images/no-aveliable-image.png'
//////////////////////////////////////////////////

const ProductsCard = ({
  name,
  cart,
  price,
  weight,
  type_id,
  getCart,
  productId,
  section_id,
  isFetching,
  description,
  product_photo,
  addProductToCart,
  ...rest
}) => {

  useEffect(() => {
    let cleanupFunction = false
    try {
      (!cleanupFunction) &&
      getCart()
    } catch (e) {
      console.error(e)
    }

    return (() => {
        cleanupFunction = true
        getCart()
      }
    )
  }, [getCart, addProductToCart, productId])

  let handleClick = (id, count) => {
    addProductToCart(id, count)
  }

  return (
    <>
      {
        <div className={styles.container}>
          <NavLink className={styles.card} to={'/productPage/' + productId}>
            {
              product_photo
                ? <img
                  alt='product'
                  className={styles.image}
                  src={`http://localhost:5000/${product_photo}`}
                />
                : <img src={noPhoto} alt='product' className={styles.image}/>
            }
            <div className={styles.weight}>
              {
                section_id !== PRODUCT_SECTION.DRINKS
                  ? <p>Вага: <span>{weight}</span> гр</p>
                  : <p>Об'єм: <span>{weight}</span> л</p>
              }
              {
                type_id === PRODUCT_TYPE.PIZZA
                  ? <p>Розмір: <span>{rest['ProductSize.size']}</span> см</p>
                  : <p style={{ color: 'transparent', visibility: 'hidden' }}>.</p>
              }
            </div>
            <p className={styles.title}>{name}</p>
            {
              description
                ? <p className={styles.description}>{description}</p>
                : <p
                  className={styles.description}
                  style={{ color: 'transparent', visibility: 'hidden' }}
                  >.</p>
            }
            <p className={styles.price}>Ціна: <span>{price}</span> грн.</p>
          </NavLink>
          <div className={styles.btn}>
            <AddTo
              to='/cart'
              label='Купити'
              icon={faCartPlus}
              handleClick={() => handleClick(productId, 1)}
            />
          </div>
        </div>
      }
    </>
  )
}

ProductsCard.propTypes = {
  rest: PropTypes.array,
  name: PropTypes.string,
  price: PropTypes.number,
  weight: PropTypes.number,
  size_id: PropTypes.number,
  isFetching: PropTypes.bool,
  productId: PropTypes.number,
  section_id: PropTypes.number,
  description: PropTypes.string,
  setProductSize: PropTypes.func,
  product_photo: PropTypes.string,
}

export default ProductsCard
