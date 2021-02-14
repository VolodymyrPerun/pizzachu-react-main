import React from 'react';
import styles from './Promotions.module.scss';
import promoLatePhoto from "../../../assets/images/prom_late.png";
import promoBirthPhoto from "../../../assets/images/prom_birth.png";
import promoBonusPhoto from "../../../assets/images/prom_bonus.png";


const Promotions = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.aside}>
                    <img alt='img' src={promoLatePhoto}/>
                </div>
                <div className={styles.line}/>
                <div className={styles.description}>
                    <div className={styles.descriptionBlock}>
                        <h3 className={styles.title}>Подарунок за спізнення</h3>
                        <p className={styles.subtitle}>
                            Доставляємо до 29 хвилин! За спізнення кур’єра даруємо рол або піцу:
                        </p>
                        <p className={styles.subtitle}>
                            <span> - Рол Сирний</span>
                        </p>
                        <p className={styles.subtitle}>
                            <span> - Піца Студентська (22 см)</span>
                        </p>
                        <p className={styles.subtitle}>
                            Отримати подарунок можна при наступному замовленні до 28 днів.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.aside}>
                    <img alt='img' src={promoBirthPhoto}/>
                </div>
                <div className={styles.line}/>
                <div className={styles.description}>
                    <div className={styles.descriptionBlock}>
                        <h3 className={styles.title}>Ваш День Народження</h3>
                        <p className={styles.subtitle}>
                            :Обирайте для себе у подарунок піцу або рол
                        </p>
                        <p className={styles.subtitle}>
                            <span>Рол Сирний - </span>
                        </p>
                        <p className={styles.subtitle}>
                            <span>Піца Студентська (30 см) - </span>
                        </p>
                        <p className={styles.subtitle}>
                            Для отримання подарунка потрібно пред’явити кур’єру документ, який засвідчує дату Вашого
                            народження
                        </p>
                        <p className={styles.subtitle}>
                            Термін дії подарунка – День народження плюс один день до та після свята
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.aside}>
                    <img alt='img' src={promoBonusPhoto}/>
                </div>
                <div className={styles.line}/>
                <div className={styles.description}>
                    <div className={styles.descriptionBlock}>
                        <h3 className={styles.title}>Бонусна Система Лояльності</h3>
                        <p className={styles.subtitle}>
                            На Ваш баланс нараховуються бали в розмірі 5% від суми кожного замовлення. Бонусний рахунок
                            закріплений за номером телефону. Збирайте бали та отримуйте частково оплачене або цілком
                            безкоштовне замовлення протягом 30 днів.
                        </p>
                        <p className={styles.subtitle}>
                            Умови використання:
                        </p>
                        <p className={styles.subtitle}>
                            <span> - Рол Сирний</span>
                        </p>
                        <p className={styles.subtitle}>
                            <span> - 1 бонус – 1 грн</span>
                        </p>
                        <p className={styles.subtitle}>
                            <span> - Бонуси дійсні протягом 30 календарних днів</span>
                        </p>
                        <p className={styles.subtitle}>
                            <span> - Бонуси можуть не нараховуватися за деякі спец. пропозиції</span>
                        </p>
                        <p className={styles.subtitle}>
                            Бонуси нараховуються на мобільний номер покупця на загальну суму чека Smaki maki.
                        </p>
                        <p className={styles.subtitle}>
                            Учасник Програми не може передавати накопичені бонуси іншій особі, в тому числі іншому
                            учаснику Програми.
                        </p>
                        <p className={styles.subtitle}>
                            Накопичені бонуси не підлягають грошовому відшкодуванню.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Promotions;
