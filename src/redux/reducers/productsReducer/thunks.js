import {productsAPI} from "../../../API/productsAPI/productsAPI";
import {
    setCurrentPage,
    setProducts,
    setIsFetching,
    setTotalProductsCount,
    setProductsType,
    setProductsSection
} from "./actions";


export const getAllProducts = (type, section, currentPage, pageSize) => async dispatch => {
    dispatch(setIsFetching(true));
    dispatch(setProductsType(type));
    dispatch(setProductsSection(section));
    dispatch(setCurrentPage(currentPage));
    let response = await productsAPI.getProducts(type, section, currentPage, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setProducts(response.data.products));
    dispatch(setTotalProductsCount(response.data.total));
};
