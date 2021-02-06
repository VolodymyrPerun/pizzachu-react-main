import instance from '../../helpers/API';


export const productsAPI = {
    getProductsByType(type = 1, pageSize = 12, currentPage = 1) {
        return instance.get(`products?type=${type}&limit=${pageSize}&page=${currentPage}`);
    },
    getProductsByTypeAndSection(type = 1, section = 7, pageSize = 12, currentPage = 1) {
        return instance.get(`products?type=${type}&section=${section}&limit=${pageSize}&page=${currentPage}`);
    }
}


