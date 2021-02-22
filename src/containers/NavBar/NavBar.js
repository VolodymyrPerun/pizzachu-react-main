import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import NavBar from "../../Components/basics/Header/NavBar/NavBar";

const mapStateToProps = ({auth}) => {

    return {
        isAuth: auth.isAuth
    }
};

const LoginWithRouter = withRouter(NavBar);

export default connect(
    mapStateToProps)(LoginWithRouter);
