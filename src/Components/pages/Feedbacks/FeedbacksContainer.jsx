import {addMessage, setIsFetching} from '../../../redux/reducers/dialogsReducer/actions';
import Feedbacks from "./Feedbacks";
import {connect} from 'react-redux';
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = ({messagesPage, auth}) => {

    return {
        messagesPage,
        isAuth: auth.isAuth,
        isFetching: messagesPage.isFetching
    }
};

export default compose(
    connect(mapStateToProps, {addMessage, setIsFetching}),
    withAuthRedirect
)(Feedbacks);
