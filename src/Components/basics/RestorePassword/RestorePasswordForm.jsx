import React from 'react';
import styles from './RestorePassword.module.scss';
import {Field, reduxForm} from "redux-form";
import SubmitFollowBtn from "../../commons/Buttons/SubmitFollow/SubmitFollowBtn";
import {faAt, faKey} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FormsControlItem from "../../commons/FormsControls/FormsControls";
import {INPUT} from "../../../constants/formsControls.enum";
import {email, maxLengthCreator, minLengthCreator, required} from "../../../validators/validators";


const maxLength45 = maxLengthCreator(45);
const minLength2 = minLengthCreator(2);


let RestorePasswordForm = ({handleSubmit, pristine, submitting, reset, error, errorMessage}) => {

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

                <SubmitFollowBtn
                    label={"Надіслати SMS для зміни пароля"}
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
            {errorMessage && '/' + window.location.href.split('/').pop() === '/reset-password' &&
            <div className={styles.errMsg}>{errorMessage}</div>}
        </form>
    )
};

export default reduxForm({
    // a unique name for the form
    form: 'resetPasswordForm'
})(RestorePasswordForm);

