import React from 'react'
import styles from './AboutUs.module.scss'
import { useTranslation } from 'react-i18next'
import aboutPagePhoto from '../../../assets/images/about.png'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
//////////////////////////////////////////////////

const AboutUs = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <h2 className={styles.title}>{t('About Us')}</h2>
        <p className={styles.subtitle}>
          <span
            className={styles.logo}>
            P<span>i</span>zz<span>ac</span>hu</span>
          {t('delivery')}
        </p>
        <LazyLoadImage  alt='img' effect='blur' src={aboutPagePhoto}/>
      </div>
      <div className={styles.line}/>
      <div className={styles.description}>
        <div className={styles.descriptionBlock}>
          <h3 className={styles.title}>{t('Why are we the best?')}</h3>
          <p className={styles.subtitle}>
            <span
              className={styles.logo}>P<span>i</span>zz<span>ac</span>hu</span>
            {t('Lead of delivery')}
          </p>
        </div>
        <div className={styles.descriptionBlock}>
          <h3 className={styles.title}>«
            <span
              className={styles.logo}> P<span>i</span>zz<span>ac</span>hu</span>
            » - «{t('online restaurant')}»
          </h3>
          <p className={styles.subtitle}>
            {t('Its means')}
            <span>{t('29 minutes')}</span>!
            {t('We use')}
           <span>{t('round the clock')}</span>!
          </p>
        </div>
        <div className={styles.descriptionBlock}>
          <h3 className={styles.title}>
            {t('Advantages of sushi and pizza delivery')}
            <span className={styles.logo}>
              P<span>i</span>zz<span>ac</span>hu
            </span>
          </h3>
          <p className={styles.subtitle}>
            {t('Large Portions')}<br/>
            {t('Fast timely delivery')}<br/>
            {t('Invariably fresh and high quality products')}<br/>
            {t('Polite qualified staff')}<br/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
