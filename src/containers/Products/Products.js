import {connect} from 'react-redux';
import Products from '../../Components/basics/Products/Products';
import {getAllProducts} from "../../redux/reducers/productsReducer/thunks";
import {
    setCurrentPage,
    setPageSize,
    setProductSize,
    setProductsSection,
    setProductsType
} from "../../redux/reducers/productsReducer/actions";
import {setFilter, setSearchQuery} from "../../redux/reducers/filterReducer/actions";
import {filter, orderBy} from "lodash";
import {L, M, XL} from "../../constants/sizesDefault.enum";


const sortBy = (products, filterBy) => {
    console.log(products);
    switch (filterBy) {
        case 'name':
            return orderBy(products, 'name', 'asc');
        case 'price_high':
            return orderBy(products, 'price', 'desc');
        case 'price_low':
            return orderBy(products, 'price', 'asc');
        case 'weight_high':
            return orderBy(products, 'weight', 'desc');
        case 'weight_low':
            return orderBy(products, 'weight', 'asc');
        case L:
            return products[0].size_id ?
                filter(products, {'size_id': L}) :
                orderBy(products, 'name', 'asc');
        case M:
            return products[0].size_id ?
                filter(products, {'size_id': M}) :
                orderBy(products, 'name', 'asc');
        case XL:
            return products[0].size_id ?
                filter(products, {'size_id': XL}) :
                orderBy(products, 'name', 'asc');
        default:
            return products;
    }
};

const filterProducts = (products, searchQuery) =>
    products.filter(
        o =>
            o.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            o.description.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    );

const searchProducts = (products, filterBy, searchQuery) => {
    return sortBy(filterProducts(products, searchQuery), filterBy);
};


const mapStateToProps = ({productsPage, filter}) => ({
    products: productsPage.products && searchProducts(
        productsPage.products &&
        sortBy(productsPage.products, 'name'), filter.filterBy, filter.searchQuery),
    type: productsPage.type,
    size_id: productsPage.size_id,
    section: productsPage.section,
    pageSize: productsPage.pageSize,
    total: productsPage.total,
    isFetching: productsPage.isFetching
});


export default connect(mapStateToProps, {
    getAllProducts,
    setCurrentPage,
    setPageSize,
    setProductsSection,
    setProductsType,
    setProductSize,
    setFilter,
    setSearchQuery
})(Products);
