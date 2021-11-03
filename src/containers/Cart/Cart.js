import { connect } from 'react-redux'
import Cart from '../../components/basics/Cart/Cart'
import {
  getCart,
  deleteCart,
  addProductToCart,
  updateProductInCart,
  deleteProductFromCart,
} from '../../redux/reducers/cartReducer/thunks'
//////////////////////////////////////////////////

const mapStateToProps = ({ cart }) => ({
  cart: cart.cart,
  productsLength: cart.productsLength,
  totalProductsSum: cart.totalProductsSum,
})

export default connect(mapStateToProps, {
  getCart,
  deleteCart,
  addProductToCart,
  updateProductInCart,
  deleteProductFromCart,
})(Cart)
