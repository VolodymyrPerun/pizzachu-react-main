import {
  SET_PAGE_SIZE,
  SET_CURRENT_PAGE,
  TOGGLE_CLOSED_COMMENTS,
  SET_REPLY_COMMENTS_INFO,
  SET_TOTAL_REPLY_COMMENT_COUNT,
} from './constants'
//////////////////////////////////////////////////

export const setPageSize = payload => ({ type: SET_PAGE_SIZE, payload })
export const setCurrentPage = payload => ({ type: SET_CURRENT_PAGE, payload })
export const setReplyCommentInfo = payload => ({
  type: SET_REPLY_COMMENTS_INFO,
  payload,
})
export const setTotalReplyCommentsCount = payload => ({
  type: SET_TOTAL_REPLY_COMMENT_COUNT,
  payload,
})
export const setToggleClosedComments = payload => ({
  type: TOGGLE_CLOSED_COMMENTS,
  payload,
})
