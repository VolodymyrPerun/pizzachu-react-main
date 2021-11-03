import { stopSubmit } from 'redux-form'
import { CUSTOM_ERRORS } from '../../../constants'
import { setIsFetching, setRegisterErrMsg, setRegisterSuccess } from './actions'
import { registerClientsAPI } from '../../../api/registerClientsAPI/registerClientsAPI'
//////////////////////////////////////////////////

export const registerClient = (
  user_photo,
  email,
  phone,
  name,
  surname,
  age,
  password,
  gender_id,
  city,
  street,
  house,
  apartment,
  entrance,
  floor) => async dispatch => {

  try {
    const response = await registerClientsAPI.registerClient(
      user_photo,
      email,
      phone,
      name,
      surname,
      age,
      password,
      gender_id,
      city,
      street,
      house,
      apartment,
      entrance,
      floor)

    if (response) {
      dispatch(setRegisterSuccess(true))
      dispatch(setIsFetching(true))
      dispatch(setRegisterErrMsg(null))
    }

  } catch (e) {
    dispatch(setIsFetching(true))

    let message = e.response.data.message && e.response.data.message.length > 0
      ? CUSTOM_ERRORS['4003'].message :
      CUSTOM_ERRORS['4042'].message
    dispatch(stopSubmit('registerForm', { _error: message }))

    if (e.response.data.code) {
      dispatch(setRegisterErrMsg(CUSTOM_ERRORS[e.response.data.code].message))
    }
  }
}

// export const getAllClientPurchases = (pageSize, currentPage) => async dispatch => {
//     const token = checkAccessTokenPresent();
//     dispatch(setIsFetching(true));
//     let response = await purchaseAPI.getAllClientPurchases(pageSize, currentPage, token);
//     dispatch(setIsFetching(false));
//     dispatch(setPurchase(response.data.purchase));
//     dispatch(setPurchasesLength(response.data.length))
//     dispatch(setTotalPurchasesCount(response.data.total));
// };
