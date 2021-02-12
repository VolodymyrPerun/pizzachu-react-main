// import {productsAPI} from "../../../API/productsAPI/productsAPI";
// import {
//     setCurrentPage,
//     setProducts,
//     setIsFetching,
//     setTotalProductsCount,
//     setProductsType,
//     setProductsSection
// } from "../productsReducer/actions";
//
// import {
//     setSearchQuery,
//     setFilter
// } from './actions';
// import orderBy from "lodash/orderBy";
//
//
// export const getAllFilteredProducts = (type, section, pageSize, currentPage, filterBy) => async dispatch => {
//     dispatch(setIsFetching(true));
//     dispatch(setProductsType(type));
//     dispatch(setProductsSection(section));
//     dispatch(setCurrentPage(currentPage));
//    // dispatch(setSearchQuery());
//     dispatch(setFilter(filterBy));
//     if (section) {
//         let response = await productsAPI.getProductsByTypeAndSection(type, section, pageSize, currentPage);
//
//         dispatch(setIsFetching(false));
//         (dispatch(orderBy(setProducts(response.data.products)), 'price', 'desc'))
//         dispatch(setTotalProductsCount(response.data.total));
//     } else if (!section) {
//         let response = await productsAPI.getProductsByType(type, pageSize, currentPage);
//         console.log(orderBy(dispatch(setProducts(response.data.products)), 'price', 'asc'));
//         dispatch(setIsFetching(false));
//         orderBy(dispatch(setProducts(response.data.products)), 'price', 'desc')
//         dispatch(setTotalProductsCount(response.data.total));
//     }
// };
