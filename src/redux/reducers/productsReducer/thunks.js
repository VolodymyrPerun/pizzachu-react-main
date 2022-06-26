import { productsAPI } from '../../../API/productsAPI/productsAPI'
import {
  setProducts,
  setIsFetching,
  setProductsType,
  setTotalProductsCount,
} from './actions'
//////////////////////////////////////////////////

export const getAllProducts = (type, section, size_id, pageSize, currentPage) =>
  async dispatch => {
  let response
  dispatch(setIsFetching(true))
  dispatch(setProductsType(type))

  if (!!section) {
    response = await productsAPI.getProductsByTypeAndSection(
      type, section, size_id, pageSize, currentPage
    )
  } else {
    response = await productsAPI.getProductsByType(
      type, size_id, pageSize, currentPage
    )
  }

  dispatch(setIsFetching(false))
  dispatch(setProducts(response.data.products))
  dispatch(setTotalProductsCount(response.data.total))
}
