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
        let response = await cartAPI.getCart(token);
        dispatch(setCart(response.data.cart));
        dispatch(setTotalProductsSum(response.data.totalCount));
        dispatch(setProductsLength(response.data.productsCount));


    } else if (!token) {
        dispatch(setProductCount(count));
        dispatch(setProductId(productId));
        dispatch(setTempId(tempId));
        await cartAPI.addProductToUnauthorizedCart(tempId, productId, count);
        let response = await cartAPI.getUnauthorizedCart(tempId);
        dispatch(setCart(response.data.cart));
        dispatch(setProductsLength(response.data.productsCount));
        dispatch(setTotalProductsSum(response.data.totalCount));
    }
};

export const updateProductInCart = (productId, count) => async dispatch => {

    let tempId = localStorage.getItem('tempId');
    const token = checkAccessTokenPresent();
    if (token) {
        await cartAPI.updateProductInCart(productId, count, token);
        dispatch(setProductId(productId));
        dispatch(setProductCount(count));
        let newResponse = await cartAPI.getCart(token);
        dispatch(setCart(newResponse.data.cart));
        dispatch(setProductsLength(newResponse.data.productsCount));
        dispatch(setTotalProductsSum(newResponse.data.totalCount));


    } else if (!token) {
        await cartAPI.updateProductInUnauthorizedCart(tempId, productId, count);
        dispatch(setTempId(tempId));
        dispatch(setProductId(productId));
        dispatch(setProductCount(count));
        let newResponse = await cartAPI.getUnauthorizedCart(tempId);
        dispatch(setCart(newResponse.data.cart));
        dispatch(setProductsLength(newResponse.data.productsCount));
        dispatch(setTotalProductsSum(newResponse.data.totalCount));
    }
};

export const deleteProductFromCart = productId => async dispatch => {

    let tempId = localStorage.getItem('tempId');
    const token = checkAccessTokenPresent();
    if (token) {
        dispatch(setProductId(productId));
        await cartAPI.deleteProductFromCart(productId, token);
        let response = await cartAPI.getCart(token);
        dispatch(setCart(response.data.cart));
        dispatch(setTotalProductsSum(response.data.totalCount));
        dispatch(setProductsLength(response.data.productsCount));


    } else if (!token) {
        dispatch(setProductId(productId));
        dispatch(setTempId(tempId));
        await cartAPI.deleteProductFromUnauthorizedCart(productId, tempId);
        dispatch(setTempId(tempId));
        let response = await cartAPI.getUnauthorizedCart(tempId);
        dispatch(setCart(response.data.cart));
        dispatch(setProductsLength(response.data.productsCount));
        dispatch(setTotalProductsSum(response.data.totalCount));
    }
};

export const deleteCart = () => async dispatch => {

    let tempId = localStorage.getItem('tempId');
    const token = checkAccessTokenPresent();
    if (token) {
        await cartAPI.deleteCart(token);
        let response = await cartAPI.getCart(token);
        dispatch(setCart(response.data.cart));
        dispatch(setTotalProductsSum(response.data.totalCount));
        dispatch(setProductsLength(response.data.productsCount));
        localStorage.setItem('cart', '');


    } else if (!token) {
        dispatch(setTempId(tempId));
        await cartAPI.deleteUnauthorizedCart(tempId);
        dispatch(setTempId(tempId));
        let response = await cartAPI.getUnauthorizedCart(tempId);
        dispatch(setCart(response.data.cart));
        dispatch(setProductsLength(response.data.productsCount));
        dispatch(setTotalProductsSum(response.data.totalCount));
        localStorage.setItem('cart', '');
    }
};
