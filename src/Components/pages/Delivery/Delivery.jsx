import React from 'react'
import styles from './Delivery.module.scss'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import deliveryPagePhoto from '../../../assets/images/delivery.png'
//////////////////////////////////////////////////

const Delivery = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>ДОСТАВКА І ОПЛАТА</h2>
    <LazyLoadImage alt='img' effect='blur' src={deliveryPagePhoto}/>
    <div className={styles.contacts}>
      <h3 className={styles.title}>МИ НЕ ВСТИГЛИ ЗА 29 ХВИЛИН?</h3>
      <p className={styles.subtitle}>
        На Ваш баланс нараховуються бали в розмірі 5% від суми кожного
        замовлення. Бонусний рахунок
        закріплений за номером телефону. Збирайте бали та отримуйте частково
        оплачене або цілком
        безкоштовне замовлення протягом 30 днів.
      </p>
      <p className={styles.subtitle}>
        Компенсаційні піца та рол змінюються залежно від дня тижня. Весь список
        страв представлений внизу
        сторінки.
      </p>
      <p className={styles.subtitle}>
        Наприклад, скориставшись компенсацією у вівторок Ви отримаєте піцу
        Корлеоне або рол Така.
      </p>
      <p className={styles.subtitle}>
        *При замовлені на суму від 800грн до 999грн час доставки збільшується на
        10хв для відповідної зони.
      </p>
      <p className={styles.subtitle}>
        *Час доставки залежить від ЗАГАЛЬНОЇ суми замовлення (БЕЗ урахування
        знижок, акцій тощо).
      </p>
      <p className={styles.subtitle}>
        *При замовленні від 1000грн час доставки Вам озвучить оператор.
      </p>
    </div>
  </div>
)

export default Delivery
