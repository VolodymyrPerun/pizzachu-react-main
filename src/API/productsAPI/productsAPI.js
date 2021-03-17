import instance from '../../helpers/API';
import {PAGE_DEFAULT, PRODUCT_SECTION, PRODUCT_TYPE} from '../../constants';
import {AUTHORIZATION} from "../../constants/authConstants/header.enum";


export const productsAPI = {
    getProductsByType(
        type = PRODUCT_TYPE.PIZZA,
        size_id = PAGE_DEFAULT.PRODUCT_SIZE,
        pageSize = PAGE_DEFAULT.PAGE_SIZE,
        currentPage = PAGE_DEFAULT.CURRENT_PAGE) {
        return instance.get((`products?type=${type}&size_id=${size_id}&limit=${pageSize}&page=${currentPage}`));
    },
    getProductsByTypeAndSection(
        type = PRODUCT_TYPE.PIZZA,
        section = PRODUCT_SECTION.NO_SECTION_MEAL,
        size_id = PAGE_DEFAULT.PRODUCT_SIZE,
        pageSize = PAGE_DEFAULT.PAGE_SIZE,
        currentPage = PAGE_DEFAULT.CURRENT_PAGE) {
        return instance.get(`products?type=${type}&section=${section}&size_id=${size_id}&limit=${pageSize}&page=${currentPage}`);
    },
    getProductById(productId) {
        return instance.get(`products/${productId}`);
    },


    setMark: (access_token, mark, productId) => {

        return instance.post(`/products/evaluate-product?productId=${productId}`, {mark}, {
            headers: {
                [AUTHORIZATION]: access_token
            }
        })

    },
    getIsEvaluated: (access_token, productId) => {

        return instance.get(`/products/is-evaluated?productId=${productId}`, {
            headers: {
                [AUTHORIZATION]: access_token
            }
        })

    },
    getAVGMark: productId => {

        return instance.get(`/products/average-mark?productId=${productId}`)

    },
};


