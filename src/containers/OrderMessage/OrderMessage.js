import { connect } from 'react-redux'
import { OrderMessage } from '../../components/basics/OrderMessage/OrderMessage'
//////////////////////////////////////////////////

const mapStateToProps = ({ auth }) => ({
  me: auth.me,
  isAuth: auth.isAuth,
})

export default connect(mapStateToProps)(OrderMessage)
