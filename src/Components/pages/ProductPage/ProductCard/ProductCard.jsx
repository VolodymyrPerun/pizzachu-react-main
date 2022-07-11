import React from 'react'
import i18next from 'i18next'
import { NavLink } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {
  CloseCircleOutlined,
} from '@ant-design/icons'
import {
  faInfo,
  faTruck,
  faCartPlus,
  faMoneyBillWave,
  faBalanceScaleLeft,
  faPrescriptionBottle
} from '@fortawesome/free-solid-svg-icons'
//
import styles from '../ProductPage.module.scss'
//
import { TextComponent } from '../TextComponent'
import AddTo from '../../../commons/Buttons/AddTo/AddTo'
import sizeIcon from '../../../../assets/images/diameter-icon.png'
import { PRODUCT_TYPE, PRODUCT_SECTION } from '../../../../constants'
import noPhoto from '../../../../assets/images/no-aveliable-image.png'
//////////////////////////////////////////////////

const ProductCard = ({ product, handleClick }) =>  (
    <div className={styles.card}>
      <NavLink to='/home' className={styles.closeBtn}>
        <CloseCircleOutlined className={styles.icon}/>
      </NavLink>
      {
        product.product_photo
          ? <img
            alt='product'
            className={styles.image}
            src={`http://localhost:5000/${product.product_photo}`}
          />
          : <span className={styles.image}>
            <LazyLoadImage
              alt='product'
              effect='blur'
              src={noPhoto}
            />
          </span>
      }
      <p className={styles.title}>{product.name}</p>
      {
        product.description &&
        <TextComponent
          icon={faInfo}
          value={product.description}
          className={styles.description}
          iconStyle={{ fontSize: '18px' }}
        />
      }
      <div className={styles.attributes}>
        <TextComponent
          uom='UAH'
          label='Price'
          value={product.price}
          icon={faMoneyBillWave}
          className={styles.price}
          iconStyle={{ marginRight: '10px' }}
        />
        {
          product.section_id !== PRODUCT_SECTION.DRINKS
            ? <TextComponent
              uom='g'
              label='Weight'
              value={product.weight}
              icon={faBalanceScaleLeft}
              className={styles.weight}
            />
            : <TextComponent
              uom='l'
              label='Volume'
              value={product.weight}
              className={styles.weight}
              icon={faPrescriptionBottle}
            />
        }
        {
          product.type_id === PRODUCT_TYPE.PIZZA &&
          <TextComponent
            uom='cm'
            label='Size'
            imgSrc={sizeIcon}
            className={styles.weight}
            imgClassName={styles.image}
            value={product['ProductSize.size']}
          />
        }
      </div>
      <TextComponent
        value='29'
        icon={faTruck}
        className={styles.delivery}
        uom='minutes or give a pizza'
        simpleLabel='We will deliver to'
        spanStyle={{ color: '#EE7178' }}
      />
      <div className={styles.btn}>
        <AddTo
          to='/cart'
          label={i18next.t('Buy')}
          icon={faCartPlus}
          handleClick={() => handleClick(product.productId, 1)}
        />
      </div>
    </div>
  )

export default ProductCard
