import {connect} from 'react-redux';
import {Products} from '../../Components/basics/Products/Products';
import {getAllProducts} from "../../redux/reducers/productsReducer/thunks";
import {
    setCurrentPage,
    setPageSize, setProductSize,
    setProductsSection,
    setProductsType
} from "../../redux/reducers/productsReducer/actions";
import {setFilter, setSearchQuery} from "../../redux/reducers/filterReducer/actions";
import orderBy from "lodash/orderBy";


const sortBy = (products, filterBy) => {
    switch (filterBy) {
        case 'price_high':
            return orderBy(products, 'price', 'asc');
        case 'price_low':
            return orderBy(products, 'price', 'desc');
        case 'weight_high':
            return orderBy(products, 'weight', 'asc');
        case 'weight_low':
            return orderBy(products, 'weight', 'desc');
        case 'name':
            return orderBy(products, 'name', 'asc');
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
    products: productsPage.products && searchProducts(productsPage.products, filter.filterBy, filter.searchQuery),
    type: productsPage.type,
    size_id: productsPage.size_id,
    section: productsPage.section,
    pageSize: productsPage.pageSize,
    total: productsPage.total,
    currentPage: productsPage.currentPage,
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
