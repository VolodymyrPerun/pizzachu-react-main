import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "../../Components/pages/Profile/Profile";
import {updateUserDates, updateUserProfilePhoto} from "../../redux/reducers/authReducer/thunks";

const mapStateToProps = ({auth}) => {

    return {
        me: auth.me,
        isAuth: auth.isAuth,
        isFetching: auth.isFetching,
        errorMessage: auth.loginErrMsg,
        adminErrorMessage: auth.loginAdminErrMsg,
        updateUserPhotoErrMsg: auth.updateUserPhotoErrMsg
    }
};

const LoginWithRouter = withRouter(Profile);

export default connect(
    mapStateToProps,
    {
        updateUserDates,
        updateUserProfilePhoto,
    })(Profile);
