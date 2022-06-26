import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useEffect, useState, useCallback } from 'react'
//
import styles from './PromoBlock.module.scss'
import Timer from '../../../commons/Timer/Timer'
import noPhoto from '../../../../assets/images/no-aveliable-image.png'
import {
  PRODUCT_TYPE,
  SIZES_DEFAULT,
  PRODUCT_SECTION,
} from '../../../../constants'
//////////////////////////////////////////////////

const PromoBlock = memo(({ products, getAllPromoProducts }) => {
  const { t } = useTranslation()
  let [type, setType] = useState(PRODUCT_TYPE.PIZZA)

  useCallback(setTimeout(() => {
    setType(type = PRODUCT_TYPE.PIZZA)
  }, 17000), [type])

  useCallback(setTimeout(() => {
    setType(type = PRODUCT_TYPE.SUSHI_AND_ROLES)
  }, 10000), [type])

  useEffect(() => {
    getAllPromoProducts(type, PRODUCT_SECTION.PROMOTIONAL, SIZES_DEFAULT.XL)
  }, [type, getAllPromoProducts])

  return <div className={styles.container}>
    <div>
      <h2>{t('Promotion of the week')}!</h2>
      <h3>{t('It remains until')}: </h3>
      <Timer/>
    </div>
    <p className={styles.delivery}>
          <span>
            <FontAwesomeIcon
              icon={faTruck}
              style={{ marginRight: '7px', color: '#EE7178' }}
            />
            {`${t('It remains until')} `}
            <span style={{ color: '#EE7178' }}>29</span>
            {` ${t('minutes or give a pizza')}`}
          </span>
    </p>
    {
      <div className={styles.promoContainer}>
        {
          products.map(
            (prod, i) => (prod && i <= 1)
              ? <NavLink
                key={prod.productId}
                className={styles.promoCard}
                to={'/productPage/' + prod.productId}
              >
                <div className={styles.promoLabel}>
                  {type === PRODUCT_TYPE.PIZZA ? '-50%' : `-110${t('UAH')}`}
                </div>
                {
                  prod.product_photo
                    ? <img
                      alt='product'
                      className={styles.image}
                      src={`http://localhost:5000/${prod.product_photo}`}
                    />
                    : <img
                      alt='product'
                      src={noPhoto}
                      className={styles.image}
                    />
                }
                {
                  prod.section_id !== PRODUCT_SECTION.DRINKS
                    ? <p className={styles.weight}>
                      {`${t('Weight')}: `}
                      <span>
                        {prod.weight}{` ${t('g')}`}
                      </span>
                    </p>
                    : <p className={styles.weight}>
                      {`${t('Volume')}: `}
                      <span>
                        {prod.volume}{` ${t('l')}`}
                      </span>
                    </p>
                }
                <p className={styles.title}>{prod.name}</p>
                <p className={styles.price}>
                  {`${t('Price')}: `}
                  <span>{prod.price}</span>
                  {` ${t('UAH')}`}
                </p>
              </NavLink>
              : null
          )
        }
      </div>
    }
  </div>
})

export default PromoBlock
