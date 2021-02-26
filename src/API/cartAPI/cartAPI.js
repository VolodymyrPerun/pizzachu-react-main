import instance from '../../helpers/API';
import {HEADER_ENUM} from '../../constants';


export const cartAPI = {
    getCart(access_token) {
        return instance.get(`cart`, {
            headers: {
                [HEADER_ENUM.AUTHORIZATION]: access_token
            }
        });
    },
    getUnauthorizedCart(tempId) {
        return instance.get(`cart/unauthorized?tempId=${tempId}`);
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
    updateProductInCart(productId, count, access_token) {
        return instance.put(`cart?productId=${productId}`, {count}, {
            headers: {
                [HEADER_ENUM.AUTHORIZATION]: access_token
            }
        });
    },
    updateProductInUnauthorizedCart(tempId, productId, count) {
        return instance.put(`cart/unauthorized?tempId=${tempId}&productId=${productId}`, {count});
    },
    deleteProductFromCart(productId, access_token) {
        return instance.delete(`cart/product?productId=${productId}`, {
            headers: {
                [HEADER_ENUM.AUTHORIZATION]: access_token
            }
        });
    },
    deleteProductFromUnauthorizedCart(productId, tempId) {
        return instance.delete(`cart/unauthorized/product?productId=${productId}&tempId=${tempId}`);
    },
    deleteCart(access_token) {
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


