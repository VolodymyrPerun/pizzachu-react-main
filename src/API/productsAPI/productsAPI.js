import instance from '../../helpers/api'
import { AUTHORIZATION } from '../../constants/authConstants/header.enum'
import { PAGE_DEFAULT, PRODUCT_SECTION, PRODUCT_TYPE } from '../../constants'
//////////////////////////////////////////////////

export const productsAPI = {
  getProductsByType (
    type = PRODUCT_TYPE.PIZZA,
    pageSize = PAGE_DEFAULT.PAGE_SIZE,
    size_id = PAGE_DEFAULT.PRODUCT_SIZE,
    currentPage = PAGE_DEFAULT.CURRENT_PAGE) {
    return instance.get(
      (`products?type=${type}&size_id=${size_id}&limit=${pageSize}&page=${currentPage}`),
    )
  },
  getProductsByTypeAndSection (
    type = PRODUCT_TYPE.PIZZA,
    pageSize = PAGE_DEFAULT.PAGE_SIZE,
    size_id = PAGE_DEFAULT.PRODUCT_SIZE,
    currentPage = PAGE_DEFAULT.CURRENT_PAGE,
    section = PRODUCT_SECTION.NO_SECTION_MEAL) {
    return instance.get(
      `products?type=${type}&section=${section}&size_id=${size_id}&limit=${pageSize}&page=${currentPage}`,
    )
  },
  getProductById (productId) {
    return instance.get(`products/${productId}`)
  },
  setMark: (access_token, mark, productId) =>
    instance.post(`/products/evaluate-product?productId=${productId}`, { mark },
      {
        headers: {
          [AUTHORIZATION]: access_token,
        },
      }),
  getIsEvaluated: (access_token, productId) => instance.get(
    `/products/is-evaluated?productId=${productId}`, {
      headers: {
        [AUTHORIZATION]: access_token,
      },
    },
  ),
  getAVGMark: productId => instance.get(
    `/products/average-mark?productId=${productId}`),
}
