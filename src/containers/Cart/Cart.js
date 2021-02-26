import {connect} from 'react-redux';
import Cart from "../../Components/basics/Cart/Cart";
import {
    addProductToCart,
    deleteCart,
    deleteProductFromCart,
    getCart,
    updateProductInCart
} from "../../redux/reducers/cartReducer/thunks";

const mapStateToProps = ({cart}) => ({
    cart: cart.cart,
    productsLength: cart.productsLength,
    totalProductsSum: cart.totalProductsSum
});

export default connect(mapStateToProps, {
    addProductToCart,
    getCart,
    updateProductInCart,
    deleteProductFromCart,
    deleteCart
})(Cart);
