import {
  SET_PAGE_SIZE,
  SET_CURRENT_PAGE,
  TOGGLE_CLOSED_COMMENTS,
  SET_REPLY_COMMENTS_INFO,
  SET_TOTAL_REPLY_COMMENT_COUNT,
} from './constants'
//////////////////////////////////////////////////

const initialState = {
  pageSize: 3,
  currentPage: 1,
  isClosed: false,
  replyCommentsInfo: [],
  totalReplyCommentsCount: 0,
}

const replyCommentsReducer = (
  state
    = initialState,
  action,
) => {
  switch (action.type) {
    case SET_REPLY_COMMENTS_INFO :
      return {
        ...state,
        replyCommentsInfo: action.payload,
      }
    case SET_TOTAL_REPLY_COMMENT_COUNT :
      return {
        ...state,
        totalReplyCommentsCount: action.payload,
      }
    case SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload,
      }
    case SET_CURRENT_PAGE :
      return {
        ...state,
        currentPage: action.payload,
      }
    case TOGGLE_CLOSED_COMMENTS :
      return {
        ...state,
        isClosed: action.payload,
      }
    default :
      return state
  }
}

export default replyCommentsReducer
