import {connect} from 'react-redux';
import {ProductPage} from "../../Components/pages/ProductPage/ProductPage";
import {getProductById} from "../../redux/reducers/productPageReducer/thunks";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {addProductToCart, getCart} from "../../redux/reducers/cartReducer/thunks";


const mapStateToProps = ({productPage, productsPage}) => ({
    product: productPage.product,
    isFetching: productPage.isFetching,
    products: productsPage.products
});


export default compose(
    connect(mapStateToProps, {
        getProductById,
        addProductToCart,
        getCart,
    }),
    withRouter)(ProductPage);
