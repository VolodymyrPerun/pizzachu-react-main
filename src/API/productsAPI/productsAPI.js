import instance from '../../helpers/API';


export const productsAPI = {
    // getProducts(type = 1, section = 7, pageSize = 3, currentPage = 1) {
    //     return instance.get(`products?type=${type}&section=${section}&limit=${pageSize}&page=${currentPage}`);
    // }
    getProducts(type = 1, section = 7, pageSize = 10, currentPage = 1) {
        return instance.get(`products?type=${type}&section=${section}&limit=${pageSize}&page=${currentPage}`);
    }
};



