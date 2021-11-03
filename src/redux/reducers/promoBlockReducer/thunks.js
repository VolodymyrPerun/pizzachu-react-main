import { setIsFetching, setProducts } from './actions'
import { productsAPI } from '../../../api/productsAPI/productsAPI'
//////////////////////////////////////////////////

export const getAllPromoProducts = (
  type, section, size_id, pageSize, currentPage) => async dispatch => {
  dispatch(setIsFetching(true))
  if (section) {
    let response = await productsAPI.getProductsByTypeAndSection(type, section,
      size_id, pageSize, currentPage)
    dispatch(setIsFetching(false))
    dispatch(setProducts(response.data.products))
  } else if (!section) {
    let response = await productsAPI.getProductsByType(type, size_id, pageSize,
      currentPage)
    dispatch(setIsFetching(false))
    dispatch(setProducts(response.data.products))
  }
}
