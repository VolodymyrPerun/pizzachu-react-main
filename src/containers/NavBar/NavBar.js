import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logout } from '../../redux/reducers/authReducer/thunks'
import NavBar from '../../components/basics/Header/NavBar/NavBar'
import { setCart } from '../../redux/reducers/cartReducer/actions'
//////////////////////////////////////////////////

const mapStateToProps = ({ auth, cart }) => ({
  me: auth.me,
  cart: cart.cart,
  isAuth: auth.isAuth,
})

const LoginWithRouter = withRouter(NavBar)

export default connect(
  mapStateToProps,
  { logout, setCart },
)(LoginWithRouter)
