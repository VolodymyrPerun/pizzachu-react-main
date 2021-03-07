import {connect} from 'react-redux';
import RegisterClients from "../../Components/basics/RegisterClients/RegisterClients";
import {registerClient} from "../../redux/reducers/registerClientsReducer/thunks";


const mapStateToProps = ({auth, registerClients}) => ({
    isAuth: auth.isAuth,
    me: auth.me,
    errorMessage: registerClients.registerErrMsg,
    isFetching: registerClients.isFetching,
    isRegisterSuccess: registerClients.isRegisterSuccess
});

export default connect(mapStateToProps, {
    registerClient
})(RegisterClients);
