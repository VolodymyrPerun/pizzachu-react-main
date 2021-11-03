import { reset } from 'redux-form'
import { CUSTOM_ERRORS } from '../../../constants'
import { setIsLoading } from '../commentsReducer/actions'
import { refreshUserToken } from '../refreshReducer/thunks'
import { setReplyCommentInfo, setTotalReplyCommentsCount } from './actions'
import { replyCommentAPI } from '../../../api/replyCommentAPI/replyCommentAPI'
//////////////////////////////////////////////////

export const getReplyCommentsFromDB = (commentId, pageSize, currentPage) => async dispatch => {
  try {
    // dispatch(setIsLoading(true));
    const replyCommentInfo = await replyCommentAPI.getAllReplyComments(commentId, pageSize, currentPage);

    dispatch(setReplyCommentInfo(replyCommentInfo.data.comments));
    dispatch(setTotalReplyCommentsCount(replyCommentInfo.data.commentsCount));
    // dispatch(setIsLoading(false));
  } catch (e) {
    //   dispatch(setIsLoading(false));
  }
};

export const sendReplyComment = (commentId, data) => async dispatch => {
  try {
    dispatch(setIsLoading(true));

    await replyCommentAPI.postReplyComment(commentId, data);

    const commentsInfo = await replyCommentAPI.getAllReplyComments(commentId);

    dispatch(setReplyCommentInfo(commentsInfo.data.comments));
    dispatch(setTotalReplyCommentsCount(commentsInfo.data.commentsCount));
    dispatch(setIsLoading(false));
    dispatch(reset('replyComment'));

  } catch (e) {
    dispatch(setIsLoading(false));

    if (e.response.data.code === CUSTOM_ERRORS[4012].code) {
      dispatch(refreshUserToken());
      dispatch(sendReplyComment(commentId, data));
    }
  }
};

export const editChosenReplyComment = (commentId, data) => async dispatch => {
  try {
    dispatch(setIsLoading(true));

    await replyCommentAPI.editReplyComment(commentId, data);

    const commentsInfo = await replyCommentAPI.getAllReplyComments(commentId);

    dispatch(setReplyCommentInfo(commentsInfo.data.comments));
    dispatch(setTotalReplyCommentsCount(commentsInfo.data.commentsCount));
    dispatch(setIsLoading(false));

  } catch (e) {
    dispatch(setIsLoading(false));

    if (e.response.data.code === CUSTOM_ERRORS[4012].code) {
      dispatch(refreshUserToken());
      dispatch(editChosenReplyComment(commentId, data));
    }
  }
};

export const deleteChosenReplyComment = (commentId) => async dispatch => {
  try {
    dispatch(setIsLoading(true));

    await replyCommentAPI.deleteReplyComment(commentId);

    const commentsInfo = await replyCommentAPI.getAllReplyComments(commentId);

    dispatch(setReplyCommentInfo(commentsInfo.data.comments));
    dispatch(setTotalReplyCommentsCount(commentsInfo.data.commentsCount));
    dispatch(setIsLoading(false));

  } catch (e) {
    dispatch(setIsLoading(false));

    if (e.response.data.code === CUSTOM_ERRORS[4012].code) {
      dispatch(refreshUserToken());
      dispatch(deleteChosenReplyComment(commentId));
    }
  }
};
