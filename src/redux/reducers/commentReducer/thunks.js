import {commentAPI} from "../../../API/commentAPI/commentAPI";
import {reset} from "redux-form";
import {refreshUserToken} from "../refreshReducer/thunks";
import {setCommentInfo, setCurrentPage, setIsLoading, setTotalCommentsCount} from "./actions";
import {CUSTOM_ERRORS} from "../../../constants";

export const getCommentsFromDB = (productId, commentsCount, currentPage) => async dispatch => {

    try {
        dispatch(setIsLoading(true));
        dispatch(setCurrentPage(currentPage));

        const commentsInfo = await commentAPI.getAllComments(productId, commentsCount, currentPage);

        dispatch(setCommentInfo(commentsInfo.data.comments));
        dispatch(setTotalCommentsCount(commentsInfo.data.commentsCount));
        dispatch(setIsLoading(false));

    } catch (e) {
        dispatch(setIsLoading(false));
    }

};

export const sendComment = (productId, data, commentsCount, currentPage) => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        await commentAPI.postComment(productId, data);

        const commentsInfo = await commentAPI.getAllComments(productId, commentsCount, currentPage);

        dispatch(setCommentInfo(commentsInfo.data.comments));
        dispatch(setTotalCommentsCount(commentsInfo.data.commentsCount));
        dispatch(setIsLoading(false));
        dispatch(reset('comment'));

    } catch (e) {
        dispatch(setIsLoading(false));

        if (e.response.data.code === CUSTOM_ERRORS[4012].code) {
            dispatch(refreshUserToken());
            dispatch(sendComment(data, productId, commentsCount, currentPage))
        }
    }

};

export const editChosenComment = (comment_id, data, productId, commentsCount, currentPage) => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        debugger

        await commentAPI.editComment(comment_id, data);

        dispatch(setCurrentPage(currentPage));

        const commentsInfo = await commentAPI.getAllComments(productId, commentsCount, currentPage);

        debugger

        dispatch(setCommentInfo(commentsInfo.data.comments));
        dispatch(setTotalCommentsCount(commentsInfo.data.commentsCount));
        dispatch(setIsLoading(false));

    } catch (e) {
        dispatch(setIsLoading(false));

        if (e.response.data.code === CUSTOM_ERRORS[4012].code) {
            dispatch(refreshUserToken());
            dispatch(editChosenComment(comment_id, data, commentsCount, currentPage))
        }

    }
};

export const deleteChosenComment = (comment_id, productId, commentsCount, currentPage) => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        await commentAPI.deleteComment(comment_id);

        dispatch(setCurrentPage(currentPage));
        dispatch(setTotalCommentsCount(commentsCount));

        const commentsInfo = await commentAPI.getAllComments(productId, commentsCount, currentPage);

        dispatch(setCommentInfo(commentsInfo.data.comments));
        dispatch(setTotalCommentsCount(commentsInfo.data.commentsCount));
        dispatch(setIsLoading(false));

    } catch (e) {
        dispatch(setIsLoading(false));

        if (e.response.data.code === CUSTOM_ERRORS[4012].code) {
            dispatch(refreshUserToken());
            dispatch(deleteChosenComment(comment_id, commentsCount, currentPage))
        }

    }
};
