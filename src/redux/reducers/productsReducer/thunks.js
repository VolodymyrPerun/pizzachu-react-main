import {productsAPI} from "../../../API/productsAPI/productsAPI";
import {
    setCurrentPage,
    setProducts,
    setIsFetching,
    setTotalProductsCount,
} from "./actions";


export const getAllProducts = (type, section, currentPage, pageSize) => async dispatch => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(type));
    dispatch(setCurrentPage(section));
    dispatch(setCurrentPage(currentPage));
    let response = await productsAPI.getProducts(type, section, currentPage, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setProducts(response.data));
    // dispatch(setTotalProductsCount(response.data.totalCount));

};
