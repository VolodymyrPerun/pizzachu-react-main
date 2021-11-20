import { orderBy } from 'lodash'
import { connect } from 'react-redux'
import Products from '../../Components/basics/Products/Products'
import { getAllProducts } from '../../redux/reducers/productsReducer/thunks'
import { setCurrentPage } from '../../redux/reducers/productsReducer/actions'
import {
  setFilter,
  setSearchQuery,
} from '../../redux/reducers/filterReducer/actions'
import {
  getCart,
  addProductToCart,
} from '../../redux/reducers/cartReducer/thunks'
//////////////////////////////////////////////////

const sortBy = (products, filterBy) => {
  switch (filterBy) {
    case 'name':
      return orderBy(products, 'name', 'asc')
    case 'price_high':
      return orderBy(products, 'price', 'desc')
    case 'price_low':
      return orderBy(products, 'price', 'asc')
    case 'weight_high':
      return orderBy(products, 'weight', 'desc')
    case 'weight_low':
      return orderBy(products, 'weight', 'asc')
    default:
      return products
  }
}

const filterProducts = (products, searchQuery) =>
  products.filter(
    o =>
      o.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.description.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
  )

const searchProducts = (products, filterBy, searchQuery) => sortBy(
  filterProducts(products, searchQuery), filterBy)

const mapStateToProps = ({ filter, productsPage }) => ({
  type: productsPage.type,
  total: productsPage.total,
  size_id: productsPage.size_id,
  section: productsPage.section,
  pageSize: productsPage.pageSize,
  isFetching: productsPage.isFetching,
  products: productsPage.products && searchProducts(
    productsPage.products &&
    sortBy(productsPage.products, 'name'),
    filter.filterBy, filter.searchQuery),
})

export default connect(mapStateToProps, {
  getCart,
  setFilter,
  getAllProducts,
  setCurrentPage,
  setSearchQuery,
  addProductToCart,
})(Products)
