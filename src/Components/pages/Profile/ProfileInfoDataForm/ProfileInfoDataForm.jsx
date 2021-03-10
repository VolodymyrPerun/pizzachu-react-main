import React, {memo} from 'react';
import styles from './ProfileInfoDataForm.module.scss';
import SubmitFollowBtn from "../../../commons/Buttons/SubmitFollow/SubmitFollowBtn";
import FormsControlItem from "../../../commons/FormsControls/FormsControls";
import {SELECT, TEXT_FIELD} from "../../../../constants/formsControls.enum";
import {age120, age18, maxLengthCreator, minLengthCreator, number, phone} from "../../../../validators/validators";
import {Field, reduxForm} from "redux-form";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {makeStyles} from "@material-ui/core/styles";

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
const minLength2 = minLengthCreator(2);
const maxLength3 = maxLengthCreator(3);
const minLength1 = minLengthCreator(1);
const maxLength10 = maxLengthCreator(10);
const minLength10 = minLengthCreator(10);


const ProfileInfoDataForm = memo(({handleSubmit, pristine, submitting, goToEditMode, setEditMode, initialValues}) => {

    const classes = useStyles();

    return (
        <form
            onSubmit={handleSubmit}
            className={classes.root}
            autoComplete="on">
            <div>
                <Field style={{color: '#008E46'}}
                       component={FormsControlItem(TEXT_FIELD)}
                       type={'text'}
                       label={"Ім'я"}
                       variant={"filled"}
                       name={"name"}
                       validate={[minLength2, maxLength20]}
                />
            </div>

            <div>
                <Field style={{color: '#008E46'}}
                       component={FormsControlItem(TEXT_FIELD)}
                       type={'text'}
                       label={"Прізвище"}
                       variant={"filled"}
                       name={"surname"}
                       validate={[minLength2, maxLength20]}
                />
            </div>

            <div>
                <Field style={{color: '#008E46'}}
                       component={FormsControlItem(TEXT_FIELD)}
                       type={'text'}
                       name={"age"}
                       label={"Ваш вік"}
                       variant={"filled"}
                       validate={[minLength2, maxLength3]}
                       warn={[number, age18, age120]}
                />
            </div>

            <div>
                <FormControl className={classes.formControl}>
                    <Field component={FormsControlItem(SELECT)}
                           name={"gender_id"}
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
                    variant={"filled"}
                    component={FormsControlItem(TEXT_FIELD)}
                    label={"Телефон"}
                    placeholder={'(0xx) xxx xx xx'}
                    name={"phone"}
                    validate={[number, minLength10, maxLength10]}
                    warn={phone}
                />
            </div>

            <div>
                <FormControl variant={"filled"} className={classes.formControl}>
                    <Field component={FormsControlItem(SELECT)}
                           className={styles.select}
                           name={"city"}
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
                       name={"street"}
                       label={"Вулиця"}
                       variant={"filled"}
                       validate={[minLength2, maxLength10]}
                />
            </div>

            <div>
                <Field style={{color: '#008E46'}}
                       component={FormsControlItem(TEXT_FIELD)}
                       name={"house"}
                       label={"Будинок"}
                       variant={"filled"}
                       validate={[minLength1, maxLength10]}
                />
            </div>

            {initialValues.apartment && <div>
                <Field style={{color: '#008E46'}}
                       component={FormsControlItem(TEXT_FIELD)}
                       name={"apartment"}
                       label={"Квартира"}
                       variant={"filled"}
                       warn={number}
                />
            </div>}

            {initialValues.entrance && <div>
                <Field style={{color: '#008E46'}}
                       component={FormsControlItem(TEXT_FIELD)}
                       name={"entrance"}
                       label={"Під'їзд"}
                       warn={number}
                       variant={"filled"}
                />
            </div>}

            {initialValues.floor && <div>
                <Field style={{color: '#008E46'}}
                       component={FormsControlItem(TEXT_FIELD)}
                       name={"floor"}
                       label={"Поверх"}
                       variant={"filled"}
                       warn={number}
                />
            </div>}

            <div className={styles.order}>
                <SubmitFollowBtn
                    icon={faArrowRight}
                    label={'Змінити '}
                    name={'Submit'}
                    type={"submit"}
                    disabled={pristine || submitting}
                    onClick={goToEditMode}
                />
                <SubmitFollowBtn
                    icon={faArrowLeft}
                    label={' Відмінити'}
                    handleClick={() => {
                        setEditMode(false)
                    }}
                />
            </div>
        </form>
    )
});

export default reduxForm({
    form: 'profileInfoDataForm'
})(ProfileInfoDataForm);
