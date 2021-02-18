import {connect} from 'react-redux';
import {ProductPage} from "../../Components/pages/ProductPage/ProductPage";
import {getProductById} from "../../redux/reducers/productPageReducer/thunks";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


const mapStateToProps = ({productPage, productsPage}) => ({
    product: productPage.product,
    isFetching: productPage.isFetching,
    products: productsPage.products
});


export default compose(
    connect(mapStateToProps, {getProductById}),
    withRouter)(ProductPage);
