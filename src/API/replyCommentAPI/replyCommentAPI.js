import instance from '../../helpers/api'
import { AUTHORIZATION } from '../../constants/authConstants/header.enum'
import { checkAccessTokenPresent } from '../../helpers/checkAccessTokenPresent'
//////////////////////////////////////////////////

export const replyCommentAPI = {

  getAllReplyComments: (commentId, pageSize = 3, currentPage = 1) =>
    instance.get(
      `/reply-comments?id=${commentId}&limit=${pageSize}&page=${currentPage}`,
    ),

  postReplyComment: (commentId, commentData) => {
    const token = checkAccessTokenPresent()
    return instance.post(`/reply-comments?id=${commentId}`, commentData, {
      headers: {
        [AUTHORIZATION]: token,
      },
    })
  },
  deleteReplyComment: commentId => {
    const token = checkAccessTokenPresent()
    return instance.delete(`/reply-comments?id=${commentId}`, {
      headers: {
        [AUTHORIZATION]: token,
      },
    })
  },
  editReplyComment: (commentId, commentData) => {
    const token = checkAccessTokenPresent()
    return instance.put(
      `/reply-comments?id=${commentId}`, { text: commentData }, {
        headers: {
          [AUTHORIZATION]: token,
        },
      })
  },
}
