import styles from './PurchaseForm.module.scss'
import { makeStyles } from '@material-ui/core/styles'
import FormsControlItem from '../../../commons/FormsControls/FormsControls'
import { SELECT, TEXT_FIELD } from '../../../../constants/formsControls.enum'
import {
  phone,
  email,
  age18,
  age120,
  number,
  password,
  isRequired,
  maxLengthCreator,
  minLengthCreator,
} from '../../../../validators/validators'
//////////////////////////////////////////////////

const classes = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    margin: theme.spacing(2),
  },
}))

const inputStyles = { color: '#008E46' }

const select = FormsControlItem(SELECT)
const input = FormsControlItem(TEXT_FIELD)

const minLength1 = minLengthCreator(1)
const minLength2 = minLengthCreator(2)
const maxLength3 = maxLengthCreator(3)
const minLength10 = minLengthCreator(10)
const maxLength10 = maxLengthCreator(10)
const maxLength20 = maxLengthCreator(20)
const maxLength45 = maxLengthCreator(45)

export default [
  {
    name: 'city',
    isSelect: true,
    component: select,
    variant: 'filled',
    style: inputStyles,
    required: 'required',
    className: styles.select,
    labelText: 'Населений пункт',
    formControlClassName: classes.formControl,
    optionsSelect: [
      {
        value: 'Вибрати',
        style: { color: 'red', fontStyle: 'normal' },
      },
      {
        value: 'Львів',
      },
      {
        value: 'Бірки',
      },
      {
        value: 'Рудне',
      },
      {
        value: 'Рудно',
      },
      {
        value: 'Зубра',
      },
      {
        value: 'Поршна',
      },
      {
        value: 'Кожичі',
      },
      {
        value: 'Надичі',
      },
      {
        value: 'Наварія',
      },
      {
        value: 'Липники',
      },
      {
        value: 'Винники',
      },
      {
        value: 'Дубляни',
      },
      {
        value: 'Скнилів',
      },
      {
        value: 'Солонка',
      },
      {
        value: 'Давидів',
      },
      {
        value: 'Грабово',
      },
      {
        value: 'Муроване',
      },
      {
        value: 'Сулимів',
      },
      {
        value: 'Оброшине',
      },
      {
        value: 'Лапаївка',
      },
      {
        value: 'Кротошин',
      },
      {
        value: 'Підсадки',
      },
      {
        value: 'Підбірці',
      },
      {
        value: 'Брюховичі',
      },
      {
        value: 'Конопниця',
      },
      {
        value: 'Пустомити',
      },
      {
        value: 'Сокільники',
      },
      {
        value: 'Зимна Вода',
      },
      {
        value: 'Гамаліївка',
      },
      {
        value: 'Малечковичі',
      },
      {
        value: 'Холодновідка',
      },
      {
        value: 'Рясне-Руське',
      },
      {
        value: 'Пасіки-Зубрицькі',
      },
      {
        value: 'Великі Грибовичі',
      },
    ],
  },
  {
    name: 'name',
    type: 'text',
    component: input,
    variant: 'filled',
    labelText: 'Ім\'я',
    style: inputStyles,
    required: 'required',
    validate: [[isRequired, minLength2, maxLength20]],
  },
  {
    type: 'text',
    name: 'surname',
    component: input,
    variant: 'filled',
    style: inputStyles,
    required: 'required',
    labelText: 'Прізвище',
    validate: [[isRequired, minLength2, maxLength20]],
  },
  {
    name: 'age',
    type: 'text',
    component: input,
    variant: 'filled',
    style: inputStyles,
    required: 'required',
    labelText: 'Ваш вік',
    warn: [number, age18, age120],
    validate: [[isRequired, minLength2, maxLength3]],
  },
  {
    name: 'password',
    type: 'password',
    component: input,
    warn: [password],
    variant: 'filled',
    style: inputStyles,
    labelText: 'Пароль',
    required: 'required',
    validate: [[isRequired, minLength2, maxLength45]],
  },
  {
    isSelect: true,
    name: 'gender_id',
    component: select,
    labelText: 'Стать',
    style: inputStyles,
    required: 'required',
    className: styles.select,
    formControlClassName: classes.formControl,
    optionsSelect: [
      {
        value: '',
      },
      {
        value: 1,
        title: 'Чоловіча',
      },
      {
        value: 2,
        title: 'Жіноча',
      },
    ],
  },
  {
    warn: phone,
    name: 'phone',
    component: input,
    variant: 'filled',
    style: inputStyles,
    labelText: 'Телефон',
    required: 'required',
    placeholder: '(0xx) xxx xx xx',
    validate: [number, isRequired, minLength10, maxLength10],
  },
  {
    warn: email,
    name: 'email',
    component: input,
    variant: 'filled',
    style: inputStyles,
    required: 'required',
    labelText: 'Ел. скринька',
    placeholder: 'pizzachu@icheese.you',
    validate: [isRequired, minLength2, maxLength45],
  },
  {
    name: 'street',
    component: input,
    variant: 'filled',
    style: inputStyles,
    labelText: 'Вулиця',
    id: 'filled-required',
    required: 'required',
    validate: [isRequired, minLength2, maxLength45],
  },
  {
    name: 'house',
    component: input,
    variant: 'filled',
    style: inputStyles,
    labelText: 'Будинок',
    id: 'filled-required',
    required: 'required',
    validate: [isRequired, minLength1, maxLength45],
  },
  {
    warn: {number},
    component: input,
    name: 'apartment',
    variant: 'filled',
    style: inputStyles,
    labelText: 'Квартира',
    id: 'filled-required',
    validate: [minLength1, maxLength10],
  },
  {
    warn: {number},
    name: 'entrance',
    component: input,
    variant: 'filled',
    style: inputStyles,
    labelText: 'Під\'їзд',
    id: 'filled-required',
    validate: [minLength1, maxLength10],
  },
  {
    name: 'floor',
    warn: {number},
    component: input,
    variant: 'filled',
    style: inputStyles,
    labelText: 'Поверх',
    id: 'filled-required',
    validate: [minLength1, maxLength10],
  },
]
