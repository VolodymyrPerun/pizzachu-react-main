import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'
//
import styles from './ProductsCard.module.scss'
//
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
  const { t } = useTranslation()

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
                : <span className={styles.image}>
                  <LazyLoadImage
                    alt='product'
                    effect='blur'
                    src={noPhoto}
                  />
                </span>
            }
            <div className={styles.weight}>
              {
                section_id !== PRODUCT_SECTION.DRINKS
                  ? <p className={styles.weight}>
                    {`${t('Weight')}: `}<span>{weight}{` ${t('g')}`}</span>
                  </p>
                  : <p className={styles.weight}>
                    {`${t('Volume')}: `}<span>{weight}{` ${t('l')}`}</span>
                  </p>
              }
              {
                type_id === PRODUCT_TYPE.PIZZA && !!rest['ProductSize.size'] &&
                <p>
                  {`${t('Size')}: `}
                  <span>{rest['ProductSize.size']}</span>
                  {` ${t('cm')}`}
                </p>
              }
            </div>
            <p className={styles.title}>{name}</p>
            {
              !!description && <p className={styles.description}>{description}</p>
            }
            <p className={styles.price}>
              {`${t('Price')}: `}<span>{price}</span>{` ${t('UAH')}`}
            </p>
          </NavLink>
          <div className={styles.btn}>
            <AddTo
              to='/cart'
              label={t('Buy')}
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
