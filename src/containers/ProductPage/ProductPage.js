import {connect} from 'react-redux';
import {ProductPage} from "../../Components/pages/ProductPage/ProductPage";
import {getProductById} from "../../redux/reducers/productPageReducer/thunks";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {addProductToCart, getCart} from "../../redux/reducers/cartReducer/thunks";
import {
    deleteChosenComment,
    editChosenComment,
    getCommentsFromDB,
    sendComment
} from "../../redux/reducers/commentsReducer/thunks";
import {setCurrentPage} from "../../redux/reducers/commentsReducer/actions";
import {
    deleteChosenReplyComment,
    editChosenReplyComment,
    getReplyCommentsFromDB,
    sendReplyComment
} from "../../redux/reducers/replyCommentsReducer/thunks";
import {
    getAverageProductMark,
    getIsEvaluatedProduct,
    setProductMark,
} from "../../redux/reducers/productMarkReducer/thunks";


const mapStateToProps = ({productPage, productsPage, auth, comments, replyComments, productMark}) => ({
    product: productPage.product,
    isFetching: productPage.isFetching,
    products: productsPage.products,
    isLoadingComments: comments.isLoadingComments,
    commentInfo: comments.commentInfo,
    pageCount: comments.pageCount,
    currentPage: comments.currentPage,
    pageSize: comments.pageSize,
    replyCommentsInfo: replyComments.replyCommentsInfo,
    totalReplyCommentsCount: replyComments.totalReplyCommentsCount,
    isClosed: replyComments.isClosed,
    currentPageFoReplyComments: replyComments.currentPage,
    pageSizeFoReplyComments: replyComments.pageSize,
    isAuth: auth.isAuth,
    myID: auth.myID,
    mark: productMark.mark,
    isEvaluated: productMark.isEvaluated,
    isMarkLoading: productMark.isMarkLoading,
});


export default compose(
    connect(mapStateToProps, {
        getProductById,
        addProductToCart,
        getCart,
        getCommentsFromDB,
        sendComment,
        deleteChosenComment,
        editChosenComment,
        setCurrentPage,
        getReplyCommentsFromDB,
        deleteChosenReplyComment,
        editChosenReplyComment,
        sendReplyComment,
        getIsEvaluatedProduct,
        setProductMark,
        getAverageProductMark
    }),
    withRouter)(ProductPage);
