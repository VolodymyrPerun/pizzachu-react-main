import {connect} from 'react-redux';
import {Products} from '../../Components/basics/Products/Products';
import {getAllProducts} from "../../redux/reducers/productsReducer/thunks";
import {
    setCurrentPage,
    setPageSize,
    setProductsSection,
    setProductsType
} from "../../redux/reducers/productsReducer/actions";


const mapStateToProps = state => ({
    products: state.productsPage.products,
    type: state.productsPage.type,
    section: state.productsPage.section,
    pageSize: state.productsPage.pageSize,
    total: state.productsPage.total,
    currentPage: state.productsPage.currentPage
});


export default connect(mapStateToProps, {
    getAllProducts,
    setCurrentPage,
    setPageSize,
    setProductsSection,
    setProductsType
})(Products);
