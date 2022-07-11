import { faAt, faKey } from '@fortawesome/free-solid-svg-icons'
//
import styles from './Login.module.scss'
//
import LANG from '../../../constants/langs.enum'
import { PLACEHOLDERS } from '../../../constants'
import { INPUT } from '../../../constants/formsControls.enum'
import FormsControlItem from '../../commons/FormsControls/FormsControls'
import {
  email,
  password,
  isRequired,
  maxLengthCreator,
  minLengthCreator,
} from '../../../validators/validators'
//////////////////////////////////////////////////

let lngFromStorage = localStorage.getItem('language')

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
    className: inputStyles,
    validate: [isRequired, minLength2, maxLength45],
    placeholder: lngFromStorage === LANG.UA
      ? PLACEHOLDERS.ua.Email : PLACEHOLDERS.en.Email,
  },
  {
    labelStyle,
    warn: password,
    name: 'password',
    type: 'password',
    component: input,
    labelIcon: faKey,
    className: inputStyles,
    validate: [isRequired, minLength8, maxLength20],
    placeholder: lngFromStorage === LANG.UA
      ? PLACEHOLDERS.ua.Password : PLACEHOLDERS.en.Password,
  },
]
