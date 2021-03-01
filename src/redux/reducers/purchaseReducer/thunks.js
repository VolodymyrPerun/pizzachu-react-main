import {purchaseAPI} from "../../../API/purchaseAPI/purchaseAPI";
import {checkAccessTokenPresent} from "../../../helpers/checkAccessTokenPresent";
import {setTempId} from "./actions";
import {cartAPI} from "../../../API/cartAPI/cartAPI";
import {setCart} from "../cartReducer/actions";


export const addPurchase = (email,
                            phone,
                            name,
                            city,
                            street,
                            house,
                            apartment,
                            entrance,
                            floor) => async dispatch => {

    let tempId = localStorage.getItem('tempId');
    const token = checkAccessTokenPresent();

    if (token) {
        await purchaseAPI.addPurchase(
            email,
            phone,
            name,
            city,
            street,
            house,
            apartment,
            entrance,
            floor,token);
        // let response = await cartAPI.getCart(token);
        // dispatch(setCart(response.data.cart));

    } else if (!token) {
        dispatch(setTempId(tempId));
        await purchaseAPI.addUnauthorizedPurchase(tempId,
            email,
            phone,
            name,
            city,
            street,
            house,
            apartment,
            entrance,
            floor);
        // let response = await cartAPI.getUnauthorizedCart(tempId);
        // dispatch(setCart(response.data.cart));
    }
};

// export const updateProductInCart = (productId, count) => async dispatch => {
//
//     let tempId = localStorage.getItem('tempId');
//     const token = checkAccessTokenPresent();
//     if (token) {
//         await cartAPI.updateProductInCart(productId, count, token);
//         dispatch(setProductId(productId));
//         dispatch(setProductCount(count));
//         let newResponse = await cartAPI.getCart(token);
//         dispatch(setCart(newResponse.data.cart));
//         dispatch(setProductsLength(newResponse.data.productsCount));
//         dispatch(setTotalProductsSum(newResponse.data.totalCount));
//
//
//     } else if (!token) {
//         await cartAPI.updateProductInUnauthorizedCart(tempId, productId, count);
//         dispatch(setTempId(tempId));
//         dispatch(setProductId(productId));
//         dispatch(setProductCount(count));
//         let newResponse = await cartAPI.getUnauthorizedCart(tempId);
//         dispatch(setCart(newResponse.data.cart));
//         dispatch(setProductsLength(newResponse.data.productsCount));
//         dispatch(setTotalProductsSum(newResponse.data.totalCount));
//     }
// };
//
// export const deleteProductFromCart = productId => async dispatch => {
//
//     let tempId = localStorage.getItem('tempId');
//     const token = checkAccessTokenPresent();
//     if (token) {
//         dispatch(setProductId(productId));
//         await cartAPI.deleteProductFromCart(productId, token);
//         let response = await cartAPI.getCart(token);
//         dispatch(setCart(response.data.cart));
//         dispatch(setTotalProductsSum(response.data.totalCount));
//         dispatch(setProductsLength(response.data.productsCount));
//
//
//     } else if (!token) {
//         dispatch(setProductId(productId));
//         dispatch(setTempId(tempId));
//         await cartAPI.deleteProductFromUnauthorizedCart(productId, tempId);
//         dispatch(setTempId(tempId));
//         let response = await cartAPI.getUnauthorizedCart(tempId);
//         dispatch(setCart(response.data.cart));
//         dispatch(setProductsLength(response.data.productsCount));
//         dispatch(setTotalProductsSum(response.data.totalCount));
//     }
// };
//
// export const deleteCart = () => async dispatch => {
//
//     let tempId = localStorage.getItem('tempId');
//     const token = checkAccessTokenPresent();
//     if (token) {
//         await cartAPI.deleteCart(token);
//         let response = await cartAPI.getCart(token);
//         dispatch(setCart(response.data.cart));
//         dispatch(setTotalProductsSum(response.data.totalCount));
//         dispatch(setProductsLength(response.data.productsCount));
//
//
//     } else if (!token) {
//         dispatch(setTempId(tempId));
//         await cartAPI.deleteUnauthorizedCart(tempId);
//         dispatch(setTempId(tempId));
//         let response = await cartAPI.getUnauthorizedCart(tempId);
//         dispatch(setCart(response.data.cart));
//         dispatch(setProductsLength(response.data.productsCount));
//         dispatch(setTotalProductsSum(response.data.totalCount));
//     }
// };
