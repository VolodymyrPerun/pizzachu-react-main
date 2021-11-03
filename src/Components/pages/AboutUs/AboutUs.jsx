import React from 'react'
import styles from './AboutUs.module.scss'
import aboutPagePhoto from '../../../assets/images/about.png'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
//////////////////////////////////////////////////

const AboutUs = () => {

  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <h2 className={styles.title}>Про нас</h2>
        <p className={styles.subtitle}>
          <span
            className={styles.logo}>P<span>i</span>zz<span>ac</span>hu</span> –
          доставка суші та піци у
          Львові
        </p>
        <LazyLoadImage  alt='img' effect='blur' src={aboutPagePhoto}/>
      </div>
      <div className={styles.line}/>
      <div className={styles.description}>
        <div className={styles.descriptionBlock}>
          <h3 className={styles.title}>Чому ми найкращі?</h3>
          <p className={styles.subtitle}>
            <span
              className={styles.logo}>P<span>i</span>zz<span>ac</span>hu</span> –
            лідер доставки суші та
            піци в нашому
            регіоні з 2021 року. Ми активно розширюємо свою мережу, аби якомога
            більше наших краян могли
            насолоджуватись смачними стравами від Pizzachu! Ми постійно працюємо
            над тим, щоб наші суші,
            роли, піца та інші страви були на найвищому кулінарному рівні!
            Авторські рецепти від бренд-шефа
            підкорили безліч животиків!
          </p>
        </div>
        <div className={styles.descriptionBlock}>
          <h3 className={styles.title}>«
            <span
              className={styles.logo}>P<span>i</span>zz<span>ac</span>hu</span>
            » - «онлайн-ресторан»
          </h3>
          <p className={styles.subtitle}>
            Це означає, що ми не пропонуємо фаст-фуд. Наші страви
            – ресторанної якості, якими Ви можете насолоджуватись вдома та на
            роботі! У нас функціонують 5
            кухонь у Львові – в якій би частині міста ви не знаходились, ми
            оперативно приготуємо та
            привеземо замовлення до <span>29 хвилин</span>!

            Ми використовуємо тільки якісні свіжі продукти та зручне упакування
            для страв.

            Замовлення приймаються <span>цілодобово без вихідних 24/7</span>!
          </p>
        </div>
        <div className={styles.descriptionBlock}>
          <h3 className={styles.title}>Переваги доставки суші та
            піци <span className={styles.logo}>P<span>i</span>zz<span>ac</span>hu</span>
          </h3>
          <p className={styles.subtitle}>
            Великі порції та широке меню на будь-який смак
            Швидка вчасна доставка в заявлені райони міста
            Незмінно свіжа та якісна продукція
            Ввічливий кваліфікований персонал
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
