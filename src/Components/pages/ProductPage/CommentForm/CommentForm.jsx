import React from 'react';
import {Field} from 'redux-form';
import style from './CommentForm.module.scss';
import {TEXTAREA} from "../../../../constants/formsControls.enum";



const CommentForm = ({handleSubmit, pristine, submitting, isAuth}) => {

    return (
        <form className={style.commentForm} onSubmit={handleSubmit}>

            {
                isAuth ?
                    <div className={style.formInfo}>

                        <div>
                            <Field
                                name={"text"}
                                component={TEXTAREA}
                                placeholder={"Введіть ваше повідомлення..."}
                                autoFocus={true}
                            />
                        </div>

                    </div>
                    :
                    <div className={style.formInfo}>
                        <Field
                            component={TEXTAREA}
                            disabled
                        />
                        <div className={style.noAuth}>Залишати відгуки можуть лише авторизовані користувачі</div>

                    </div>

            }

            <div>
                {isAuth &&
                <div>
                    <button className={style.commentBtn} type="submit" disabled={pristine || submitting}>
                        Надіслати
                    </button>
                </div>
                }
            </div>


        </form>
    )
};

export default CommentForm
