import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { ProductPage } from '../../components/pages/ProductPage/ProductPage'
import { setCurrentPage } from '../../redux/reducers/commentsReducer/actions'
import { getProductById } from '../../redux/reducers/productPageReducer/thunks'
import {
  getCart,
  addProductToCart,
} from '../../redux/reducers/cartReducer/thunks'
import {
  sendComment,
  getCommentsFromDB,
  editChosenComment,
  deleteChosenComment,
} from '../../redux/reducers/commentsReducer/thunks'
import {
  sendReplyComment,
  editChosenReplyComment,
  getReplyCommentsFromDB,
  deleteChosenReplyComment,
} from '../../redux/reducers/replyCommentsReducer/thunks'
import {
  setProductMark,
  getIsEvaluatedProduct,
  getAverageProductMark,
} from '../../redux/reducers/productMarkReducer/thunks'
//////////////////////////////////////////////////

const mapStateToProps = ({
  auth,
  comments,
  productMark,
  productPage,
  productsPage,
  replyComments,
}) => ({
  myID: auth.myID,
  isAuth: auth.isAuth,
  mark: productMark.mark,
  pageSize: comments.pageSize,
  product: productPage.product,
  pageCount: comments.pageCount,
  products: productsPage.products,
  isClosed: replyComments.isClosed,
  commentInfo: comments.commentInfo,
  currentPage: comments.currentPage,
  isFetching: productPage.isFetching,
  isEvaluated: productMark.isEvaluated,
  isMarkLoading: productMark.isMarkLoading,
  isLoadingComments: comments.isLoadingComments,
  pageSizeFoReplyComments: replyComments.pageSize,
  replyCommentsInfo: replyComments.replyCommentsInfo,
  currentPageFoReplyComments: replyComments.currentPage,
  totalReplyCommentsCount: replyComments.totalReplyCommentsCount,
})

export default compose(
  connect(mapStateToProps, {
    getCart,
    sendComment,
    getProductById,
    setCurrentPage,
    setProductMark,
    sendReplyComment,
    addProductToCart,
    getCommentsFromDB,
    editChosenComment,
    deleteChosenComment,
    getIsEvaluatedProduct,
    getAverageProductMark,
    getReplyCommentsFromDB,
    editChosenReplyComment,
    deleteChosenReplyComment,
  }),
  withRouter)(ProductPage)
