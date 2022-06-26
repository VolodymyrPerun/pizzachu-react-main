import React from 'react'
import styles from './Promotions.module.scss'
import { useTranslation } from 'react-i18next'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
//
import promoLatePhoto from '../../../assets/images/prom_late.png'
import promoBirthPhoto from '../../../assets/images/prom_birth.png'
import promoBonusPhoto from '../../../assets/images/prom_bonus.png'
//////////////////////////////////////////////////

const Promotions = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.container}>
        <div className={styles.aside}>
          <LazyLoadImage alt='img' effect='blur' src={promoLatePhoto}/>
        </div>
        <div className={styles.line}/>
        <div className={styles.description}>
          <div className={styles.descriptionBlock}>
            <h3 className={styles.title}>{t('A gift for being late')}</h3>
            <p className={styles.subtitle}>{t('We deliver up to 29 minutes')}</p>
            <p className={styles.subtitle}>
              <span> - {t('Cheese roll')}</span>
            </p>
            <p className={styles.subtitle}>
              <span> - {`${t('Student Pizza')} 22 ${t('cm')}`}</span>
            </p>
            <p className={styles.subtitle}>{t('You can receive a gift')}</p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.aside}>
          <LazyLoadImage alt='img' effect='blur' src={promoBirthPhoto}/>
        </div>
        <div className={styles.line}/>
        <div className={styles.description}>
          <div className={styles.descriptionBlock}>
            <h3 className={styles.title}>{t('Your Birthday')}</h3>
            <p className={styles.subtitle}>
              :{t('Choose a pizza or roll as a gift')}
            </p>
            <p className={styles.subtitle}>
              <span>{t('Cheese roll')} - </span>
            </p>
            <p className={styles.subtitle}>
              <span>{`${t('Student Pizza')} 30 ${t('cm')}`} - </span>
            </p>
            <p className={styles.subtitle}>{t('To receive a gift')}</p>
            <p className={styles.subtitle}>{t('The term of the gift')}</p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.aside}>
          <LazyLoadImage alt='img' effect='blur' src={promoBonusPhoto}/>
        </div>
        <div className={styles.line}/>
        <div className={styles.description}>
          <div className={styles.descriptionBlock}>
            <h3 className={styles.title}>{t('Loyalty Bonus System')}</h3>
            <p className={styles.subtitle}>{t('Points of 5%')}</p>
            <p className={styles.subtitle}>{t('Terms of use')}:</p>
            <p className={styles.subtitle}>
              <span> - {t('Cheese roll')}</span>
            </p>
            <p className={styles.subtitle}>
              <span> - 1 {t('bonus')} – 1 {t('UAH')}</span>
            </p>
            <p className={styles.subtitle}>
              <span> - {t('Bonuses are valid for 30 calendar days')}</span>
            </p>
            <p className={styles.subtitle}>
              <span>
                - {t('Bonuses may not be accrued for some specials offers')}
              </span>
            </p>
            <p className={styles.subtitle}>{t('Bonuses are credited')}</p>
            <p className={styles.subtitle}>{t('The Program Participant')}</p>
            <p className={styles.subtitle}>{t('Accumulated bonuses')}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Promotions
