import {
    SET_CURRENT_PAGE,
    SET_PAGE_SIZE,
    SET_PURCHASE_ERR_MSG,
    SET_PURCHASE_SUCCESS,
    SET_PURCHASES,
    SET_PURCHASES_LENGTH,
    SET_TEMP_ID,
    SET_TOTAL_PURCHASES_COUNT,
    TOGGLE_IS_FETCHING
} from "./constants";
import {PAGE_DEFAULT} from "../../../constants";


const initialState = {
    purchases: [],
    tempId: null,
    pageSize: PAGE_DEFAULT.PAGE_SIZE,
    total: 0,
    length: 0,
    currentPage: PAGE_DEFAULT.CURRENT_PAGE,
    purchaseErrMsg: null,
    isPurchaseSuccess: null,
    isFetching: true
};

const purchaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PURCHASES:
            return {
                ...state,
                purchases: action.payload
            }
        case SET_TEMP_ID:
            return {
                ...state,
                tempId: action.payload
            }
        case SET_TOTAL_PURCHASES_COUNT:
            return {
                ...state,
                total: action.payload
            }
        case SET_PURCHASES_LENGTH:
            return {
                ...state,
                length: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.payload
            }
        case SET_PURCHASE_ERR_MSG:
            return {
                ...state,
                purchaseErrMsg: action.payload
            };
        case SET_PURCHASE_SUCCESS:
            return {
                ...state,
                isPurchaseSuccess: action.payload
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state;
    }
};

export default purchaseReducer;
