import React, {useEffect, useState} from "react";
import defaultAvatar from '../../../../assets/images/default avatar.jpg';
import styles from './CommentCard.module.scss';
import dayjs from "dayjs";
import {configs} from "../../../../config/configs";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import EditIcon from '@material-ui/icons/Edit';
import {faAngleDown, faAngleUp, faReply} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ReplyCommentCard from "../ReplyCommentCard/ReplyCommentCard";
import {ReplyCommentForm} from "../ReplyCommentForm/ReplyCommentForm";


const CommentCard = (
    {
        commentId,
        commentText,
        commentTime,
        name,
        surname,
        user_photo,
        productId,
        isOwner,
        editChosenComment,
        isAuth,
        currentPage,
        deleteChosenComment,
        // pageSize,

        replyCommentsInfo,
        getReplyCommentsFromDB,
        totalReplyCommentsCount,
        deleteChosenReplyComment,
        editChosenReplyComment,
        sendReplyComment
    }
) => {

    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
            width: 120,
            height: 32,
            borderRadius: 10,
            textTransform: 'capitalize'
        },
    }));
    const classes = useStyles();


    const [editMode, setEditMode] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const [isClosedForm, setIsClosedForm] = useState(false);
    const [active, setIsActive] = useState(false);
    let [pageSize, setPageSize] = useState(3);

    const [comment, setComment] = useState(commentText);

    useEffect(() => {
        setComment(commentText);
        getReplyCommentsFromDB(commentId, pageSize, currentPage);
    }, [commentText, getReplyCommentsFromDB, commentId]);

    const onCommentDelete = () => {
        deleteChosenComment(commentId, productId, pageSize, currentPage);
    };


    const turnEditMode = () => {
        setEditMode(!editMode);
    };

    const onChangeComment = e => {
        setComment(e.target.value);
    };

    const updateComment = () => {
        editChosenComment(commentId, comment, productId, pageSize, currentPage);
        setEditMode(!editMode);
    };

    const toggleReplyComments = () => {
        getReplyCommentsFromDB(commentId);
        setIsClosed(!isClosed);
    };


    const toggleReplyCommentsForm = () => {
        setIsClosedForm(!isClosedForm);
    };

    const onSendComment = data => {
        sendReplyComment(commentId, data);
    };

    const moreReplyComments = () => {
        setPageSize(pageSize + 3);
        getReplyCommentsFromDB(commentId, pageSize, currentPage);
        setIsActive(active);
    };


    return (
        <div className={styles.commentCardContainer}>
            <div className={styles.commentatorInfo}>
                {
                    !user_photo ? <img src={defaultAvatar} className={styles.avatar} alt="avatar"/> :
                        <img className={styles.avatar} src={`${configs.HOST}:${configs.PORT}/${user_photo}`}
                             alt="avatar"/>
                }
                <div className={styles.commentatorName}>{name} {surname}</div>
            </div>

            <div className={styles.commentInformation}>
                <div className={styles.commentCommon}/>

                {
                    !editMode ?
                        <div className={styles.commentText}>{commentText}</div> :
                        <div className={styles.editAreaContainer}>
                            <div className={styles.editAreaText}>
                                <textarea
                                    className={styles.editArea}
                                    onChange={onChangeComment}
                                    autoFocus
                                    value={comment}
                                />
                            </div>

                            <div className={styles.editBtnContainer}>
                                <button className={styles.editCancel} onClick={turnEditMode}>Відхилити</button>
                                <button className={styles.editConfirm} onClick={updateComment}>Прийняти</button>
                            </div>
                        </div>
                }

                <div className={styles.changeText}>
                    {
                        isOwner && isAuth && !editMode && <div>
                            <Button
                                variant={"outlined"}
                                color={"default"}
                                className={classes.button}
                                startIcon={<EditIcon/>}
                                onClick={turnEditMode}
                            >
                                Редагувати
                            </Button>
                        </div>
                    }
                    {isOwner && isAuth && !editMode && <div>
                        <Button
                            variant={"outlined"}
                            color={"secondary"}
                            className={classes.button}
                            startIcon={<DeleteIcon/>}
                            onClick={onCommentDelete}
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
                            style={{
                                marginRight: '7px',
                                fontSize: '15px',
                                transform: 'rotate(180deg)'
                            }}
                            icon={faReply}/>Відповісти
                    </p>
                </div>}


                {isAuth &&
                <div className={styles.commentContainer}>
                    {isAuth && isClosedForm && <div className={styles.commentArea}>
                        <ReplyCommentForm
                            onSubmit={onSendComment}
                            isAuth={isAuth}
                        />
                    </div>}

                    {isAuth &&
                    <div className={styles.btnMode}>
                    <span className={active ? styles.active : styles.showHide} onClick={toggleReplyComments}>
                        Показати/приховати відповіді
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon={faAngleDown}/>
                    </span>
                    </div>
                    }


                    {isAuth && isClosed &&

                    replyCommentsInfo.map(
                        comment =>
                            comment.commentId === commentId ?

                                <ReplyCommentCard
                                    key={comment.id}
                                    commentId={commentId}
                                    id={comment.id}
                                    commentText={comment.text}
                                    commentTime={comment.created_at}
                                    name={comment["User.name"]}
                                    surname={comment["User.surname"]}
                                    user_photo={comment["User.user_photo"]}
                                    isOwner={isOwner}
                                    deleteChosenReplyComment={deleteChosenReplyComment}
                                    editChosenReplyComment={editChosenReplyComment}
                                    isAuth={isAuth}
                                    currentPage={currentPage}
                                    pageSize={pageSize}
                                    getReplyCommentsFromDB={getReplyCommentsFromDB}
                                /> : null)}
                </div>}

                {isAuth && isClosed &&
                <div className={styles.btnMode}>
                    <span className={styles.showHide} onClick={moreReplyComments}>
                       Більше повідомлень
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon={faAngleDown}/>
                    </span>
                </div>
                }
                {isAuth && isClosed &&
                <div className={styles.btnMode}>
                    <span className={styles.showHide} onClick={toggleReplyComments}>
                       Закрити всі
                        <FontAwesomeIcon
                            className={styles.icon}
                            icon={faAngleUp}/>
                    </span>
                </div>
                }
            </div>
        </div>
    )
};

export default CommentCard;
