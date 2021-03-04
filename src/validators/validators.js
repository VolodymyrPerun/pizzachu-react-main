export const required = value => value ? undefined : "Це поле не може бути порожнім";

export const number = value =>
    value &&  value >= 0
        ? undefined
        :  'Поле повинно містити лише цифри вище 0';

export const maxLengthCreator = maxLength => value =>
    value && value.length <= maxLength ? undefined : `Максимальна кількість ${maxLength} символів`;

export const minLengthCreator = minLength => value =>
    value && value.length >= minLength ? undefined : `Мінімальна кількість ${minLength} символів`;

export const phone = value =>
    value  && !/^(?:\+3)?8?(0\d{9})$/.test(value)
        ? 'Невірно введений номер телефону, поле повинно містити лише цифри i бути у форматі (0ХХ)ХХХХХХХ'
        : undefined;

export const email = value =>
    value && !/^(?!.*\.{2})(?!\.)[a-z0-9_.'-]*[a-z0-9_'-]@(?!_)(?:[a-z0-9_'-]+\.)+[a-z0-9_'-]{2,}$/.test(value)
        ? 'Невірно введений емейл, приклад pizzachu@ichesse.you'
        : undefined;

export const password = value =>
    value && !/^(?=[A-Z])(?=.*?[0-9])(?=.*?[^\\w\\s]).+$/i.test(value)
        ? 'Пароль повинен містити 8 символів, включаючи одну велику літеру, одну цифру, та один спеціальний символ'
        : undefined;
