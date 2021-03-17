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
} from "../../redux/reducers/commentReducer/thunks";
import {setCurrentPage} from "../../redux/reducers/commentReducer/actions";


const mapStateToProps = ({productPage, productsPage, auth, comments}) => ({
    product: productPage.product,
    isFetching: productPage.isFetching,
    products: productsPage.products,
    isLoadingComments: comments.isLoadingComments,
    commentInfo:comments.commentInfo,
    pageCount: comments.pageCount,
    currentPage: comments.currentPage,
    pageSize: comments.pageSize,
    isAuth: auth.isAuth,
    myID: auth.myID,
    me: auth.me,
    averageRate: comments.averageRate
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
        setCurrentPage
    }),
    withRouter)(ProductPage);
