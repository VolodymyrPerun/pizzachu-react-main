import {connect} from 'react-redux';
import {getAllClientPurchases} from "../../redux/reducers/purchaseReducer/thunks";
import {orderBy} from "lodash";
import Orders from "../../Components/basics/Orders/Orders";


const sortBy = (purchases, filterBy) => {
    switch (filterBy) {
        case 'created_at':
           return orderBy(purchases, 'created_at', 'asc');
        default:
            return purchases;
    }
};

const mapStateToProps = ({auth, purchase}) => ({
    isAuth: auth.isAuth,
    purchases: purchase.purchases
        &&  purchase.purchases && sortBy(purchase.purchases, 'created_at')
});

export default connect(mapStateToProps, {
    getAllClientPurchases
})(Orders);
