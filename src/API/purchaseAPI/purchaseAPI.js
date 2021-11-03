import instance from '../../helpers/api'
import { HEADER_ENUM, PAGE_DEFAULT } from '../../constants'
//////////////////////////////////////////////////

export const purchaseAPI = {
  addPurchase (
    email, phone, name, city, street, house, apartment, entrance, floor,
    access_token) {
    return instance.post(
      `purchase`,
      { email, phone, name, city, street, house, apartment, entrance, floor }, {
        headers: {
          [HEADER_ENUM.AUTHORIZATION]: access_token,
        },
      },
    )
  },
  addUnauthorizedPurchase (
    tempId, email, phone, name, city, street, house, apartment, entrance,
    floor) {
    return instance.post(`purchase/unauthorized?tempId=${tempId}`, {
      email, phone, name, city, street, house, apartment, entrance, floor,
    })
  },
  getAllClientPurchases (
    pageSize = PAGE_DEFAULT.PAGE_SIZE,
    currentPage = PAGE_DEFAULT.CURRENT_PAGE,
    access_token) {
    return instance.get(`purchase/client?limit=${pageSize}&page=${currentPage}`,
      {
        headers: {
          [HEADER_ENUM.AUTHORIZATION]: access_token,
        },
      },
    )
  },
}
