import {connect} from "react-redux";
import {
    login,
    // loginAdmin
} from "../../redux/reducers/authReducer/thunks";
import {withRouter} from "react-router-dom";
import Login from "../../Components/basics/Login/Login";

const mapStateToProps = ({auth}) => {

    return {
        isAuth: auth.isAuth,
        isFetching: auth.isFetching,
        errorMessage: auth.loginErrMsg,
        adminErrorMessage: auth.loginAdminErrMsg,
    }
};

const LoginWithRouter = withRouter(Login);

export default connect(
    mapStateToProps,
    {
        login,
        //loginAdmin
    })(LoginWithRouter);
