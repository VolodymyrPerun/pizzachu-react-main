import instance from '../../helpers/API';
import {AUTHORIZATION} from "../../constants/authConstants/header.enum";
import {checkAccessTokenPresent} from "../../helpers/checkAccessTokenPresent";

export const commentAPI = {

    getAllComments: (productId, pageSize = 5, currentPage = 1) => {
        return instance.get(`/comments?productId=${productId}&limit=${pageSize}&page=${currentPage}`)
    },

    postComment: (productId, commentData) => {
        const token = checkAccessTokenPresent();
        return instance.post(`/comments?productId=${productId}`, commentData, {
            headers: {
                [AUTHORIZATION]: token
            }
        })
    },
    deleteComment: comment_id => {
        const token = checkAccessTokenPresent();
        return instance.delete(`/comments?id=${comment_id}`, {
            headers: {
                [AUTHORIZATION]: token
            }
        })
    },
    editComment: (comment_id, commentData) => {
        const token = checkAccessTokenPresent();
        return instance.put(
            `/comments?id=${comment_id}`, {text: commentData}, {
                headers: {
                    [AUTHORIZATION]: token
                }
            })
    }
};
