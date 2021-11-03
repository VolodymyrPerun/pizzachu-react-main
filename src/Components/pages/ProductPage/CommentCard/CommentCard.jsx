import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import styles from './CommentCard.module.scss'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { configs } from '../../../../config/configs'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReplyCommentCard from '../ReplyCommentCard/ReplyCommentCard'
import { ReplyCommentForm } from '../ReplyCommentForm/ReplyCommentForm'
import defaultAvatar from '../../../../assets/images/default avatar.jpg'
import {
  faReply,
  faAngleUp,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons'
//////////////////////////////////////////////////

const CommentCard = (
  {
    name,
    isAuth,
    surname,
    isOwner,
    commentId,
    productId,
    user_photo,
    commentText,
    commentTime,
    currentPage,
    sendReplyComment,
    editChosenComment,
    replyCommentsInfo,
    deleteChosenComment,
    getReplyCommentsFromDB,
    editChosenReplyComment,
    deleteChosenReplyComment,
  },
) => {

  const useStyles = makeStyles((theme) => ({
    button: {
      width: 120,
      height: 32,
      borderRadius: 10,
      margin: theme.spacing(1),
      textTransform: 'capitalize',
    },
  }))
  const classes = useStyles()

  const [comment, setComment] = useState(commentText)
  let [pageSize, setPageSize] = useState(3)
  const [active, setIsActive] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [isClosed, setIsClosed] = useState(false)
  const [isClosedForm, setIsClosedForm] = useState(false)

  useEffect(() => {
    setComment(commentText)
    getReplyCommentsFromDB(commentId, pageSize, currentPage)
  }, [currentPage, pageSize, commentText, getReplyCommentsFromDB, commentId])

  const onCommentDelete = () => {
    deleteChosenComment(commentId, productId, pageSize, currentPage)
  }

  const turnEditMode = () => {
    setEditMode(!editMode)
  }

  const onChangeComment = e => {
    setComment(e.target.value)
  }

  const updateComment = () => {
    editChosenComment(commentId, comment, productId, pageSize, currentPage)
    setEditMode(!editMode)
  }

  const toggleReplyComments = () => {
    getReplyCommentsFromDB(commentId)
    setIsClosed(!isClosed)
  }

  const toggleReplyCommentsForm = () => {
    setIsClosedForm(!isClosedForm)
  }

  const onSendComment = data => {
    sendReplyComment(commentId, data)
  }

  const moreReplyComments = () => {
    setPageSize(pageSize + 3)
    getReplyCommentsFromDB(commentId, pageSize, currentPage)
    setIsActive(active)
  }

  return (
    <div className={styles.commentCardContainer}>
      <div className={styles.commentatorInfo}>
        {!user_photo
          ? <img alt='avatar' src={defaultAvatar} className={styles.avatar}/>
          : <img
            alt='avatar'
            className={styles.avatar}
            src={`${configs.HOST}:${configs.PORT}/${user_photo}`}/>}
        <div className={styles.commentatorName}>{name} {surname}</div>
      </div>
      <div className={styles.commentInformation}>
        <div className={styles.commentCommon}/>
        {!editMode
          ? <div className={styles.commentText}>{commentText}</div>
          : <div className={styles.editAreaContainer}>
            <div className={styles.editAreaText}>
                <textarea
                  autoFocus
                  value={comment}
                  onChange={onChangeComment}
                  className={styles.editArea}/>
            </div>
            <div className={styles.editBtnContainer}>
              <button
                onClick={turnEditMode}
                className={styles.editCancel}>
                Відхилити
              </button>
              <button
                onClick={updateComment}
                className={styles.editConfirm}
              >
                Прийняти
              </button>
            </div>
          </div>}
        <div className={styles.changeText}>
          {
            isOwner && isAuth && !editMode && <div>
              <Button
                color={'default'}
                variant={'outlined'}
                onClick={turnEditMode}
                startIcon={<EditIcon/>}
                className={classes.button}
              >
                Редагувати
              </Button>
            </div>
          }
          {isOwner && isAuth && !editMode && <div>
            <Button
              variant={'outlined'}
              color={'secondary'}
              startIcon={<DeleteIcon/>}
              onClick={onCommentDelete}
              className={classes.button}
            >
              Видалити
            </Button>
          </div>}
        </div>
        <div className={styles.commentDate}>
          {'Додано: ' + dayjs(commentTime).format('HH:mm DD/MM/YYYY')}
        </div>
        {isAuth && !editMode && <div>
          <p className={styles.replyComment} onClick={toggleReplyCommentsForm}>
            <FontAwesomeIcon
              icon={faReply}
              style={{
                fontSize: '15px',
                marginRight: '7px',
                transform: 'rotate(180deg)',
              }}/>
            Відповісти
          </p>
        </div>}
        {isAuth &&
        <div className={styles.commentContainer}>
          {isAuth && isClosedForm && <div className={styles.commentArea}>
            <ReplyCommentForm isAuth={isAuth} onSubmit={onSendComment}/>
          </div>}
          {isAuth &&
          <div className={styles.btnMode}>
            <span
              onClick={toggleReplyComments}
              className={active ? styles.active : styles.showHide}
            >
              Показати/приховати відповіді
              <FontAwesomeIcon icon={faAngleDown} className={styles.icon}/>
            </span>
          </div>
          }
          {isAuth && isClosed && replyCommentsInfo.map(comment =>
            comment.commentId === commentId
              ? <ReplyCommentCard
                isAuth={isAuth}
                id={comment.id}
                key={comment.id}
                isOwner={isOwner}
                pageSize={pageSize}
                commentId={commentId}
                currentPage={currentPage}
                commentText={comment.text}
                name={comment['User.name']}
                commentTime={comment.created_at}
                surname={comment['User.surname']}
                user_photo={comment['User.user_photo']}
                editChosenReplyComment={editChosenReplyComment}
                getReplyCommentsFromDB={getReplyCommentsFromDB}
                deleteChosenReplyComment={deleteChosenReplyComment}/>
              : null)}
        </div>}
        {isAuth && isClosed && <div className={styles.btnMode}>
          <span className={styles.showHide} onClick={moreReplyComments}>
            Більше повідомлень
            <FontAwesomeIcon icon={faAngleDown} className={styles.icon}/>
          </span>
        </div>}
        {isAuth && isClosed && <div className={styles.btnMode}>
          <span className={styles.showHide} onClick={toggleReplyComments}>
            Закрити всі
            <FontAwesomeIcon icon={faAngleUp} className={styles.icon}/>
          </span>
        </div>}
      </div>
    </div>
  )
}

export default CommentCard
