import {productsAPI} from "../../../API/productsAPI/productsAPI";
import {
    setCurrentPage,
    setIsFetching,
    setProducts,
    setProductsSection,
    setProductsType,
    setTotalProductsCount
} from "./actions";


export const getAllProducts = (type, section, size_id, pageSize, currentPage) => async dispatch => {
    dispatch(setIsFetching(true));
    dispatch(setProductsType(type));
    dispatch(setProductsSection(section));
    dispatch(setCurrentPage(currentPage));
    if (section) {
        let response = await productsAPI.getProductsByTypeAndSection(type, section, size_id, pageSize, currentPage);
        dispatch(setIsFetching(false));
        dispatch(setProducts(response.data.products));
        dispatch(setTotalProductsCount(response.data.total));
    } else if (!section) {
        let response = await productsAPI.getProductsByType(type, size_id, pageSize, currentPage);
        dispatch(setIsFetching(false));
        dispatch(setProducts(response.data.products));
        dispatch(setTotalProductsCount(response.data.total));
    }
};
