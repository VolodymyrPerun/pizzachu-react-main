import {commentAPI} from "../../../API/commentAPI/commentAPI";
import {reset} from "redux-form";
import {refreshUserToken} from "../refreshReducer/thunks";
import {setCommentInfo, setCurrentPage, setIsLoading, setPageSize, setTotalCommentsCount} from "./actions";
import {CUSTOM_ERRORS} from "../../../constants";


export const getCommentsFromDB = (productId, pageSize, currentPage) => async dispatch => {

    try {
        dispatch(setIsLoading(true));
        dispatch(setCurrentPage(currentPage));

        const commentsInfo = await commentAPI.getAllComments(productId, pageSize, currentPage);

        dispatch(setCommentInfo(commentsInfo.data.comments));
        dispatch(setTotalCommentsCount(commentsInfo.data.commentsCount));
        dispatch(setIsLoading(false));

    } catch (e) {
        dispatch(setIsLoading(false));
    }

};

export const sendComment = (productId, data, pageSize, currentPage) => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        await commentAPI.postComment(productId, data);

        const commentsInfo = await commentAPI.getAllComments(productId, pageSize, currentPage);

        dispatch(setCommentInfo(commentsInfo.data.comments));
        dispatch(setTotalCommentsCount(commentsInfo.data.commentsCount));
        dispatch(setIsLoading(false));
        dispatch(reset('comment'));

    } catch (e) {
        dispatch(setIsLoading(false));

        if (e.response.data.code === CUSTOM_ERRORS[4012].code) {
            dispatch(refreshUserToken());
            dispatch(sendComment(productId, data, pageSize, currentPage));
        }
    }
};

export const editChosenComment = (comment_id, data, productId, pageSize, currentPage) => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        await commentAPI.editComment(comment_id, data);

        dispatch(setCurrentPage(currentPage));
        dispatch(setPageSize(pageSize));

        const commentsInfo = await commentAPI.getAllComments(productId, pageSize, currentPage);

        dispatch(setCommentInfo(commentsInfo.data.comments));
        dispatch(setTotalCommentsCount(commentsInfo.data.commentsCount));
        dispatch(setIsLoading(false));

    } catch (e) {
        dispatch(setIsLoading(false));

        if (e.response.data.code === CUSTOM_ERRORS[4012].code) {
            dispatch(refreshUserToken());
            dispatch(editChosenComment(comment_id, data, productId, pageSize, currentPage))
        }

    }
};

export const deleteChosenComment = (comment_id, productId, pageSize, currentPage) => async dispatch => {

    try {
        dispatch(setIsLoading(true));

        await commentAPI.deleteComment(comment_id);

        dispatch(setCurrentPage(currentPage));
        dispatch(setPageSize(pageSize));

        const commentsInfo = await commentAPI.getAllComments(productId, pageSize, currentPage);

        dispatch(setCommentInfo(commentsInfo.data.comments));
        dispatch(setTotalCommentsCount(commentsInfo.data.commentsCount));
        dispatch(setIsLoading(false));

    } catch (e) {
        dispatch(setIsLoading(false));

        if (e.response.data.code === CUSTOM_ERRORS[4012].code) {
            dispatch(refreshUserToken());
            dispatch(deleteChosenComment(comment_id, productId, pageSize, currentPage))
        }
    }
};
