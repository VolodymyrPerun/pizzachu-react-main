import React from 'react'
import i18next from 'i18next'
import { shuffle } from 'lodash'
import { NavLink } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
//
import styles from '../ProductPage.module.scss'
//
import { TextComponent } from '../TextComponent'
import { PRODUCT_TYPE, PRODUCT_SECTION } from '../../../../constants'
import noPhoto from '../../../../assets/images/no-aveliable-image.png'
//////////////////////////////////////////////////

const ProductOffer = ({ products }) =>  (
  <>
    <p className={styles.moreProductsTitle}>
      {`${i18next.t('We also offer')}: `}
    </p>
    <div className={styles.promoContainer}>
      {
        shuffle(products).map((product, i) => {
          if (product && i <= 3) {
            return <NavLink
              key={product.productId}
              className={styles.promoCard}
              to={'/productPage/' + product.productId}
            >
              {
                product.product_photo
                  ? <img
                    alt='product'
                    className={styles.image}
                    src={`http://localhost:5000/${product.product_photo}`}
                  />
                  : <LazyLoadImage alt='product' effect='blur' src={noPhoto}/>
              }
              {
                product.section_id !== PRODUCT_SECTION.DRINKS
                  ? <TextComponent
                    uom='g'
                    label='Weight'
                    value={product.weight}
                    className={styles.weight}
                  />
                  : <TextComponent
                    uom='l'
                    label='Volume'
                    value={product.weight}
                    className={styles.weight}
                  />
              }
              {
                product.type_id === PRODUCT_TYPE.PIZZA &&
                product['ProductSize.size'] &&
                <TextComponent
                  uom='cm'
                  label='Size'
                  className={styles.weight}
                  value={product['ProductSize.size']}
                />
              }
              <p className={styles.title}>{product.name}</p>
              {
                product.description &&
                <TextComponent
                  value={product.description}
                  className={styles.description}
                />
              }
              <TextComponent
                uom='UAH'
                label='Price'
                value={product.price}
                className={styles.price}
              />
            </NavLink>
          } else {
            return null
          }
        })
      }
    </div>
  </>
)

export default ProductOffer
