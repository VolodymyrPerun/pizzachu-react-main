import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import styles from './ReplyCommentCard.module.scss'
import { configs } from '../../../../config/configs'
import makeStyles from '@material-ui/core/styles/makeStyles'
import defaultAvatar from '../../../../assets/images/default avatar.jpg'
//////////////////////////////////////////////////

const ReplyCommentCard = ({
  id,
  name,
  isAuth,
  surname,
  isOwner,
  user_photo,
  commentText,
  commentTime,
  editChosenReplyComment,
  deleteChosenReplyComment,
}) => {

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
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    setComment(commentText)
  }, [commentText])

  const onCommentDelete = () => {
    deleteChosenReplyComment(id)
  }

  const turnEditMode = () => {
    setEditMode(!editMode)
  }

  const onChangeComment = e => {
    setComment(e.target.value)
  }

  const updateComment = () => {
    editChosenReplyComment(id, comment)
    setEditMode(!editMode)
  }

  return (
    <>
      <div className={styles.commentCardContainer}>
        <div className={styles.commentatorInfo}>
          {!user_photo
            ? <img
              alt='avatar'
              src={defaultAvatar}
              className={styles.avatar}/>
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
              <button onClick={turnEditMode} className={styles.editCancel}>
                Відхилити
              </button>
              <div className={styles.editBtnContainer}>
                <button
                  onClick={updateComment}
                  className={styles.editConfirm}>
                  Прийняти
                </button>
              </div>
            </div>}
          <div className={styles.changeText}>
            {isOwner && isAuth && !editMode && <div>
              <Button
                color='default'
                variant='outlined'
                onClick={turnEditMode}
                startIcon={<EditIcon/>}
                className={classes.button}
              >
                Редагувати
              </Button>
            </div>}
            {isOwner && isAuth && !editMode && <div>
              <Button
                color='secondary'
                variant='outlined'
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
        </div>
      </div>
    </>
  )
}

export default ReplyCommentCard
