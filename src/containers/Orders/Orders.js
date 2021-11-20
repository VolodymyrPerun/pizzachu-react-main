import { connect } from 'react-redux'
import { getAllClientPurchases } from '../../redux/reducers/purchaseReducer/thunks'
import { orderBy } from 'lodash'
import Orders from '../../Components/basics/Orders/Orders'
import {
  setPageSize,
  setCurrentPage,
} from '../../redux/reducers/purchaseReducer/actions'
//////////////////////////////////////////////////

const sortBy = (purchases, filterBy) => {
  switch (filterBy) {
    case 'created_at':
      return orderBy(purchases.filter(
        (set => f => !set.has(f.created_at) && set.add(f.created_at))(
          new Set())), 'created_at', 'desc')
    default:
      return purchases
  }
}

const mapStateToProps = ({ auth, purchase }) => ({
  isAuth: auth.isAuth,
  length: purchase.length,
  pageSize: purchase.pageSize,
  errorMessage: purchase.purchaseErrMsg,
  purchases: purchase.purchases
    && purchase.purchases && sortBy(purchase.purchases, 'created_at'),
})

export default connect(mapStateToProps, {
  setPageSize,
  setCurrentPage,
  getAllClientPurchases,
})(Orders)
