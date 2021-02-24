import {connect} from 'react-redux';
import Cart from "../../Components/basics/Cart/Cart";
import {addProductToCart, getCart, updateProductInCart} from "../../redux/reducers/cartReducer/thunks";

const mapStateToProps = ({cart}) => ({
    cart: cart.cart,
    productsLength: cart.productsLength,
    totalProductsSum: cart.totalProductsSum,
    productCount: cart.productCount
});

export default connect(mapStateToProps, {
    addProductToCart,
    getCart,
    updateProductInCart
})(Cart);
