import {
    SET_CURRENT_PAGE,
    SET_PAGE_SIZE,
    SET_REPLY_COMMENTS_INFO,
    SET_TOTAL_REPLY_COMMENT_COUNT,
    TOGGLE_CLOSED_COMMENTS
} from "./constants";


const initialState = {
    replyCommentsInfo: [],
    totalReplyCommentsCount: 0,
    pageSize: 3,
    currentPage: 1,
    isClosed: false,
};

const replyCommentsReducer = (
    state
        = initialState,
    action
) => {
    switch (action.type) {

        case SET_REPLY_COMMENTS_INFO :
            return {
                ...state,
                replyCommentsInfo: action.payload
            };
        case SET_TOTAL_REPLY_COMMENT_COUNT :
            return {
                ...state,
                totalReplyCommentsCount: action.payload
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
        case TOGGLE_CLOSED_COMMENTS :
            return {
                ...state,
                isClosed: action.payload
            };
        default :
            return state
    }
};

export default replyCommentsReducer;
