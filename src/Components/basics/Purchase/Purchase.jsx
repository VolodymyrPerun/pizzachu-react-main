import React, {memo, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import styles from './Purchase.module.scss';
import ApplyBtn from "../../commons/Buttons/Apply/ApplyBtn";
import {
    faAddressCard,
    faArrowLeft,
    faArrowRight,
    faHryvnia,
    faMoneyCheck,
    faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CloseCircleOutlined} from '@ant-design/icons';
import SubmitFollowBtn from "../../commons/Buttons/SubmitFollow/SubmitFollowBtn";
import OrderMessage from "../../../containers/OrderMessage/OrderMessage";


const useStyles = makeStyles((theme) => ({
    formControl: {
        font: '17px Caveat, cursive',
        margin: theme.spacing(2),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
            font: '17px Caveat, cursive',
            margin: theme.spacing(2),
            width: '25ch'
        },
        '& .MuiSelect-root': {
            font: '17px Caveat, cursive',
            margin: theme.spacing(2),
            width: '25ch'
        },
    }
}));


const Purchase = memo(({
                           totalProductsSum,
                           productsLength,
                           getCart,
                           cart,
                           me,
                           isAuth,
                           addPurchase,
                           deleteCart,
                           pristine, submitting, reset, error,
                       }) => {


    const classes = useStyles();

    let [state, setState] = useState({
        email: me ? me.email : '',
        phone: me ? me.phone : '',
        city: me ? me.city : 'Львів',
        name: me ? me.name : '',
        street: me ? me.street : '',
        house: me ? me.house : '',
        apartment: me ? me.apartment : '',
        entrance: me ? me.entrance : '',
        floor: me ? me.floor : '',
    });

    const handleChange = event => {
        const city = event.target.name;
        setState({
            ...state,
            [city]: event.target.value,
        });
    };

    const onSubmit = () => {
        addPurchase(
            state.email,
            state.phone,
            state.name,
            state.city,
            state.street,
            state.house,
            state.apartment,
            state.entrance,
            state.floor
        );
        deleteCart();
        localStorage.setItem('tempId', '');
    };

    useEffect(() => {
        getCart();
    }, [getCart, deleteCart, addPurchase]);


    return (
        <>
            {productsLength
                ? <div className={styles.container}>
                    <NavLink className={styles.closeBtn} to={'/cart'}>
                        <CloseCircleOutlined className={styles.icon}/>
                    </NavLink>

                    <div className={styles.logoContainer}>
                        <div className={styles.logo}>
                            <FontAwesomeIcon
                                style={{marginRight: '7px', color: '#EE7178'}}
                                icon={faMoneyCheck}/>
                            <span className={styles.tittle}>
                            Оформити замовлення
                        </span>
                        </div>
                    </div>

                    <div className={styles.logoContainer}>
                        <div className={styles.logo}>
                            <FontAwesomeIcon
                                style={{marginRight: '7px', color: '#EE7178'}}
                                icon={faAddressCard}/>
                            <span className={styles.tittle}>
                            Персональні дані
                        </span>
                        </div>
                    </div>

                    <form onSubmit={onSubmit} className={classes.root} autoComplete="on">

                        <TextField style={{color: '#008E46'}}
                                   required
                                   id="standard-required"
                                   label="Ім'я"
                                   variant="filled"
                                   name="name"
                                   defaultValue={isAuth ? me.name : null}
                                   onChange={(event => setState({
                                       ...state,
                                       name: event.target.value
                                   }))}
                        />
                        <TextField style={{color: '#008E46'}}
                                   required
                                   id="standard-number"
                                   label="Телефон"
                                   placeholder={'(0xx) xxx xx xx'}
                                   defaultValue={isAuth ? me.phone : ''}
                                   name="phone"
                                   variant="filled"
                                   validation={'number'}
                                   InputLabelProps={{
                                       shrink: true
                                   }}
                                   onChange={(event => setState({
                                       ...state,
                                       phone: event.target.value
                                   }))}
                        />
                        <TextField style={{color: '#008E46'}}
                                   id="standard-required"
                                   label="Ел. скринька"
                                   placeholder={'pizzachu@icheese.you'}
                                   name="email"
                                   variant="filled"
                                   defaultValue={isAuth ? me.email : null}
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

                        <TextField style={{color: '#008E46'}}
                                   required
                                   id="filled-required"
                                   name="street"
                                   label="Вулиця"
                                   variant="filled"
                                   defaultValue={isAuth ? me.street : null}
                                   onChange={(event => setState({
                                       ...state,
                                       street: event.target.value
                                   }))}
                        />
                        <TextField style={{color: '#008E46'}}
                                   required
                                   id="filled-required"
                                   name="house"
                                   label="Будинок"
                                   variant="filled"
                                   defaultValue={isAuth ? me.house : null}
                                   validation={'number'}
                                   InputLabelProps={{
                                       shrink: true
                                   }}
                                   onChange={(event => setState({
                                       ...state,
                                       house: event.target.value
                                   }))}
                        />
                        <TextField style={{color: '#008E46'}}
                                   id="filled-required"
                                   name="apartment"
                                   label="Квартира"
                                   defaultValue={isAuth ? me.apartment : null}
                                   type="number"
                                   variant="filled"
                                   validation={'number'}
                                   InputLabelProps={{
                                       shrink: true
                                   }}
                                   onChange={(event => setState({
                                       ...state,
                                       apartment: event.target.value
                                   }))}
                        />
                        <TextField style={{color: '#008E46'}}
                                   id="filled-required"
                                   name="entrance"
                                   label="Під'їзд"
                                   defaultValue={isAuth ? me.entrance : null}
                                   type="number"
                                   validation={'number'}
                                   variant="filled"
                                   InputLabelProps={{
                                       shrink: true
                                   }}
                                   onChange={(event => setState({
                                       ...state,
                                       entrance: event.target.value
                                   }))}
                        />
                        <TextField style={{color: '#008E46'}}
                                   id="filled-required"
                                   name="floor"
                                   label="Поверх"
                                   defaultValue={isAuth ? me.floor : null}
                                   type="number"
                                   variant="filled"
                                   validation={'number'}
                                   InputLabelProps={{
                                       shrink: true
                                   }}
                                   onChange={(event => setState({
                                       ...state,
                                       floor: event.target.value
                                   }))}
                        />

                        <div className={styles.logoContainer}>
                            <div className={styles.logo}>
                                <FontAwesomeIcon
                                    style={{marginRight: '7px', color: '#EE7178'}}
                                    icon={faShoppingCart}/>
                                <span className={styles.tittle}>
                            Ваше замовлення
                        </span>
                            </div>
                        </div>

                        <div className={styles.wrapper}>
                            {cart && cart.map(cartItem =>
                                <div key={cartItem.id} className={styles.itemContainer}>
                                    <NavLink to={'/productPage/' + cartItem.productId} className={styles.cartItem}>
                                        <img className={styles.img}
                                             src={`http://localhost:5000/${cartItem['Product.product_photo']}`}
                                             alt={'productImage'}/>
                                        <span className={styles.tittle}>{cartItem['Product.name']}</span>
                                        <span className={styles.size}>{cartItem.price} грн</span>
                                    </NavLink>


                                    <NavLink to={'/productPage/' + cartItem.productId} className={styles.counter}>
                                        <div className={styles.count}><span>{cartItem.count} шт</span></div>
                                    </NavLink>

                                    <NavLink to={'/productPage/' + cartItem.productId} className={styles.sum}>
                                        <span
                                            style={{marginRight: '7px', marginLeft: '7px', color: '#EE7178'}}>= </span>
                                        {cartItem.sum}
                                        <FontAwesomeIcon
                                            style={{marginLeft: '7px', color: '#EE7178'}}
                                            icon={faHryvnia}/>
                                    </NavLink>
                                </div>
                            )}

                            <div className={styles.totalGroup}>
                                <div className={styles.totalProductsCount}>Всього
                                    товарів: <span> {productsLength} шт.</span></div>

                                <div className={styles.totalSum}>Сума замовлення: <span
                                    style={{marginLeft: '7px', color: 'grey'}}>{totalProductsSum}</span>
                                    <FontAwesomeIcon
                                        style={{marginLeft: '7px', color: '#EE7178'}}
                                        icon={faHryvnia}/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.btnGroup}>
                            <NavLink className={styles.goBack} to={'/home'}>
                                <ApplyBtn
                                    icon={faArrowLeft}
                                    label={'Продовжити покупки'}
                                />
                            </NavLink>

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
                        </div>
                    </form>
                </div>
                : <OrderMessage/>}
        </>
    );
});

export default Purchase;
