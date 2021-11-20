import styles from './ChangePassword.module.scss'
import { INPUT } from '../../../constants/formsControls.enum'
import { faAt, faKey } from '@fortawesome/free-solid-svg-icons'
import FormsControlItem from '../../commons/FormsControls/FormsControls'
import {
  email,
  password,
  isRequired,
  maxLengthCreator,
  minLengthCreator,
} from '../../../validators/validators'
//////////////////////////////////////////////////

const inputStyles = styles.input
const input = FormsControlItem(INPUT)
const labelStyle = {
  color: 'white',
  bottom: '-5px',
  fontSize: '10px',
  marginRight: '13px',
  position: 'relative',
}

const minLength2 = minLengthCreator(2)
const minLength8 = minLengthCreator(8)
const maxLength20 = maxLengthCreator(20)
const maxLength45 = maxLengthCreator(45)

export default [
  {
    labelStyle,
    warn: email,
    name: 'email',
    type: 'email',
    labelIcon: faAt,
    component: input,
    placeholder: 'Емейл',
    className: inputStyles,
    validate: [isRequired, minLength2, maxLength45],
  },
  {
    labelStyle,
    warn: password,
    name: 'password',
    type: 'password',
    component: input,
    labelIcon: faKey,
    className: inputStyles,
    placeholder: 'Введіть поточний пароль',
    validate: [isRequired, minLength8, maxLength20],
  },
  {
    labelStyle,
    warn: password,
    type: 'password',
    component: input,
    labelIcon: faKey,
    name: 'newPassword',
    className: inputStyles,
    placeholder: 'Введіть новий пароль',
    validate: [isRequired, minLength8, maxLength20],
  },
  {
    labelStyle,
    warn: password,
    type: 'password',
    component: input,
    labelIcon: faKey,
    className: inputStyles,
    name: 'repeatNewPassword',
    placeholder: 'Повторіть новий пароль',
    validate: [isRequired, minLength8, maxLength20],
  },
]
