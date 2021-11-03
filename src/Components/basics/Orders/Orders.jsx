import { Pagination } from 'antd'
import { NavLink } from 'react-router-dom'
import React, { memo, useMemo } from 'react'
import styles from './Orders.module.scss'
import ApplyBtn from '../../commons/Buttons/Apply/ApplyBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faAward } from '@fortawesome/free-solid-svg-icons'
import {
  FastForwardFilled,
  FastBackwardFilled,
  CloseCircleOutlined,
} from '@ant-design/icons'
//////////////////////////////////////////////////

const Orders = memo(({
  length,
  isAuth,
  pageSize,
  purchases,
  errorMessage,
  setCurrentPage,
  getAllClientPurchases,
}) => {

  useMemo((pageSize, currentPage) => {
    getAllClientPurchases(pageSize, currentPage)
  }, [getAllClientPurchases])

  const onPageChange = currentPage => {
    setCurrentPage(currentPage)
    getAllClientPurchases(pageSize, currentPage)
  }

  let pagesCount = Math.floor(Math.ceil(length / pageSize) * 10)

  function itemRender (current, type, originalElement) {
    if (type === 'prev') {
      return <button><FastBackwardFilled/></button>
    }
    if (type === 'next') {
      return <button><FastForwardFilled/></button>
    }
    return originalElement
  }

  return (
    <>
      <div className={styles.container}>
        <NavLink  to='/home' className={styles.closeBtn}>
          <CloseCircleOutlined className={styles.icon}/>
        </NavLink>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <FontAwesomeIcon
              icon={faAward}
              style={{ marginRight: '7px', color: '#EE7178' }}/>
            <span className={styles.tittle}>Мої замовлення</span>
          </div>
        </div>
        {isAuth
          ? <>
            {!purchases || length === 0
              ? <div className={styles.emptyOrder}>
                {errorMessage && '/' + window.location.href.split('/').pop() ===
                '/orders' &&
                <div style={{ marginBottom: 30 }}>{errorMessage}</div>}
                <NavLink
                  to='/home'
                  className={styles.register}>
                  <span>Перейти до покупок?</span>
                </NavLink>
              </div>
              : purchases.map((purchaseItem, i) =>
                purchaseItem.status_id === 1 || purchaseItem.status_id === 2 ||
                purchaseItem.status_id === 4 ?
                  <div key={purchaseItem.id}
                       className={styles.orderItemContainer}>
                    <div className={styles.counter}>
                      <div className={styles.count}>
                        <span>№ {purchaseItem.id}</span></div>
                    </div>
                    <div className={styles.sum}>
                      <span style={{
                        color: '#EE7178',
                        marginLeft: '7px',
                        marginRight: '7px',
                      }}>Сума замовлення: </span>
                      {purchaseItem.total} грн
                    </div>
                    <div className={styles.counter}>
                      <div className={styles.count}>
                        <span>Дата: {(purchaseItem.created_at)
                        .toLocaleString()
                        .slice(0, 10)}</span>
                      </div>
                    </div>
                    <div className={styles.counter}>
                      <div className={styles.count}>
                                                <span>Година: {
                                                  purchaseItem.created_at.toLocaleString(
                                                    'pl-PL').slice(11, 19)
                                                }</span>
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
                  : null,
              )}
          </>
          : <div className={styles.emptyOrder}>
            {errorMessage && '/' + window.location.href.split('/').pop() ===
            '/orders' &&
            <div style={{ marginBottom: 30 }}>{errorMessage}</div>}
            <p>Для того, щоб зберігати інформацію про замовлення, необхідно
              зараєструватись</p>
            <NavLink
              to='/registerClients'
              className={styles.register}>
              <span>Зараєструватись зараз?</span>
            </NavLink>
          </div>}
        {isAuth && purchases.length > 0 ? <Pagination
          total={pagesCount}
          showLessItems={true}
          showSizeChanger={false}
          itemRender={itemRender}
          className={styles.pagination}
          onChange={(p) => {
            onPageChange(p)
          }}
        /> : null}
        <div className={styles.btn}>
          <NavLink  to='/home' className={styles.goBack}>
            <ApplyBtn
              icon={faArrowLeft}
              label='На головну'/>
          </NavLink>
        </div>
      </div>
    </>
  )
})

export default Orders
