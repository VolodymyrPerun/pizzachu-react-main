import React, {memo, useEffect} from 'react';
import styles from './Orders.module.scss';
import ApplyBtn from "../../commons/Buttons/Apply/ApplyBtn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faAward} from "@fortawesome/free-solid-svg-icons";
import {CloseCircleOutlined} from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import Preloader from "../../commons/Preloader/Preloader";


const Orders = memo(({
                         isAuth,
                         purchases,
                         getAllClientPurchases
                     }) => {


    useEffect(() => {
        getAllClientPurchases(10, 1)
    }, [getAllClientPurchases]);

    let unique = purchases.filter((set => f => !set.has(f.created_at) && set.add(f.created_at))(new Set()));

    return (
        <>
            <div className={styles.container}>
                <NavLink className={styles.closeBtn} to={'/home'}>
                    <CloseCircleOutlined className={styles.icon}/>
                </NavLink>

                <div className={styles.logoContainer}>
                    <div className={styles.logo}>
                        <FontAwesomeIcon
                            style={{marginRight: '7px', color: '#EE7178'}}
                            icon={faAward}/>
                        <span className={styles.tittle}>
                            Мої замовлення
                        </span>
                    </div>
                </div>

                {isAuth
                    ? <>
                        {!unique ? <Preloader/> :
                            unique.map((purchaseItem, i) =>
                                purchaseItem.status_id === 1 || purchaseItem.status_id === 2 || purchaseItem.status_id === 4 ?
                                    <div key={purchaseItem.id} className={styles.orderItemContainer}>

                                        <div className={styles.counter}>
                                            <div className={styles.count}>
                                                <span>№ {++i}</span></div>
                                        </div>

                                        <div className={styles.sum}>
                                            <span style={{marginRight: '7px', marginLeft: '7px', color: '#EE7178'}}>Сума замовлення: </span>
                                            {purchaseItem.total} грн
                                        </div>

                                        <div className={styles.counter}>
                                            <div className={styles.count}>
                                                <span>Дата: {(purchaseItem.created_at).toLocaleString().slice(0, 10)}</span>
                                            </div>
                                        </div>

                                        <div className={styles.counter}>
                                            <div className={styles.count}>
                                                <span>Година: {(purchaseItem.created_at).toLocaleString().slice(11, 19)}</span>
                                            </div>
                                        </div>

                                        <div className={styles.counter}>
                                            {purchaseItem['PurchaseStatus.status'] === 'in_progress'
                                                ?
                                                <div className={styles.count}>
                                                    <span>В процесі</span>
                                                </div>
                                                : <div className={styles.done}>
                                                    <span>Виконано</span>
                                                </div>
                                            }
                                        </div>

                                    </div>
                                    : null
                            )}
                    </>
                    : <div className={styles.emptyOrder}>
                                <h3>Замовлення відсутні</h3>
                                <p>Але це ніколи не пізно виправити :)</p>
                        <p>Для того, щоб зберігати інформацію про замовлення, необхідно зараєструватись</p>
                        <NavLink className={styles.register} to={'/register'}><span>Зараєструватись зараз?</span></NavLink>
                            </div>}


                <div className={styles.btn}>
                    <NavLink className={styles.goBack} to={'/home'}>
                        <ApplyBtn
                            icon={faArrowLeft}
                            label={'На головну'}
                        />
                    </NavLink>
                </div>

            </div>
        </>
    )
});

export default Orders;
