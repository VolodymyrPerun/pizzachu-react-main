import {connect} from "react-redux";
import {
    login,
    // loginAdmin
} from "../../redux/reducers/authReducer/thunks";
import {withRouter} from "react-router-dom";
import Login from "../../Components/basics/Login/Login";
import {setCart} from "../../redux/reducers/cartReducer/actions";

const mapStateToProps = ({auth, cart}) => {

    return {
        isAuth: auth.isAuth,
        isFetching: auth.isFetching,
        errorMessage: auth.loginErrMsg,
        adminErrorMessage: auth.loginAdminErrMsg,
        cart: cart.cart
    }
};

const LoginWithRouter = withRouter(Login);

export default connect(
    mapStateToProps,
    {
        login,
        setCart
        //loginAdmin
    })(LoginWithRouter);
