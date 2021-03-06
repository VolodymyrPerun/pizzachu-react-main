import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import styles from './RegisterClientsForm.module.scss';
import {Field, reduxForm} from "redux-form";
import {
    email,
    maxLengthCreator,
    minLengthCreator,
    number,
    password,
    phone,
    required
} from "../../../../validators/validators";
import FormsControlItem from "../../../commons/FormsControls/FormsControls";
import {SELECT, TEXT_FIELD} from "../../../../constants/formsControls.enum";
import SubmitFollowBtn from "../../../commons/Buttons/SubmitFollow/SubmitFollowBtn";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '25ch'
        },
        '& .MuiSelect-root': {
            margin: theme.spacing(2),
            width: '25ch'
        },
    }
}));

const maxLength20 = maxLengthCreator(20);
const maxLength45 = maxLengthCreator(45);
const minLength2 = minLengthCreator(2);
const minLength1 = minLengthCreator(1);
const maxLength10 = maxLengthCreator(10);
const minLength10 = minLengthCreator(10);


const RegisterClientsForm = ({
                                 me,
                                 isAuth,
                                 setState,
                                 errorMessage,
                                 state,
                                 handleSubmit,
                                 pristine, submitting, reset, error
                             }) => {

    const classes = useStyles();

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className={classes.root}
                autoComplete="on">

                {/*<div>*/}
                {/*    <label className={styles.customFileUpload}>*/}
                {/*        <input type={'file'}*/}
                {/*               name={'user_photo'}*/}
                {/*               accept={'.jpg, .png, .jpeg'}*/}
                {/*               onChange={e => {*/}

                {/*                   if (e.target.files.length) {*/}
                {/*                       setState({*/}
                {/*                           ...state,*/}
                {/*                           user_photo: e.target.files[0]*/}
                {/*                       });*/}
                {/*                   }*/}
                {/*               }}*/}
                {/*        />*/}
                {/*        <UploadOutlined/> Завантажити фото*/}
                {/*    </label>*/}
                {/*</div>*/}

                <Field style={{color: '#008E46'}}
                       component={FormsControlItem(TEXT_FIELD)}
                       required
                       type={'text'}
                       label={"Ім'я"}
                       variant={"filled"}
                       name={"name"}
                       validate={[required, minLength2, maxLength20]}
                />

                <div>
                    <Field style={{color: '#008E46'}}
                           component={FormsControlItem(TEXT_FIELD)}
                           required
                           type={'text'}
                           label={"Прізвище"}
                           variant={"filled"}
                           name={"surname"}
                           validate={[required, minLength2, maxLength20]}
                    />
                </div>

                <div>
                    <Field style={{color: '#008E46'}}
                           component={FormsControlItem(TEXT_FIELD)}
                           required
                           type={'text'}
                           name="age"
                           label={"Ваш вік"}
                           variant={"filled"}
                           validate={[required, minLength2, maxLength45]}
                           warn={number}
                    />
                </div>

                <div>
                    <Field style={{color: '#008E46'}}
                           component={FormsControlItem(TEXT_FIELD)}
                           required
                           name="password"
                           type={'password'}
                           label={"Пароль"}
                           variant={"filled"}
                           validate={[required, minLength2, maxLength45]}
                           warn={password}
                    />
                </div>

                <div>
                    <FormControl className={classes.formControl}>
                        <Field required
                               component={FormsControlItem(SELECT)}
                               name="gender_id"
                               className={styles.select}
                        >
                            <option></option>
                            <option value={1}>Чоловіча</option>
                            <option value={2}>Жіноча</option>
                        </Field>
                        <FormHelperText>Стать</FormHelperText>
                    </FormControl>
                </div>

                <div>
                    <Field
                        style={{color: '#008E46'}}
                        required
                        variant="filled"
                        component={FormsControlItem(TEXT_FIELD)}
                        label={"Телефон"}
                        placeholder={'(0xx) xxx xx xx'}
                        name={"phone"}
                        validate={[required, number, minLength10, maxLength10]}
                        warn={phone}
                    />
                </div>

                <div>
                    <Field
                        style={{color: '#008E46'}}
                        required
                        variant={"filled"}
                        component={FormsControlItem(TEXT_FIELD)}
                        label={"Ел. скринька"}
                        placeholder={'pizzachu@icheese.you'}
                        name={"email"}
                        validate={[required, minLength2, maxLength45]}
                        warn={email}
                    />
                </div>

                <div>
                    <FormControl variant="filled" className={classes.formControl}>
                        <Field variant="filled"
                               style={{color: '#008E46'}}
                               required
                               component={FormsControlItem(SELECT)}
                               className={styles.select}
                               name="city"
                        >
                            <option></option>
                            <option value={'Львів'}>Львів</option>
                            <option value={'Брюховичі'}>Брюховичі</option>
                            <option value={'Наварія'}>Наварія</option>
                            <option value={'Поршна'}>Поршна</option>
                            <option value={'Муроване'}>Муроване</option>
                            <option value={'Оброшине'}>Оброшине</option>
                            <option value={'Пасіки-Зубрицькі'}>Пасіки-Зубрицькі</option>
                            <option value={'Винники'}>Винники</option>
                            <option value={'Сокільники'}>Сокільники</option>
                            <option value={'Липники'}>Липники</option>
                            <option value={'Лапаївка'}>Лапаївка</option>
                            <option value={'Надичі'}>Надичі</option>
                            <option value={'Бірки'}>Бірки</option>
                            <option value={'Рудне'}>Рудне</option>
                            <option value={'Рудно'}>Рудно</option>
                            <option value={'Кротошин'}>Кротошин</option>
                            <option value={'Конопниця'}>Конопниця</option>
                            <option value={'Кожичі'}>Кожичі</option>
                            <option value={'Малечковичі'}>Малечковичі</option>
                            <option value={'Зимна Вода'}>Зимна Вода</option>
                            <option value={'Дубляни'}>Дубляни</option>
                            <option value={'Давидів'}>Давидів</option>
                            <option value={'Грабово'}>Грабово</option>
                            <option value={'Гамаліївка'}>Гамаліївка</option>
                            <option value={'Великі Грибовичі'}>Великі Грибовичі</option>
                            <option value={'Зубра'}>Зубра</option>
                            <option value={'Холодновідка'}>Холодновідка</option>
                            <option value={'Скнилів'}>Скнилів</option>
                            <option value={'Солонка'}>Солонка</option>
                            <option value={'Сулимів'}>Сулимів</option>
                            <option value={'Рясне-Руське'}>Рясне-Руське</option>
                            <option value={'Пустомити'}>Пустомити</option>
                            <option value={'Підсадки'}>Підсадки</option>
                            <option value={'Підбірці'}>Підбірці</option>
                        </Field>
                        <FormHelperText>Населений пункт</FormHelperText>
                    </FormControl>
                </div>

                <div>
                    <Field style={{color: '#008E46'}}
                           component={FormsControlItem(TEXT_FIELD)}
                           required
                           name={"street"}
                           label={"Вулиця"}
                           variant={"filled"}
                           validate={[required, minLength2, maxLength45]}
                    />
                </div>

                <div>
                    <Field style={{color: '#008E46'}}
                           component={FormsControlItem(TEXT_FIELD)}
                           required
                           name={"house"}
                           label={"Будинок"}
                           variant={"filled"}
                           validate={[required, minLength1, maxLength10]}
                    />
                </div>

                <div>
                    <Field style={{color: '#008E46'}}
                           component={FormsControlItem(TEXT_FIELD)}
                           name={"apartment"}
                           label={"Квартира"}
                           validate={[minLength1, maxLength10]}
                           variant={"filled"}
                           warn={number}
                    />
                </div>

                <div>
                    <Field style={{color: '#008E46'}}
                           component={FormsControlItem(TEXT_FIELD)}
                           name={"entrance"}
                           label={"Під'їзд"}
                           validate={[minLength1, maxLength10]}
                           warn={number}
                           variant={"filled"}
                    />
                </div>

                <div>
                    <Field style={{color: '#008E46'}}
                           component={FormsControlItem(TEXT_FIELD)}
                           name={"floor"}
                           label={"Поверх"}
                           variant={"filled"}
                           validate={[minLength1, maxLength10]}
                           warn={number}
                    />
                </div>

                <div className={styles.order}>
                    <SubmitFollowBtn
                        icon={faArrowRight}
                        label={'Зареєструватись '}
                        name={'Submit'}
                        type={"submit"}
                        disabled={pristine || submitting}
                    />
                </div>

                {error &&
                <div className={styles.formsSummaryError}>
                    <span>ERROR: {error}</span>
                </div>}

                {errorMessage && '/' + window.location.href.split('/').pop() === '/registerClients' &&
                <div className={styles.errMsg}>{errorMessage}</div>}
                {/*{adminErrorMessage && '/' + window.location.href.split('/').pop() === '/auth-admin' &&*/}
                {/*<div className={styles.errMsg}>{adminErrorMessage}</div>}*/}
            </form>
        </>
    );
};


export default reduxForm({
    form: 'registerForm',
})(RegisterClientsForm);
