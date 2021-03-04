import {connect} from 'react-redux';
import {getAllClientPurchases} from "../../redux/reducers/purchaseReducer/thunks";
import {orderBy} from "lodash";
import Orders from "../../Components/basics/Orders/Orders";
import {setCurrentPage, setPageSize} from "../../redux/reducers/purchaseReducer/actions";


const sortBy = (purchases, filterBy) => {
    switch (filterBy) {
        case 'created_at':
           return orderBy(purchases.filter((set => f => !set.has(f.created_at) && set.add(f.created_at))(new Set())), 'created_at', 'asc');
        default:
            return purchases;
    }
};

const mapStateToProps = ({auth, purchase}) => ({
    isAuth: auth.isAuth,
    pageSize: purchase.pageSize,
    length: purchase.length,
    purchases: purchase.purchases
        && purchase.purchases && sortBy(purchase.purchases, 'created_at')
});

export default connect(mapStateToProps, {
    setCurrentPage,
    setPageSize,
    getAllClientPurchases
})(Orders);
