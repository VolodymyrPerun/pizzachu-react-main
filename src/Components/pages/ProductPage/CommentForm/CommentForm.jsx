import React from 'react';
import {Field, reset} from 'redux-form';
import styles from './CommentForm.module.scss';
import {TEXTAREA} from "../../../../constants/formsControls.enum";
import {reduxForm} from "redux-form";
import FormsControlItem from "../../../commons/FormsControls/FormsControls";


export const Form = ({handleSubmit, pristine, submitting, isAuth}) => {

    return (
        <form className={styles.commentForm} onSubmit={handleSubmit}>

            {
                isAuth ?
                    <div className={styles.formInfo}>

                        <div>
                            <Field
                                name={"text"}
                                component={FormsControlItem(TEXTAREA)}
                                placeholder={"Залишити відгук..."}
                                autoFocus={false}
                            />
                        </div>

                    </div>
                    :
                    <div className={styles.formInfo}>
                        <Field
                            component={FormsControlItem(TEXTAREA)}
                            placeholder={"Залишити відгук..."}
                            disabled
                        />
                        <div className={styles.noAuth}>Залишати відгуки можуть лише авторизовані користувачі</div>
                    </div>
            }

            <div>
                {isAuth &&
                <div>
                    <button className={styles.commentBtn}
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

