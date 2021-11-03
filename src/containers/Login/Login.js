import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Login from '../../components/basics/Login/Login'
import { setCart } from '../../redux/reducers/cartReducer/actions'
import { login, logout } from '../../redux/reducers/authReducer/thunks'
//////////////////////////////////////////////////

const mapStateToProps = ({ auth, cart }) => ({
  cart: cart.cart,
  isAuth: auth.isAuth,
  isFetching: auth.isFetching,
  errorMessage: auth.loginErrMsg,
  adminErrorMessage: auth.loginAdminErrMsg,
})

const LoginWithRouter = withRouter(Login)

export default connect(
  mapStateToProps,
  {
    login,
    logout,
    setCart,
    //loginAdmin
  })(LoginWithRouter)
