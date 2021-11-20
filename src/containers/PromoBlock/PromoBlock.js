import { connect } from 'react-redux'
import PromoBlock from '../../Components/basics/Products/PromoBlock/PromoBlock'
import { getAllPromoProducts } from '../../redux/reducers/promoBlockReducer/thunks'
//////////////////////////////////////////////////

const mapStateToProps = ({ promo }) => ({
  products: promo.products,
  isFetching: promo.isFetching,
})

export default connect(mapStateToProps, {
  getAllPromoProducts,
})(PromoBlock)
