import {connect} from 'react-redux';
import {OrderMessage} from "../../Components/basics/OrderMessage/OrderMessage";

const mapStateToProps = ({auth}) => ({
    isAuth: auth.isAuth,
    me: auth.me
});

export default connect(mapStateToProps)(OrderMessage);
