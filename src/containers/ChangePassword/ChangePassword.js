import {connect} from "react-redux";
import {changeUserPassword} from "../../redux/reducers/authReducer/thunks";
import {withRouter} from "react-router-dom";
import {setCart} from "../../redux/reducers/cartReducer/actions";
import ChangePassword from "../../Components/basics/ChangePassword/ChangePassword";


const mapStateToProps = ({auth, cart}) => {

    return {
        isAuth: auth.isAuth,
        isFetching: auth.isFetching,
        errorMessage: auth.loginErrMsg,
        cart: cart.cart
    }
};

const ChangePasswordContainer = withRouter(ChangePassword);

export default connect(
    mapStateToProps,
    {
        changeUserPassword,
        setCart
    })(ChangePasswordContainer);
