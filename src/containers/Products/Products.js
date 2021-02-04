import {connect} from 'react-redux';
import {Products} from '../../Components/basics/Products/Products';
import {getAllProducts} from "../../redux/reducers/productsReducer/thunks";


const mapStateToProps = ({products}) => ({
    products: products.products
});


export default connect(mapStateToProps, {getAllProducts})(Products);
