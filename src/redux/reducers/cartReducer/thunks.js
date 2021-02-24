import {cartAPI} from "../../../API/cartAPI/cartAPI";
import {setCart, setProductCount, setProductId, setProductsLength, setTempId, setTotalProductsSum} from "./actions";
import {checkAccessTokenPresent} from "../../../helpers/checkAccessTokenPresent";


export const getCart = () => async dispatch => {

    let tempId = localStorage.getItem('tempId');
    let token = checkAccessTokenPresent();
    if (token) {
        let response = await cartAPI.getCart(token);
        dispatch(setCart(response.data.cart));
        dispatch(setTotalProductsSum(response.data.totalCount));
        dispatch(setProductsLength(response.data.productsCount));
    } else {
        let response = await cartAPI.getUnauthorizedCart(tempId);
        dispatch(setCart(response.data.cart));
        dispatch(setProductsLength(response.data.productsCount));
        dispatch(setTotalProductsSum(response.data.totalCount));
    }
};

export const addProductToCart = (productId, count) => async dispatch => {

    let tempId = localStorage.getItem('tempId');
    const token = checkAccessTokenPresent();
    if (token) {
        dispatch(setProductCount(count));
        dispatch(setProductId(productId));
        await cartAPI.addProductToCart(token, productId, count);


    } else if (!token) {
        dispatch(setProductCount(count));
        dispatch(setProductId(productId));
        dispatch(setTempId(tempId));
        await cartAPI.addProductToUnauthorizedCart(tempId, productId, count);
    }
};

export const updateProductInCart = (productId, count) => async dispatch => {

    let tempId = localStorage.getItem('tempId');
    const token = checkAccessTokenPresent();
    if (token) {
        dispatch(setProductCount(count));
        dispatch(setProductId(productId));
        await cartAPI.updateProductInCart(token, productId, count);


    } else if (!token) {
        dispatch(setTempId(tempId));
        dispatch(setProductCount(count));
        dispatch(setProductId(productId));
        await cartAPI.updateProductInUnauthorizedCart(tempId, productId, count);
    }
};
