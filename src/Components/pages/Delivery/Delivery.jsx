import React from 'react'
import { useTranslation } from 'react-i18next'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
//
import styles from './Delivery.module.scss'
//
import deliveryPagePhoto from '../../../assets/images/delivery.png'
//////////////////////////////////////////////////

const Delivery = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {t('Delivery and Payment').toUpperCase()}
      </h2>
      <LazyLoadImage alt='img' effect='blur' src={deliveryPagePhoto}/>
      <div className={styles.contacts}>
        <h3 className={styles.title}>{t('Did we miss').toUpperCase()}</h3>
        <p className={styles.subtitle}>{t('Points of 5%')}</p>
        <p className={styles.subtitle}>{t('Compensatory pizzas')}</p>
        <p className={styles.subtitle}>{t('For example')}</p>
        <p className={styles.subtitle}>{t('When ordering')}</p>
        <p className={styles.subtitle}>{t('Delivery time')}</p>
        <p className={styles.subtitle}>{t('When ordering from')}</p>
      </div>
    </div>
  );
}

export default Delivery
