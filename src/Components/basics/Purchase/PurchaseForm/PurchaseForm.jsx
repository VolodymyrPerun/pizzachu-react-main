import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import styles from './PurchaseForm.module.scss';
import {Field, reduxForm} from "redux-form";
import {email, maxLengthCreator, minLengthCreator, number, phone, required} from "../../../../validators/validators";
import FormsControlItem from "../../../commons/FormsControls/FormsControls";
import {TEXT_FIELD} from "../../../../constants/formsControls.enum";
import {connect} from "react-redux";
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


const PurchaseForm = ({
                          me,
                          isAuth,
                          onSubmit,
                          handleChange,
                          state,
                          setState,
                          pristine, submitting, reset, error
                      }) => {

    const classes = useStyles();

    return (
        <>
            <form
                onSubmit={onSubmit} className={classes.root} autoComplete="on">

                <Field style={{color: '#008E46'}}
                       component={FormsControlItem(TEXT_FIELD)}
                       required
                       id="standard-required"
                       label={"Ім'я"}
                       value={isAuth ? me.name : null}
                       variant="filled"
                       name="name"
                       validate={[required, minLength2, maxLength20]}
                       onChange={(event => setState({
                           ...state,
                           name: event.target.value
                       }))}
                />

                <Field
                    style={{color: '#008E46'}}
                    required
                    id={"standard-required"}
                    variant="filled"
                    component={FormsControlItem(TEXT_FIELD)}
                    label={"Телефон"}
                    placeholder={'(0xx) xxx xx xx'}
                    name={"phone"}
                    validate={[required, number, minLength10, maxLength10]}
                    warn={phone}
                    onChange={(event => setState({
                        ...state,
                        phone: event.target.value
                    }))}
                />

                <Field
                    style={{color: '#008E46'}}
                    required
                    id={"standard-required"}
                    variant="filled"
                    component={FormsControlItem(TEXT_FIELD)}
                    label={"Ел. скринька"}
                    placeholder={'pizzachu@icheese.you'}
                    name={"email"}
                    validate={[required, minLength2, maxLength45]}
                    warn={email}
                    onChange={(event => setState({
                        ...state,
                        email: event.target.value
                    }))}
                />


                <FormControl variant="filled" className={classes.formControl}>
                    <NativeSelect style={{color: '#008E46'}}
                                  required
                                  onChange={handleChange}
                                  name="city"
                                  className={classes.selectEmpty}
                                  inputProps={{id: 'city'}}
                    >
                        <option style={{color: 'red'}}
                                value={isAuth ? me.city : state.city}>{isAuth ? me.city : state.city}</option>
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
                    </NativeSelect>
                    <FormHelperText>Населений пункт</FormHelperText>
                </FormControl>

                <Field style={{color: '#008E46'}}
                       component={FormsControlItem(TEXT_FIELD)}
                       required
                       id="filled-required"
                       name="street"
                       label="Вулиця"
                       variant="filled"
                       validate={[required, minLength2, maxLength45]}
                       onChange={(event => setState({
                           ...state,
                           street: event.target.value
                       }))}
                />
                <Field style={{color: '#008E46'}}
                       component={FormsControlItem(TEXT_FIELD)}
                       required
                       id="filled-required"
                       name="house"
                       label="Будинок"
                       variant="filled"
                       validate={[required, minLength2, maxLength45]}
                       onChange={(event => setState({
                           ...state,
                           house: event.target.value
                       }))}
                />
                <Field style={{color: '#008E46'}}
                       component={FormsControlItem(TEXT_FIELD)}
                       id="filled-required"
                       name="apartment"
                       label="Квартира"
                       validate={[number, minLength1, maxLength10]}
                       variant="filled"
                       validation={'number'}
                       onChange={(event => setState({
                           ...state,
                           apartment: event.target.value
                       }))}
                />
                <Field style={{color: '#008E46'}}
                       component={FormsControlItem(TEXT_FIELD)}
                       id="filled-required"
                       name="entrance"
                       label="Під'їзд"
                       validate={[number, minLength1, maxLength10]}
                       variant="filled"
                       onChange={(event => setState({
                           ...state,
                           entrance: event.target.value
                       }))}
                />
                <Field style={{color: '#008E46'}}
                       component={FormsControlItem(TEXT_FIELD)}
                       id="filled-required"
                       name="floor"
                       label="Поверх"
                       variant="filled"
                       validate={[number, minLength1, maxLength10]}
                       onChange={(event => setState({
                           ...state,
                           floor: event.target.value
                       }))}
                />

                <div className={styles.order}>
                    <SubmitFollowBtn
                        icon={faArrowRight}
                        label={'Підтвердити замовлення '}
                        name={'Submit'}
                        type={"submit"}
                        disabled={pristine || submitting}
                        onClick={reset}
                    />
                </div>

                {error &&
                <div className={styles.formsSummaryError}>
                    <span>ERROR: {error}</span>
                </div>}
            </form>
        </>
    );
};


export default connect(({auth}) => ({

    initialValues: {
        name: (auth.me ? auth.me.name : ''),
        email: (auth.me ? auth.me.email : ''),
        phone: (auth.me ? auth.me.phone : ''),
        street: (auth.me ? auth.me.street : ''),
        house: (auth.me ? auth.me.house : ''),
        apartment: (auth.me ? auth.me.apartment : ''),
        entrance: (auth.me ? auth.me.entrance : ''),
        floor: (auth.me ? auth.me.floor : '')
    },
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
}))(reduxForm({
    form: 'purchaseForm',
})(PurchaseForm));

