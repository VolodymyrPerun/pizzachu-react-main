import React, {useEffect, useState} from "react";
import defaultAvatar from '../../../../assets/images/default avatar.jpg';
import styles from './CommentCard.module.scss';
import dayjs from "dayjs";
import {configs} from "../../../../config/configs";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import EditIcon from '@material-ui/icons/Edit';


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
        commentsCountOnPage,
        currentPage,
        deleteChosenComment
    }
) => {

    console.log(commentsCountOnPage, currentPage);


    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    const onCommentDelete = () => {
        deleteChosenComment(commentId, commentsCountOnPage, currentPage)
    };

    const [editMode, setEditMode] = useState(false);
    const [comment, setComment] = useState(commentText);

    useEffect(() => {
        setComment(commentText);
    }, [commentText]);

    const turnEditMode = () => {
        setEditMode(!editMode);
    };

    const onChangeComment = e => {
        setComment(e.target.value);
    };

    const updateComment = () => {
        debugger
        editChosenComment(commentId, comment, productId, commentsCountOnPage, currentPage);
        setEditMode(!editMode);
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
                                <button className={styles.editCancel} onClick={turnEditMode}>ВІДХИЛИТИ</button>
                                <button className={styles.editConfirm} onClick={updateComment}>ПРИЙНЯТИ</button>
                            </div>
                        </div>
                }
                <br/>
                <div className={styles.changeText}>
                    {
                        isOwner && isAuth && <div>
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
                    {isOwner && isAuth && <div>
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
            </div>
        </div>


    )
};

export default CommentCard;
