import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setCart } from '../../redux/reducers/cartReducer/actions'
import { changeUserPassword } from '../../redux/reducers/authReducer/thunks'
import ChangePassword
  from '../../components/basics/ChangePassword/ChangePassword'
//////////////////////////////////////////////////

const mapStateToProps = ({ auth, cart }) => ({
  cart: cart.cart,
  isAuth: auth.isAuth,
  isFetching: auth.isFetching,
  errorMessage: auth.loginErrMsg,
})

const ChangePasswordContainer = withRouter(ChangePassword)

export default connect(
  mapStateToProps,
  {
    setCart,
    changeUserPassword,
  })(ChangePasswordContainer)
