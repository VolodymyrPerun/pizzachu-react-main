import { connect } from 'react-redux'
import { registerClient } from '../../redux/reducers/registerClientsReducer/thunks'
import RegisterClients from '../../components/basics/RegisterClients/RegisterClients'
//////////////////////////////////////////////////

const mapStateToProps = ({ auth, registerClients }) => ({
  me: auth.me,
  isAuth: auth.isAuth,
  isFetching: registerClients.isFetching,
  errorMessage: registerClients.registerErrMsg,
  isRegisterSuccess: registerClients.isRegisterSuccess,
})

export default connect(mapStateToProps, {
  registerClient,
})(RegisterClients)
