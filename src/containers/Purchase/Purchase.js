import {connect} from 'react-redux';
import Purchase from "../../Components/basics/Purchase/Purchase";
import {deleteCart, getCart} from "../../redux/reducers/cartReducer/thunks";
import {addPurchase} from "../../redux/reducers/purchaseReducer/thunks";

const mapStateToProps = ({cart, auth}) => ({
    isAuth: auth.isAuth,
    me: auth.me,
    cart: cart.cart,
    productsLength: cart.productsLength,
    totalProductsSum: cart.totalProductsSum
});

export default connect(mapStateToProps, {
    getCart,
    addPurchase,
    deleteCart
})(Purchase);
