import {connect} from 'react-redux';
import {Products} from '../../Components/basics/Products/Products';
import {getAllProducts} from "../../redux/reducers/productsReducer/thunks";
import {setCurrentPage, setPageSize} from "../../redux/reducers/productsReducer/actions";


const mapStateToProps = ({products}) => ({
    products: products.products,
    pageSize: products.pageSize,
    total: products.total,
    currentPage: products.currentPage
});


export default connect(mapStateToProps, {
    getAllProducts,
    setCurrentPage,
    setPageSize
})(Products);
