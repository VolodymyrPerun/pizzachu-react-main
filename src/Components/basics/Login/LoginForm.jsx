import React from 'react';
import styles from './Login.module.scss';
import {Field, reduxForm} from "redux-form";
import SubmitFollowBtn from "../../commons/Buttons/SubmitFollow/SubmitFollowBtn";
import {faAt, faKey, faSignInAlt, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FormsControlItem from "../../commons/FormsControls/FormsControls";
import {INPUT} from "../../../constants/formsControls.enum";
import {email, maxLengthCreator, minLengthCreator, password, required} from "../../../validators/validators";
import {NavLink} from "react-router-dom";


const maxLength20 = maxLengthCreator(20);
const maxLength45 = maxLengthCreator(45);
const minLength2 = minLengthCreator(2);
const minLength8 = minLengthCreator(8);


let LoginForm = ({
                     handleSubmit,
                     pristine,
                     submitting,
                     reset,
                     error,
                     errorMessage,
                     adminErrorMessage,
                     isAuth,
                     onClickLogout
                 }) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>

                {!isAuth
                    ? <>
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
                               placeholder={'Пароль'}
                               validate={[required, maxLength20, minLength8]}
                               warn={password}
                               label={<FontAwesomeIcon
                                   style={{marginRight: '13px', bottom: '-5px', position: 'relative'}}
                                   icon={faKey}/>}
                        />

                        <SubmitFollowBtn
                            label={"Увійти"}
                            name={'Submit'}
                            type={"submit"}
                            disabled={pristine || submitting}
                            onClick={reset}
                            icon={faSignInAlt}
                        />
                    </>
                    : <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <SubmitFollowBtn
                            label={"Вихід"}
                            name={'logout'}
                            type={"button"}
                            icon={faSignOutAlt}
                            handleClick={onClickLogout}/>

                        <NavLink className={styles.menuItemLink} to={'/change-password'}>Змінити пароль?</NavLink>
                        <NavLink className={styles.menuItemLink} to={'/restore-password'}>Забули пароль?</NavLink>
                    </div>}

            </div>
            {error &&
            <div className={styles.formsSummaryError}>
                <span>ERROR: {error}</span>
            </div>}
            {errorMessage && '/' + window.location.href.split('/').pop() === '/login' &&
            <div className={styles.errMsg}>{errorMessage}</div>}
            {adminErrorMessage && '/' + window.location.href.split('/').pop() === '/auth-admin' &&
            <div className={styles.errMsg}>{adminErrorMessage}</div>}
        </form>
    )
};

export default reduxForm({
    // a unique name for the form
    form: 'loginForm'
})(LoginForm);

