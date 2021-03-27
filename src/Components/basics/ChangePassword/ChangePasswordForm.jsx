import React from 'react';
import styles from './ChangePassword.module.scss';
import {Field, reduxForm} from "redux-form";
import SubmitFollowBtn from "../../commons/Buttons/SubmitFollow/SubmitFollowBtn";
import {faAt, faKey} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FormsControlItem from "../../commons/FormsControls/FormsControls";
import {INPUT} from "../../../constants/formsControls.enum";
import {email, maxLengthCreator, minLengthCreator, password, required} from "../../../validators/validators";


const maxLength20 = maxLengthCreator(20);
const maxLength45 = maxLengthCreator(45);
const minLength2 = minLengthCreator(2);
const minLength8 = minLengthCreator(8);


let ChangePasswordForm = ({handleSubmit, pristine, submitting, reset, error, errorMessage}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>

                <Field className={styles.input}
                       name={"email"}
                       component={FormsControlItem(INPUT)}
                       type={"email"}
                       placeholder={'Емейл'}
                       validate={[required, maxLength45, minLength2]}
                       warn={email}
                       label={<FontAwesomeIcon
                           style={{marginRight: '13px', bottom: '-5px', position: 'relative'}}
                           icon={faAt}/>}
                />

                <Field className={styles.input}
                       name={"password"}
                       component={FormsControlItem(INPUT)}
                       type={'password'}
                       placeholder={'Введіть поточний пароль'}
                       validate={[required, maxLength20, minLength8]}
                       warn={password}
                       label={<FontAwesomeIcon
                           style={{marginRight: '13px', bottom: '-5px', position: 'relative'}}
                           icon={faKey}/>}
                />

                <Field className={styles.input}
                       name={"newPassword"}
                       component={FormsControlItem(INPUT)}
                       type={'password'}
                       placeholder={'Введіть новий пароль'}
                       validate={[required, maxLength20, minLength8]}
                       warn={password}
                       label={<FontAwesomeIcon
                           style={{marginRight: '13px', bottom: '-5px', position: 'relative'}}
                           icon={faKey}/>}
                />

                <Field className={styles.input}
                       name={"repeatNewPassword"}
                       component={FormsControlItem(INPUT)}
                       type={'password'}
                       placeholder={'Повторіть новий пароль'}
                       validate={[required, maxLength20, minLength8]}
                       warn={password}
                       label={<FontAwesomeIcon
                           style={{marginRight: '13px', bottom: '-5px', position: 'relative'}}
                           icon={faKey}/>}
                />

                <SubmitFollowBtn
                    label={"Змінити пароль"}
                    name={'Submit'}
                    type={"submit"}
                    disabled={pristine || submitting}
                    onClick={reset}
                    icon={faKey}
                />

            </div>
            {error &&
            <div className={styles.formsSummaryError}>
                <span>ERROR: {error}</span>
            </div>}
            {errorMessage && '/' + window.location.href.split('/').pop() === '/change-password' &&
            <div className={styles.errMsg}>{errorMessage}</div>}
        </form>
    )
};

export default reduxForm({
    // a unique name for the form
    form: 'changePasswordForm'
})(ChangePasswordForm);

