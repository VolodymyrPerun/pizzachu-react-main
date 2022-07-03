import i18next from 'i18next'

export const isRequired = value => value
  ? undefined
  : i18next.t('This field cannot be empty')

export const number = value =>
  value >= 0
    ? undefined
    : i18next.t('The field must contain only numbers above 0')

export const age18 = value =>
  value > 18
    ? undefined
    : i18next.t('You have not reached the required age')

export const age120 = value =>
  value < 120
    ? undefined
    : i18next.t('Well stop it)')

export const maxLengthCreator = maxLength => value =>
  value && value.length <= maxLength
    ? undefined
    : `${i18next.t('Maximum quantity')} ${maxLength} ${i18next.t('symbols')}`

export const minLengthCreator = minLength => value =>
  value && value.length >= minLength
    ? undefined
    : `${i18next.t('Minimum quantity')} ${minLength} ${i18next.t('symbols')}`

export const phone = value =>
  value && !/^(?:\+3)?8?(0\d{9})$/.test(value)
    ? `${i18next.t('Incorrectly entered phone number format')} (0ХХ)ХХХХХХХ}`
    : undefined

export const email = value =>
  value &&
  !/^(?!.*\.{2})(?!\.)[a-z0-9_.'-]*[a-z0-9_'-]@(?!_)(?:[a-z0-9_'-]+\.)+[a-z0-9_'-]{2,}$/.test(
    value)
    ? `${i18next.t('Incorrectly entered email')} pizzachu@ichesse.you`
    : undefined

export const password = value =>
  value && !/^(?=[A-Z])(?=.*?[0-9])(?=.*?[^\\w\\s]).+$/i.test(value)
    ? i18next('The password must contain')
    : undefined
