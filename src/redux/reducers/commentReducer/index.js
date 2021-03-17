import {
    SET_COMMENT_INFO,
    SET_CURRENT_PAGE,
    SET_LOADING_PROGRESS,
    SET_TOTAL_PAGES_COUNT,
    SET_PAGE_SIZE
} from "./constants";


const initialState = {
    commentInfo: [],
    pageCount: null,
    pageSize: 5,
    currentPage: 1,
    isLoading: false
};

const commentReducer = (
    state
        = initialState,
    action
) => {
    switch (action.type) {

        case SET_COMMENT_INFO :
            return {
                ...state,
                commentInfo: action.payload
            };
        case SET_TOTAL_PAGES_COUNT :
            return {
                ...state,
                pageCount: action.payload
            };
        case SET_PAGE_SIZE:
            return {
                ...state,
                pageSize: action.payload
            }
        case SET_CURRENT_PAGE :
            return {
                ...state,
                currentPage: action.payload
            };
        case SET_LOADING_PROGRESS:
            return {
                ...state,
                isLoading: action.payload
            };
        default :
            return state
    }
};

export default commentReducer;
