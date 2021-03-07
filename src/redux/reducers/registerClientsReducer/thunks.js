import {registerClientsAPI} from "../../../API/registerClientsAPI/registerClientsAPI";
import {setIsFetching, setRegisterErrMsg, setRegisterSuccess} from "./actions";
import {CUSTOM_ERRORS} from "../../../constants";


export const registerClient = (
    user_photo,
    email,
    phone,
    name,
    surname,
    age,
    password,
    gender_id,
    city,
    street,
    house,
    apartment,
    entrance,
    floor) => async dispatch => {

    try {
        const response = await registerClientsAPI.registerClient(
            user_photo,
            email,
            phone,
            name,
            surname,
            age,
            password,
            gender_id,
            city,
            street,
            house,
            apartment,
            entrance,
            floor);

        if (response) {
            dispatch(setRegisterSuccess(true));
            dispatch(setIsFetching(true));
            dispatch(setRegisterErrMsg(null));
        }

    } catch (e) {
        dispatch(setIsFetching(true));

        if (e.response.data.code) {
            dispatch(setRegisterErrMsg(CUSTOM_ERRORS[e.response.data.code].message));
        }
    }
};

// export const getAllClientPurchases = (pageSize, currentPage) => async dispatch => {
//     const token = checkAccessTokenPresent();
//     dispatch(setIsFetching(true));
//     let response = await purchaseAPI.getAllClientPurchases(pageSize, currentPage, token);
//     dispatch(setIsFetching(false));
//     dispatch(setPurchase(response.data.purchase));
//     dispatch(setPurchasesLength(response.data.length))
//     dispatch(setTotalPurchasesCount(response.data.total));
// };
