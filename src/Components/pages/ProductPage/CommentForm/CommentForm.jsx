import React from 'react';
import {Field, reset} from 'redux-form';
import style from './CommentForm.module.scss';
import {TEXTAREA} from "../../../../constants/formsControls.enum";
import {reduxForm} from "redux-form";
import FormsControlItem from "../../../commons/FormsControls/FormsControls";


export const Form = ({handleSubmit, pristine, submitting, isAuth}) => {

    return (
        <form className={style.commentForm} onSubmit={handleSubmit}>

            {
                isAuth ?
                    <div className={style.formInfo}>

                        <div>
                            <Field
                                name={"text"}
                                component={FormsControlItem(TEXTAREA)}
                                placeholder={"Введіть ваше повідомлення..."}
                                autoFocus={true}
                            />
                        </div>

                    </div>
                    :
                    <div className={style.formInfo}>
                        <Field
                            component={FormsControlItem(TEXTAREA)}
                            placeholder={"Введіть ваше повідомлення..."}
                            disabled
                        />
                        <div className={style.noAuth}>Залишати відгуки можуть лише авторизовані користувачі</div>
                    </div>
            }

            <div>
                {isAuth &&
                <div>
                    <button className={style.commentBtn}
                            type="submit"
                            disabled={pristine || submitting}
                            onClick={reset}
                    >
                        Надіслати
                    </button>
                </div>
                }
            </div>

        </form>
    )
};

export const CommentForm = reduxForm({
    form: 'comment'
})(Form);

