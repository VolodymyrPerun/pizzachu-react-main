import React, {memo, useMemo} from 'react';
import styles from './Orders.module.scss';
import ApplyBtn from "../../commons/Buttons/Apply/ApplyBtn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faAward} from "@fortawesome/free-solid-svg-icons";
import {CloseCircleOutlined, FastBackwardFilled, FastForwardFilled} from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import Preloader from "../../commons/Preloader/Preloader";
import {Pagination} from "antd";


const Orders = memo(({
                         length,
                         isAuth,
                         purchases,
                         getAllClientPurchases,
                         pageSize,
                         setCurrentPage,
                     }) => {


    useMemo((pageSize, currentPage) => {
        getAllClientPurchases(pageSize, currentPage)
    }, [getAllClientPurchases]);

    const onPageChange = currentPage => {
        setCurrentPage(currentPage);
        getAllClientPurchases(pageSize, currentPage)
    };

    let pagesCount = Math.floor(Math.ceil(length / pageSize) * 10);

    function itemRender(current, type, originalElement) {
        if (type === 'prev') {
            return <button><FastBackwardFilled/></button>;
        }
        if (type === 'next') {
            return <button><FastForwardFilled/></button>;
        }
        return originalElement;
    }


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
                        {!purchases ? <Preloader/> :
                            purchases.map((purchaseItem, i) =>
                                purchaseItem.status_id === 1 || purchaseItem.status_id === 2 || purchaseItem.status_id === 4 ?
                                    <div key={purchaseItem.id} className={styles.orderItemContainer}>

                                        <div className={styles.counter}>
                                            <div className={styles.count}>
                                                <span>№ {purchaseItem.id}</span></div>
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
                        <NavLink className={styles.register}
                                 to={'/register'}><span>Зараєструватись зараз?</span></NavLink>
                    </div>}

                <Pagination
                    className={styles.pagination}
                    total={pagesCount}
                    itemRender={itemRender}
                    showLessItems={true}
                    showSizeChanger={false}
                    onChange={(p) => {
                        onPageChange(p)
                    }}
                />

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
