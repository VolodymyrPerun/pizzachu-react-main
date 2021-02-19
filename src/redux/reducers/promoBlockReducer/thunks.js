import {productsAPI} from "../../../API/productsAPI/productsAPI";
import {
    setIsFetching,
    setProducts,
    setProductsSection,
    setProductsType,
} from "./actions";


export const getAllPromoProducts = (type, section, size_id, pageSize, currentPage) => async dispatch => {
    dispatch(setIsFetching(true));
    // dispatch(setProductsType(type));
    // dispatch(setProductsSection(section));
    if (section) {
        let response = await productsAPI.getProductsByTypeAndSection(type, section, size_id, pageSize, currentPage);
        dispatch(setIsFetching(false));
        dispatch(setProducts(response.data.products));
    } else if (!section) {
        let response = await productsAPI.getProductsByType(type, size_id, pageSize, currentPage);
        dispatch(setIsFetching(false));
        dispatch(setProducts(response.data.products));
    }
};
