import instance from '../../helpers/API';
import {HEADER_ENUM} from '../../constants';


export const cartAPI = {
    getCart(access_token) {
        return instance.post(`cart`,{
            headers: {
                [HEADER_ENUM.AUTHORIZATION]: access_token
            }
        });
    },
    getUnauthorizedCart(tempId) {
        return instance.post(`cart/unauthorized?tempId=${tempId}`);
    },
    addProductToCart(access_token, productId, count = 1) {
        return instance.post(`cart?productId=${productId}`, {count}, {
            headers: {
                [HEADER_ENUM.AUTHORIZATION]: access_token
            }
        });
    },
    addProductToUnauthorizedCart(tempId, productId, count = 1) {
        return instance.post(`cart/unauthorized?tempId=${tempId}&productId=${productId}`, {count});
    },
    updateProductInCart(productId, access_token, count) {
        return instance.put(`cart?&productId=${productId}`, {count}, {
            headers: {
                [HEADER_ENUM.AUTHORIZATION]: access_token
            }
        });
    },
    updateProductInUnauthorizedCart(tempId, productId, count) {
        return instance.put(`cart/unauthorized?tempId=${tempId}&productId=${productId}`, {count});
    },
    deleteProductFromCart(productId, access_token) {
        return instance.delete(`cart/?&productId=${productId}`, {
            headers: {
                [HEADER_ENUM.AUTHORIZATION]: access_token
            }
        });
    },
    deleteProductFromUnauthorizedCart(tempId, productId) {
        return instance.delete(`cart/unauthorized?tempId=${tempId}&productId=${productId}`);
    },
    deleteCart(productId, access_token) {
        return instance.delete(`cart`, {
            headers: {
                [HEADER_ENUM.AUTHORIZATION]: access_token
            }
        });
    },
    deleteUnauthorizedCart(tempId) {
        return instance.delete(`cart/unauthorized?tempId=${tempId}`);
    }
};


