import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setCart } from '../../redux/reducers/cartReducer/actions'
import RestorePassword from '../../components/basics/RestorePassword/RestorePassword'
import { sendEmailForChangeForgotPassword } from '../../redux/reducers/authReducer/thunks'
//////////////////////////////////////////////////

const mapStateToProps = ({ auth, cart }) => ({
  cart: cart.cart,
  isAuth: auth.isAuth,
  isFetching: auth.isFetching,
  errorMessage: auth.loginErrMsg,
  adminErrorMessage: auth.loginAdminErrMsg,
})

const RestorePasswordContainer = withRouter(RestorePassword)

export default connect(
  mapStateToProps,
  {
    setCart,
    sendEmailForChangeForgotPassword,
  })(RestorePasswordContainer)
