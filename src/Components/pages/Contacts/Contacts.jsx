import React from 'react'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faViber, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faAt, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
//
import styles from './Contacts.module.scss'
import contactsPagePhoto from '../../../assets/images/contacts.png'
//////////////////////////////////////////////////

const Contacts = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('Contacts')}</h2>
      <p className={styles.subtitle}>
        <span
          className={styles.logo}>P<span>i</span>zz<span>ac</span>hu </span>
        – {t('Our contacts').toLowerCase()}
      </p>
      <img alt='img' className={styles.img} src={contactsPagePhoto}/>
      <div className={styles.contacts}>
        <h3 className={styles.title}>{t('Cooperation and partnership')}:</h3>
        <a href='tel:+380985845196' className={styles.subtitle}
           rel='noopener noreferrer'>
          <FontAwesomeIcon
            style={{ marginRight: '7px', color: '#EE7178' }}
            icon={faPhoneAlt}/>
          <FontAwesomeIcon
            style={{ marginRight: '7px', color: '#EE7178' }}
            icon={faViber}/>
          <FontAwesomeIcon
            style={{ marginRight: '7px', color: '#EE7178' }}
            icon={faWhatsapp}/>+380985845196
        </a>
        <a href='tel:+380977377403' className={styles.subtitle}
           rel='noopener noreferrer'>
          <FontAwesomeIcon
            style={{ marginRight: '7px', color: '#EE7178' }}
            icon={faPhone}/>+380977377403
        </a>
        <a href='mailto:volodimirperun007@gmail.com'
           className={styles.subtitle}>
          <FontAwesomeIcon
            style={{ marginRight: '7px', color: '#EE7178' }}
            icon={faAt}/>
          volodimirperun007@gmail.com
        </a>
      </div>
    </div>
  )
}

export default Contacts
