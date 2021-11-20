import { connect } from 'react-redux'
import Purchase from '../../Components/basics/Purchase/Purchase'
import { addPurchase } from '../../redux/reducers/purchaseReducer/thunks'
import { deleteCart, getCart } from '../../redux/reducers/cartReducer/thunks'
//////////////////////////////////////////////////

const mapStateToProps = ({ cart, auth, purchase }) => ({
  me: auth.me,
  cart: cart.cart,
  isAuth: auth.isAuth,
  productsLength: cart.productsLength,
  errorMessage: purchase.purchaseErrMsg,
  totalProductsSum: cart.totalProductsSum,
  isPurchaseSuccess: purchase.isPurchaseSuccess,
})

export default connect(mapStateToProps, {
  getCart,
  deleteCart,
  addPurchase,
})(Purchase)
