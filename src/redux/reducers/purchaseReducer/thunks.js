import { purchaseAPI } from '../../../API/purchaseAPI/purchaseAPI'
import { checkAccessTokenPresent } from '../../../helpers/checkAccessTokenPresent'
import {
  setTempId,
  setPurchase,
  setIsFetching,
  setPurchaseErrMsg,
  setPurchasesLength,
  setPurchaseSuccess,
  setTotalPurchasesCount,
} from './actions'
import { CUSTOM_ERRORS } from '../../../constants'
//////////////////////////////////////////////////

export const addPurchase = (
  email,
  phone,
  name,
  city,
  street,
  house,
  apartment,
  entrance,
  floor,
) => async dispatch => {

  let tempId = localStorage.getItem('tempId')
  const token = checkAccessTokenPresent()

  try {
    if (token) {
      const response = await purchaseAPI.addPurchase(
        email,
        phone,
        name,
        city,
        street,
        house,
        apartment,
        entrance,
        floor, token)

      if (response) {
        dispatch(setPurchaseSuccess(true))
        dispatch(setPurchaseErrMsg(null))
      }

    } else if (!token) {
      dispatch(setTempId(tempId))
      const response = await purchaseAPI.addUnauthorizedPurchase(tempId,
        email,
        phone,
        name,
        city,
        street,
        house,
        apartment,
        entrance,
        floor)

      if (response) {
        dispatch(setPurchaseSuccess(true))
        dispatch(setPurchaseErrMsg(null))
      }
    }
  } catch (e) {
    dispatch(setIsFetching(true))

    if (e.response.data.code) {
      dispatch(setPurchaseErrMsg(CUSTOM_ERRORS[e.response.data.code].message))
    }
  }
}

export const getAllClientPurchases = (
  pageSize, currentPage) => async dispatch => {
  const token = checkAccessTokenPresent()
  try {
    dispatch(setIsFetching(true))
    let response = await purchaseAPI.getAllClientPurchases(pageSize,
      currentPage, token)
    dispatch(setIsFetching(false))
    dispatch(setPurchase(response.data.purchase))
    dispatch(setPurchasesLength(response.data.length))
    dispatch(setTotalPurchasesCount(response.data.total))

    if (response) {
      dispatch(setPurchaseSuccess(true))
      dispatch(setIsFetching(true))
      dispatch(setPurchaseErrMsg(null))
    }
  } catch (e) {
    dispatch(setIsFetching(true))

    if (e.response.data.code) {
      dispatch(setPurchaseErrMsg(CUSTOM_ERRORS[e.response.data.code].message))
    }
  }
}
