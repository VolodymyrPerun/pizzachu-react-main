import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
//////////////////////////////////////////////////

const resources = {
  ua: {
    translation: {
     // 'cheapToExpensive': 'від дешевих до дорогих',
      'l': 'л',
      'g': 'гр',
      'cm': 'см',
      'pcs': 'шт. ',
      'UAH': ' грн ',
      'Login': 'Вхід',
      'Buy': 'Купити',
      'Price': 'Ціна',
      'bonus': 'бонус',
      'Weight': 'Вага',
      'Size': 'Розмір',
      'hours': 'години',
      'Main': 'Головна',
      'Logout': 'Вихід',
      'Cart': 'Корзина',
      'Volume': "Об'єм",
      'Search': 'Пошук',
      'ERROR': 'ПОМИЛКА',
      'Service': 'Сервіс',
      'seconds': 'секунди',
      'minutes': 'хвилини',
      'Promotions': 'Акції',
      'About Us': 'Про нас',
      'symbols': 'символів',
      'Delivery': 'Доставка',
      'Contacts': 'Контакти',
      "Time's up": 'Час минув',
      '29 minutes': '29 хвилин',
      'Sort by': 'Сортувати по',
      'My Profile': 'Мій профіль',
      'Cheese roll': 'Рол Сирний',
      'My Orders': 'Мої замовлення',
      'Empty Cart': 'Кошик порожній',
      'Go back': 'Повернутись назад',
      'Our contacts': 'Наші контакти ',
      'Order goods': 'Замовити товари',
      'Clear Cart': 'Очистити корзину',
      'Average score': 'Середня оцінка',
      'Go to cart': 'Перейти в корзину',
      'Order amount': 'Сума замовлення: ',
      'Student Pizza': 'Піца Студентська',
      'Rate the product': 'Оцініть товар',
      'We also offer': 'Пропонуємо також',
      'We will deliver to': 'Доставимо до',
      'Forgot Password?': 'Забули пароль?',
      'Terms of use': ' Умови використання',
      'Total products': ' Всього товарів: ',
      'Change Password?': 'Змінити пароль?',
      'online restaurant': 'онлайн-ресторан',
      'Your Birthday': 'Ваш День Народження',
      'Promotion of the week': 'Акція тижня',
      'Product reviews': 'Відгуки про товар',
      'Continue shopping': 'Продовжити покупки',
      'Minimum quantity': 'Мінімальна кількість',
      'Maximum quantity': 'Максимальна кількість',
      'Why are we the best?': 'Чому ми найкращі?',
      'Delivery and Payment': 'Доставка і оплата',
      'Did we miss': 'Ми не встигли за 29 хвилин?',
      'Go to registration': 'Перейти до реєстрації',
      'delivery': ' – доставка суші та піци у Львові',
      'It remains until': 'До кінця акції залишилось',
      'A gift for being late': 'Подарунок за спізнення',
      'round the clock': 'цілодобово без вихідних 24/7',
      'select a sort method': 'оберіть метод сортування',
      'Loyalty Bonus System': 'Бонусна Система Лояльності',
      'Cooperation and partnership': 'Співпраця та партнерство',
      'This field cannot be empty': 'Це поле не може бути порожнім',
      'Incorrectly entered email': 'Невірно введений емейл, приклад',
      'Polite qualified staff': '- Ввічливий кваліфікований персонал',
      'Large Portions': '- Великі порції та широке меню на будь-який смак',
      'But never too late to fix it': 'Але це ніколи не пізно виправити :)',
      'minutes or give a pizza': 'хвилин або даруємо піцу / рол за спізнення',
      'You have not reached the required age': 'Ви не досягли необхідного віку',
      'Well stop it': 'Та ну перестаньте, люди як правило стільки не живуть ;)',
      'Fast timely delivery': '- Швидка вчасна доставка в заявлені райони міста',
      'Advantages of sushi and pizza delivery': 'Переваги доставки суші та піци ',
      'Choose a pizza or roll as a gift': 'Обирайте для себе у подарунок піцу або рол',
      'Accumulated bonuses': 'Накопичені бонуси не підлягають грошовому відшкодуванню.',
      'Invariably fresh and high quality products': '- Незмінно свіжа та якісна продукція',
      'Bonuses are valid for 30 calendar days': 'Бонуси дійсні протягом 30 календарних днів',
      'The field must contain only numbers above 0': 'Поле повинно містити лише цифри вище 0',
      'When ordering from': '*При замовленні від 1000грн час доставки Вам озвучить оператор.',
      'You can receive a gift': 'Отримати подарунок можна при наступному замовленні до 28 днів.',
      'If you are not registered': 'Якщо ви ще не зареєстровані, то спочатку слід зареєструватись',
      'The term of the gift': 'Термін дії подарунка – День народження плюс один день до та післ свята',
      'We deliver up to 29 minutes': 'Доставляємо до 29 хвилин! За спізнення кур’єра даруємо рол або піцу:',
      'Bonuses are credited': 'Бонуси нараховуються на мобільний номер покупця на загальну суму чека Pizzachu.',
      'For example': ' Наприклад, скориставшись компенсацією у вівторок Ви отримаєте піцу Корлеоне або рол Така.',
      'Delivery time': '*Час доставки залежить від ЗАГАЛЬНОЇ суми замовлення (БЕЗ урахування знижок, акцій тощо).',
      'Bonuses may not be accrued for some specials offers': 'Бонуси можуть не нараховуватися за деякі спец. пропозиції',
      'We use': ' Ми використовуємо тільки якісні свіжі продукти та зручне упакування для страв. Замовлення приймаються ',
      'When ordering': '*При замовлені на суму від 800грн до 999грн час доставки збільшується на 10хв для відповідної зони.',
      'To receive a gift': 'Для отримання подарунка потрібно пред’явити кур’єру документ, який засвідчує дату Вашого народження',
      'The password must contain':
        'Пароль повинен містити 8 символів, включаючи одну велику літеру, одну цифру, та один спеціальний символ',
      'Compensatory pizzas':
        ' Компенсаційні піца та рол змінюються залежно від дня тижня. Весь список страв представлений внизу сторінки.',
      'Incorrectly entered phone number format':
        'Невірно введений номер телефону, поле повинно містити лише цифри i бути у форматі',
      'The Program Participant':
        'Учасник Програми не може передавати накопичені бонуси іншій особі, в тому числі іншому учаснику Програми.',
      'Points of 5%':
        'На Ваш баланс нараховуються бали в розмірі 5% від суми кожного замовлення. Бонусний рахунок закріплений за номером телефону. Збирайте бали та отримуйте частково оплачене або цілком безкоштовне замовлення протягом 30 днів.',
      'Its means':
        'Це означає, що ми не пропонуємо фаст-фуд. Наші страви – ресторанної якості, якими Ви можете насолоджуватись вдома та на роботі! У нас функціонують 5 кухонь у Львові – в якій би частині міста ви не знаходились, ми оперативно приготуємо та привеземо замовлення до ',
      'Lead of delivery':
        '– лідер доставки суші та піци в нашому регіоні з 2021 року. Ми активно розширюємо свою мережу, аби якомога більше наших краян могли насолоджуватись смачними стравами від Pizzachu! Ми постійно працюємо над тим, щоб наші суші, роли, піца та інші страви були на найвищому кулінарному рівні! Авторські рецепти від бренд-шефа підкорили безліч животиків!',
    },
  },
  en: {
    translation: {
      cheapToExpensive: 'cheap to expensive',
      'g': 'g',
      'l': 'l',
      'cm': 'cm',
      'Buy': 'Buy',
      'UAH': ' UAH ',
      'pcs': 'pcs. ',
      'Main': 'Main',
      'Cart': 'Cart',
      'Size': 'Size',
      'hours': 'hours',
      'Price': 'Price',
      'Login': 'Login',
      'bonus': 'bonus',
      'ERROR': 'ERROR',
      'Weight': 'Weigh',
      'Volume': 'Volume',
      'Logout': 'Logout',
      'Search': 'Search',
      'Sort by': 'Sort by',
      'seconds': 'seconds',
      'Go back': 'Go back',
      'minutes': 'minutes',
      'Service': 'Service',
      'symbols': 'symbols',
      'About Us': 'About Us',
      'Delivery': 'Delivery',
      'Contacts': 'Contacts',
      'My Orders': 'My Orders',
      "Time's up": "Time's up",
      'Promotions': 'Promotions',
      'My Profile': 'My Profile',
      '29 minutes': '29 minutes',
      'Go to cart': 'Go to cart',
      'Clear Cart': 'Clear Cart',
      'Cheese roll': 'Cheese roll',
      'Order goods': 'Order goods',
      'Empty Cart': 'Cart is Empty',
      'Terms of use': 'Terms of use',
      'Our contacts': 'Our contacts ',
      'Average score': 'Average score',
      'Your Birthday': 'Your Birthday',
      'Order amount': 'Order amount: ',
      'Student Pizza': 'Student Pizza',
      'We also offer': 'We also offer',
      'Total products': 'Total products: ',
      'Rate the product': 'Rate the product',
      'Product reviews': 'Відгуки про товар',
      'Maximum quantity': 'Maximum quantity',
      'Minimum quantity': 'Minimum quantity',
      'Change Password?': 'Change Password?',
      'Forgot Password?': 'Forgot Password?',
      'Did we miss': 'Did we miss 29 minutes?',
      'Continue shopping': 'Continue shopping',
      'online restaurant': 'online restaurant',
      'Go to registration': 'Go to registration',
      'We will deliver to': 'We will deliver to',
      'Why are we the best?': 'Why are we the best?',
      'select a sort method': 'select a sort method',
      'Delivery and Payment': 'Delivery and Payment',
      'Loyalty Bonus System': 'Loyalty Bonus System',
      'Promotion of the week': 'Promotion of the week',
      'A gift for being late': 'A gift for being late',
      'delivery': ' - delivery of sushi and pizza in Lviv',
      'Polite qualified staff': '- Polite qualified staff',
      'round the clock': 'round the clock without days off 24/7',
      'This field cannot be empty': 'This field cannot be empty',
      'Cooperation and partnership': 'Cooperation and partnership',
      'It remains until': 'It remains until the end of the action',
      'Incorrectly entered email': 'Incorrectly entered email, example',
      'Large Portions': '- Large portions and a wide menu for every taste',
      'Choose a pizza or roll as a gift': 'Choose a pizza or roll as a gift',
      'But never too late to fix it': 'But it\'s never too late to fix it :)',
      'Well stop it': "Well, stop it, people usually don't live that long ;)",
      'minutes or give a pizza': 'minutes or give a pizza / roll for being late',
      'You have not reached the required age': 'You have not reached the required age',
      'Bonuses are valid for 30 calendar days': 'Bonuses are valid for 30 calendar days',
      'Fast timely delivery': '- Fast timely delivery to the declared areas of the city',
      'Advantages of sushi and pizza delivery': 'Advantages of sushi and pizza delivery ',
      'You can receive a gift': 'You can receive a gift with the next order up to 28 days.',
      'If you are not registered': 'If you are not registered yet, you should register first',
      'Accumulated bonuses': 'Accumulated bonuses are not subject to monetary reimbursement.',
      'The field must contain only numbers above 0': 'The field must contain only numbers above 0',
      'Invariably fresh and high quality products': '- Invariably fresh and high quality products',
      'The term of the gift': 'The term of the gift is a birthday plus one day before and after the holiday',
      'We use': ' We use only quality fresh produce and convenient packaging for meals. Orders are accepted ',
      'When ordering from': '*When ordering from UAH 1,000, the operator will inform you of the delivery time.',
      'Bonuses may not be accrued for some specials offers': 'Bonuses may not be accrued for some specials offers',
      'For example': 'For example, using the compensation on Tuesday, you will receive a Corleone pizza or a Taka roll.',
      'Delivery time': '*Delivery time depends on the TOTAL amount of the order (EXCLUDING discounts, promotions, etc.).',
      'When ordering': '*When ordering from UAH 800 to UAH 999, the delivery time increases by 10 minutes for the corresponding zone.',
      'We deliver up to 29 minutes':
        'We deliver up to 29 minutes! If the courier is late, we give you a roll or pizza:',
      'To receive a gift':
        'To receive a gift, you must present the courier with a document certifying the date of your birth',
      'The password must contain':
        'The password must contain 8 characters, including one capital letter, one number, and one special character',
      'Incorrectly entered phone number format':
        'Incorrectly entered phone number, the field should contain only numbers and be in the format',
      'Bonuses are credited': "Bonuses are credited to the buyer's mobile number for the total amount of the Pizzachu check.",
      'The Program Participant':
        'The Program Participant may not transfer the accumulated bonuses to another person, including another participant Programs.',
      'Compensatory pizzas':
        'Compensatory pizzas and rolls vary depending on the day of the week. The entire list of dishes is presented at the bottom of the page.',
      'Points of 5%':
        'Points of 5% of the amount of each order are credited to your balance. The bonus account is assigned to the phone number. Collect points and receive a partially paid or completely free order within 30 days.',
      'Its means':
        'This means that we do not offer fast food. Our dishes are of restaurant quality, which you can enjoy at home and at work! We have 5 kitchens in Lviv - no matter what part of the city you are in, we will promptly prepare and bring the order to ',
      'Lead of delivery':
        '- a leader in the delivery of sushi and pizza in our region since 2021. We are actively expanding our network so that as many of our regions as possible can enjoy delicious Pizzachu dishes! We are constantly working to ensure that our sushi, rolls, pizza and other dishes are at the highest culinary level! Author\'s recipes from the brand chef conquered many bellies!',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "ua",
  fallbackLng: "ua",
  interpolation: {
    escapeValue: false
  },
  compatibilityJSON: 'v3',
})

export default i18n
