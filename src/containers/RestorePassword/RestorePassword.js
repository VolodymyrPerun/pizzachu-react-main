import {connect} from "react-redux";
import {sendEmailForChangeForgotPassword,} from "../../redux/reducers/authReducer/thunks";
import {withRouter} from "react-router-dom";
import {setCart} from "../../redux/reducers/cartReducer/actions";
import RestorePassword from "../../Components/basics/RestorePassword/RestorePassword";


const mapStateToProps = ({auth, cart}) => {

    return {
        isAuth: auth.isAuth,
        isFetching: auth.isFetching,
        errorMessage: auth.loginErrMsg,
        adminErrorMessage: auth.loginAdminErrMsg,
        cart: cart.cart
    }
};

const RestorePasswordContainer = withRouter(RestorePassword);

export default connect(
    mapStateToProps,
    {
        sendEmailForChangeForgotPassword,
        setCart
    })(RestorePasswordContainer);
