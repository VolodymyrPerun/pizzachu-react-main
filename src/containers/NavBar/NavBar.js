import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import NavBar from "../../Components/basics/Header/NavBar/NavBar";
import {logout} from "../../redux/reducers/authReducer/thunks";
import {setCart} from "../../redux/reducers/cartReducer/actions";


const mapStateToProps = ({auth, cart}) => {

    return {
        isAuth: auth.isAuth,
        me: auth.me,
        cart: cart.cart
    }
};

const LoginWithRouter = withRouter(NavBar);

export default connect(
    mapStateToProps,
    {logout, setCart}
)(LoginWithRouter);
