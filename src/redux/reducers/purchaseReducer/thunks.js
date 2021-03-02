import {purchaseAPI} from "../../../API/purchaseAPI/purchaseAPI";
import {checkAccessTokenPresent} from "../../../helpers/checkAccessTokenPresent";
import {setIsFetching, setPurchase, setTempId, setTotalPurchasesCount} from "./actions";


export const addPurchase = (email,
                            phone,
                            name,
                            city,
                            street,
                            house,
                            apartment,
                            entrance,
                            floor) => async dispatch => {

    let tempId = localStorage.getItem('tempId');
    const token = checkAccessTokenPresent();

    if (token) {
        await purchaseAPI.addPurchase(
            email,
            phone,
            name,
            city,
            street,
            house,
            apartment,
            entrance,
            floor,token);

    } else if (!token) {
        dispatch(setTempId(tempId));
        await purchaseAPI.addUnauthorizedPurchase(tempId,
            email,
            phone,
            name,
            city,
            street,
            house,
            apartment,
            entrance,
            floor);
    }
};

export const getAllClientPurchases = (pageSize, currentPage) => async dispatch => {
    const token = checkAccessTokenPresent();
    dispatch(setIsFetching(true));
    let response = await purchaseAPI.getAllClientPurchases(pageSize, currentPage, token);
    dispatch(setIsFetching(false));
    dispatch(setPurchase(response.data.purchase));
    dispatch(setTotalPurchasesCount(response.data.total));
};
