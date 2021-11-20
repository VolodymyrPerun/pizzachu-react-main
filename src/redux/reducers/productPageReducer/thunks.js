import { productsAPI } from '../../../API/productsAPI/productsAPI';
import {
  setProduct,
  setIsFetching
} from './actions';
//////////////////////////////////////////////////

export const getProductById = productId => async dispatch => {
  try {
    dispatch(setIsFetching(true));
    let response = await productsAPI.getProductById(productId);
    dispatch(setProduct(response.data));
    dispatch(setIsFetching(false));
  } catch (e) {
    console.error(e);
  }
};
