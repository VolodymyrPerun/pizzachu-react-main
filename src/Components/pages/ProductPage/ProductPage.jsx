import { shuffle } from 'lodash'
import { Pagination } from 'antd'
import { NavLink } from 'react-router-dom'
import Rating from 'material-ui-rating/lib'
import React, { memo, useEffect, useState } from 'react'
import Box from '@material-ui/core/Box'
import styles from './ProductPage.module.scss'
import CommentCard from './CommentCard/CommentCard'
import AddTo from '../../commons/Buttons/AddTo/AddTo'
import { CommentForm } from './CommentForm/CommentForm'
import Preloader from '../../commons/Preloader/Preloader'
import ApplyBtn from '../../commons/Buttons/Apply/ApplyBtn'
import sizeIcon from '../../../assets/images/diameter-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PRODUCT_SECTION, PRODUCT_TYPE } from '../../../constants'
import noPhoto from '../../../assets/images/no-aveliable-image.png'
import { checkAccessTokenPresent } from '../../../helpers/checkAccessTokenPresent'
import {
  FastForwardFilled,
  FastBackwardFilled,
  CloseCircleOutlined,
} from '@ant-design/icons'
import {
  faBell,
  faInfo,
  faTruck,
  faCartPlus,
  faArrowLeft,
  faMoneyBillWave,
  faBalanceScaleLeft,
  faPrescriptionBottle,
} from '@fortawesome/free-solid-svg-icons'
//////////////////////////////////////////////////

export const ProductPage = memo(({
  myID,
  mark,
  match,
  isAuth,
  product,
  getCart,
  products,
  pageSize,
  isClosed,
  pageCount,
  isFetching,
  sendComment,
  commentInfo,
  currentPage,
  isMarkLoading,
  setCurrentPage,
  getProductById,
  setProductMark,
  addProductToCart,
  sendReplyComment,
  isLoadingComments,
  getCommentsFromDB,
  replyCommentsInfo,
  editChosenComment,
  deleteChosenComment,
  getIsEvaluatedProduct,
  getAverageProductMark,
  getReplyCommentsFromDB,
  editChosenReplyComment,
  totalReplyCommentsCount,
  deleteChosenReplyComment,
}) => {

  useEffect((productId, commentId, pageSize, currentPage) => {
    productId = match.params.productId
    getProductById(productId)
    getCommentsFromDB(productId, pageSize, currentPage)
    getAverageProductMark(match.params.productId)
    getCart()
    const token = checkAccessTokenPresent()

    if (token) {
      getIsEvaluatedProduct(productId)
    }
  }, [
    pageSize,
    getCart,
    getProductById,
    getCommentsFromDB,
    getAverageProductMark,
    getIsEvaluatedProduct,
    match.params.productId,
  ])

  let handleClick = (id, count) => {
    addProductToCart(id, count)
  }

  const onSendComment = data => {
    sendComment(match.params.productId, data, pageSize, currentPage)
  }

  const onPageChange = curPage => {
    setCurrentPage(currentPage)
    getCommentsFromDB(match.params.productId, pageSize, curPage)
  }

  let pagesCount = Math.floor(Math.ceil(pageCount / pageSize) * 10)

  function itemRender (current, type, originalElement) {
    if (type === 'prev') {
      return <button><FastBackwardFilled/></button>
    }
    if (type === 'next') {
      return <button><FastForwardFilled/></button>
    }
    return originalElement
  }

  const [star, setStar] = useState(1)

  if (!isMarkLoading) {
    return <Preloader/>
  }

  const evaluateProduct = star => {
    setProductMark(star, match.params.productId)
  }

  return <>
    {isFetching ? <Preloader/>
      : <div className={styles.container}>
        <div className={styles.card}>
          <NavLink to='/home' className={styles.closeBtn}>
            <CloseCircleOutlined className={styles.icon}/>
          </NavLink>
          {product.product_photo
            ? <img
              alt='product'
              className={styles.image}
              src={`http://localhost:5000/${product.product_photo}`}/>
            : <img className={styles.image} src={noPhoto} alt='product'/>}
          <p className={styles.title}>{product.name}</p>
          {product.description
            ? <p className={styles.description}>
              <FontAwesomeIcon
                icon={faInfo}
                style={{
                  color: '#EE7178',
                  fontSize: '18px',
                  marginRight: '7px',
                }}/>
              {product.description}
            </p>
            : <p className={styles.description}
                 style={{ color: 'transparent', visibility: 'hidden' }}>.</p>}
          <div className={styles.attributes}>
            <p className={styles.price}>
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                style={{ marginRight: '10px', color: '#EE7178' }}/>
              Ціна: <span>{product.price}</span> грн
            </p>
            {product.section_id !== PRODUCT_SECTION.DRINKS
              ? <p className={styles.weight}>
                <FontAwesomeIcon
                  icon={faBalanceScaleLeft}
                  style={{ marginRight: '7px', color: '#EE7178' }}/>
                Вага: <span>{product.weight}</span> гр
              </p>
              : <p className={styles.weight}>
                <FontAwesomeIcon
                  icon={faPrescriptionBottle}
                  style={{ marginRight: '7px', color: '#EE7178' }}/>
                Об'єм: <span>{product.weight}</span> л
              </p>}
            {product.type_id === PRODUCT_TYPE.PIZZA
              ? <p className={styles.weight}>
                <img
                  alt='icon'
                  src={sizeIcon}
                  className={styles.image}
                  style={{
                    top: '2px',
                    width: '20px',
                    height: '20px',
                    color: '#EE7178',
                    marginRight: '7px',
                    position: 'relative',
                  }}/>
                Розмір: <span>{product['ProductSize.size']}</span> см</p>
              : <p className={styles.weight}
                   style={{ color: 'transparent', visibility: 'hidden' }}>.</p>}
          </div>
          <p className={styles.delivery}>
            <FontAwesomeIcon
              icon={faTruck}
              style={{ marginRight: '7px', color: '#EE7178' }}/>
            Доставимо до <span style={{ color: '#EE7178' }}>29</span> хвилин
            або даруємо піцу/рол за
            спізнення
          </p>
          <div className={styles.btn}>
            <AddTo
              to='/cart'
              label='Купити'
              icon={faCartPlus}
              handleClick={() => handleClick(product.productId, 1)}/>
          </div>
        </div>
        {<div className={styles.rate}>
          <div className={styles.ratingTitle}>
            Середня оцінка:
          </div>
          <Rating
            readOnly
            value={mark}
            precision={0.5}
            name='half-rating-read'/>
        </div>}
        {isAuth && <div>
          <div className={styles.moreProductsTitle}>
            <FontAwesomeIcon
              icon={faBell}
              style={{
                fontSize: '18px',
                color: '#EE7178',
                marginLeft: '7px',
              }}/>
            (<span style={{
            fontSize: '18px',
            color: '#EE7178',
          }}>{pageCount}</span>) Відгуки про
            товар {product.name} :
          </div>
          <Box mb={3} component='fieldset' borderColor='transparent'>
            <div className={styles.ratingTitle}>
              Оцініть товар {product.name}:
            </div>
            <Rating
              value={star}
              name='simple-controlled'
              className={styles.rating}
              onChange={(star) => {
                setStar(star)
                evaluateProduct(star)
              }}/>
          </Box>
        </div>}
        {isLoadingComments
          ? <Preloader/>
          : <div className={styles.commentContainer}>
            <div className={styles.commentArea}>
              <CommentForm
                isAuth={isAuth}
                onSubmit={onSendComment}/>
            </div>
            {commentInfo.map(comment =>

              <CommentCard
                match={match}
                isAuth={isAuth}
                key={comment.id}
                pageSize={pageSize}
                isClosed={isClosed}
                commentId={comment.id}
                currentPage={currentPage}
                commentText={comment.text}
                name={comment['User.name']}
                commentTime={comment.created_at}
                surname={comment['User.surname']}
                isOwner={myID === comment.userId}
                productId={match.params.productId}
                sendReplyComment={sendReplyComment}
                editChosenComment={editChosenComment}
                replyCommentsInfo={replyCommentsInfo}
                user_photo={comment['User.user_photo']}
                deleteChosenComment={deleteChosenComment}
                editChosenReplyComment={editChosenReplyComment}
                getReplyCommentsFromDB={getReplyCommentsFromDB}
                totalReplyCommentsCount={totalReplyCommentsCount}
                deleteChosenReplyComment={deleteChosenReplyComment}/>,
            )}

            <Pagination
              total={pagesCount}
              showLessItems={true}
              itemRender={itemRender}
              showSizeChanger={false}
              className={styles.pagination}
              onChange={(p) => {
                onPageChange(p)
              }}/>
          </div>}
        {products.length > 1 ?
          <>
            <p className={styles.moreProductsTitle}>Пропонуємо також: </p>
            <div className={styles.promoContainer}>
              {shuffle(products).map((prod, i) => {
                if (prod && i <= 3) {
                  return <NavLink
                    key={prod.productId}
                    className={styles.promoCard}
                    to={'/productPage/' + prod.productId}>
                    {prod.product_photo
                      ? <img
                        alt='product'
                        className={styles.image}
                        src={`http://localhost:5000/${prod.product_photo}`}/>
                      : <img
                        alt='product'
                        src={noPhoto}
                        className={styles.image}/>}
                    {prod.section_id !== PRODUCT_SECTION.DRINKS
                      ? <p
                        className={styles.weight}>Вага: <span>{prod.weight}</span> гр
                      </p>
                      : <p
                        className={styles.weight}>Об'єм: <span>{prod.weight}</span> л
                      </p>}
                    {prod.type_id === PRODUCT_TYPE.PIZZA
                      ? <p
                        className={styles.weight}>Розмір: <span>{prod['ProductSize.size']}</span> см
                      </p>
                      : <p className={styles.weight}
                           style={{
                             color: 'transparent',
                             visibility: 'hidden',
                           }}>.</p>}
                    <p className={styles.title}>{prod.name}</p>
                    {prod.description
                      ? <p className={styles.description}>{prod.description}</p>
                      : <p className={styles.description}
                           style={{
                             color: 'transparent',
                             visibility: 'hidden',
                           }}>.</p>}
                    <p
                      className={styles.price}>Ціна: <span>{prod.price}</span> грн.
                    </p>
                  </NavLink>
                } else {
                  return null
                }
              })}
            </div>
          </> : null}
        <NavLink to='/home' style={{ margin: '30px auto' }}>
          <ApplyBtn
            icon={faArrowLeft}
            label='Повернутись назад'/>
        </NavLink>
      </div>
    }
  </>
})
