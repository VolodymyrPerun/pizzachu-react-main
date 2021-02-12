import {productsAPI} from "../../../API/productsAPI/productsAPI";
import {
    setCurrentPage,
    setProducts,
    setIsFetching,
    setTotalProductsCount,
    setProductsType,
    setProductsSection,
    setProductsByPriceDesc,
    setPageSize
} from "./actions";


export const getAllProducts = (type, section, pageSize, currentPage) => async dispatch => {
    dispatch(setIsFetching(true));
    dispatch(setProductsType(type));
    dispatch(setProductsSection(section));
    dispatch(setCurrentPage(currentPage));
    if (section) {
        let response = await productsAPI.getProductsByTypeAndSection(type, section, pageSize, currentPage);
        dispatch(setIsFetching(false));
        dispatch(setProducts(response.data.products));
        dispatch(setTotalProductsCount(response.data.total));
    } else if (!section) {
        let response = await productsAPI.getProductsByType(type, pageSize, currentPage);
        dispatch(setIsFetching(false));
        dispatch(setProducts(response.data.products));
        dispatch(setTotalProductsCount(response.data.total));
    }
};

// export const getAllProductsByPrice = (type, section, pageSize, currentPage) => async dispatch => {
//     dispatch(setIsFetching(true));
//     dispatch(setProductsType(type));
//     dispatch(setProductsSection(section));
//     dispatch(setCurrentPage(currentPage));
//     dispatch(setPageSize(pageSize));
//     if (section) {
//         let response = await productsAPI.getProductsByTypeAndSection(type, section, pageSize, currentPage);
//         dispatch(setIsFetching(false));
//         dispatch(setProductsByPriceDesc(response.data.products));
//         dispatch(setTotalProductsCount(response.data.total));
//     } else if (!section) {
//         let response = await productsAPI.getProductsByType(type, pageSize, currentPage);
//         dispatch(setIsFetching(false));
//         dispatch(setProductsByPriceDesc(response.data.products));
//         dispatch(setTotalProductsCount(response.data.total));
//     }
// };
