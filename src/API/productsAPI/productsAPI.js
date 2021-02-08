import instance from '../../helpers/API';
import {PRODUCT_SECTION, PRODUCT_TYPE, PAGE_DEFAULT} from '../../constants';


export const productsAPI = {
    getProductsByType(
        type = PRODUCT_TYPE.PIZZA,
        pageSize = PAGE_DEFAULT.PAGE_SIZE,
        currentPage = PAGE_DEFAULT.CURRENT_PAGE) {
        return instance.get(`products?type=${type}&limit=${pageSize}&page=${currentPage}`);
    },
    getProductsByTypeAndSection(
        type = PRODUCT_TYPE.PIZZA,
        section = PRODUCT_SECTION.NO_SECTION_MEAL,
        pageSize = PAGE_DEFAULT.PAGE_SIZE,
        currentPage = PAGE_DEFAULT.CURRENT_PAGE) {
        return instance.get(`products?type=${type}&section=${section}&limit=${pageSize}&page=${currentPage}`);
    }
};


