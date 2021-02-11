import {connect} from 'react-redux';
import {setFilter, setSearchQuery} from '../../redux/reducers/filterReducer/actions';
import {Filter} from '../../Components/basics/Filter/Filter';
import orderBy from "lodash/orderBy";
import {getAllProducts} from "../../redux/reducers/productsReducer/thunks";


const sortBy = (products, filterBy) => {
    switch (filterBy) {
        case 'price_high':
            return orderBy(products, 'price', 'desc');
        case 'price_low':
            return orderBy(products, 'price', 'asc');
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
            o.description.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
    );

const searchProducts = (products, filterBy, searchQuery) => {
    return sortBy(filterProducts(products, searchQuery), filterBy);
};


const mapStateToProps = ({productsPage, filter}) => ({
    products: productsPage.products && searchProducts(productsPage.products, filter.filterBy, filter.searchQuery),
    filterBy: filter.filterBy,
    searchQuery: filter.searchQuery
    // isReady: productsPage.isReady,
});

export default connect(mapStateToProps, {
    setFilter, setSearchQuery, getAllProducts
})(Filter);
