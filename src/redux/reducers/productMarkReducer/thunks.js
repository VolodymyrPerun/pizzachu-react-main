import { CUSTOM_ERRORS } from '../../../constants'
import { refreshUserToken } from '../refreshReducer/thunks'
import { productsAPI } from '../../../API/productsAPI/productsAPI'
import { setIsEvaluated, setIsMarkLoading, setMark } from './actions'
import { checkAccessTokenPresent } from '../../../helpers/checkAccessTokenPresent'
//////////////////////////////////////////////////

export const setProductMark = (mark, productId) => async dispatch => {
  try {

    dispatch(setIsMarkLoading(false))

    const token = checkAccessTokenPresent()

    const postMark = await productsAPI.setMark(token, mark, productId)

    const avgMark = await productsAPI.getAVGMark(productId)
    const isEvaluated = await productsAPI.getIsEvaluated(token, productId)

    Promise.all([postMark, avgMark, isEvaluated]).then(() => {

      dispatch(setMark(avgMark.data.average_product_mark))
      dispatch(setIsEvaluated(isEvaluated.data))
      dispatch(setIsMarkLoading(true))

    })

  } catch (e) {
    dispatch(setIsMarkLoading(true))
    if (e.response.data.code === CUSTOM_ERRORS[4012].code) {
      dispatch(refreshUserToken())
      dispatch(setProductMark(mark, productId))
    }
  }
}
export const getIsEvaluatedProduct = productId => async dispatch => {

  try {
    dispatch(setIsMarkLoading(false))

    const token = checkAccessTokenPresent()

    const isEvaluated = await productsAPI.getIsEvaluated(token, productId)

    dispatch(setIsEvaluated(isEvaluated.data))

    dispatch(setIsMarkLoading(true))
  } catch (e) {
    dispatch(setIsMarkLoading(true))

    if (e.response.data.code === CUSTOM_ERRORS[4012].code) {
      dispatch(refreshUserToken())
      dispatch(getIsEvaluatedProduct(productId))
    }
  }
}
export const getAverageProductMark = productId => async dispatch => {

  try {
    dispatch(setIsMarkLoading(false))

    const markData = await productsAPI.getAVGMark(productId)

    dispatch(setMark(markData.data.average_product_mark))

    dispatch(setIsMarkLoading(true))

  } catch (e) {
    dispatch(setIsMarkLoading(true))
  }
}
