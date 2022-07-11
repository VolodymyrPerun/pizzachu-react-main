import { Pagination } from 'antd'
import Box from '@material-ui/core/Box'
import { NavLink } from 'react-router-dom'
import Rating from 'material-ui-rating/lib'
import { useTranslation } from 'react-i18next'
import React, { memo, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {
  FastForwardFilled,
  FastBackwardFilled,
} from '@ant-design/icons'
//
import styles from './ProductPage.module.scss'
//
import CommentCard from './CommentCard/CommentCard'
import ProductCard from './ProductCard/ProductCard'
import ProductOffer from './ProductOffer/ProductOffer'
import { CommentForm } from './CommentForm/CommentForm'
import Preloader from '../../commons/Preloader/Preloader'
import ApplyBtn from '../../commons/Buttons/Apply/ApplyBtn'
import { checkAccessTokenPresent } from '../../../helpers/checkAccessTokenPresent'
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
  const { t } = useTranslation()

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
    if (type === 'prev') return <button><FastBackwardFilled/></button>

    if (type === 'next') return <button><FastForwardFilled/></button>

    return originalElement
  }

  const [star, setStar] = useState(1)

  if (!isMarkLoading) return <Preloader/>

  const evaluateProduct = star => {
    setProductMark(star, match.params.productId)
  }

  return <>
    {
      isFetching
        ? <Preloader/>
        : <div className={styles.container}>
          <ProductCard product={product} handleClick={handleClick}/>
          {
            <div className={styles.rate}>
              <div className={styles.ratingTitle}>{t('Average score')}:</div>
              <Rating
                readOnly
                value={mark}
                precision={0.5}
                name='half-rating-read'
              />
            </div>
          }
          {
            isAuth && <div>
              <div className={styles.moreProductsTitle}>
                <FontAwesomeIcon
                  icon={faBell}
                  style={{
                    fontSize: '18px',
                    color: '#EE7178',
                    marginLeft: '7px',
                  }}
                />
                (
                <span style={{ fontSize: '18px', color: '#EE7178' }}>
              {pageCount}
            </span>
                ){` ${t('Product reviews')} ${product.name} `}:
              </div>
              <Box mb={3} component='fieldset' borderColor='transparent'>
                <div className={styles.ratingTitle}>
                  {`${t('Rate the product')} ${product.name}`}:
                </div>
                <Rating
                  value={star}
                  name='simple-controlled'
                  className={styles.rating}
                  onChange={(star) => {
                    setStar(star)
                    evaluateProduct(star)
                  }}
                />
              </Box>
            </div>
          }
          {
            isLoadingComments
              ? <Preloader/>
              : <div className={styles.commentContainer}>
                <div className={styles.commentArea}>
                  <CommentForm
                    isAuth={isAuth}
                    onSubmit={onSendComment}
                  />
                </div>
                {
                  commentInfo.map(comment =>
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
                      deleteChosenReplyComment={deleteChosenReplyComment}
                    />,
                  )
                }
                <Pagination
                  total={pagesCount}
                  showLessItems={true}
                  itemRender={itemRender}
                  showSizeChanger={false}
                  className={styles.pagination}
                  onChange={(p) => onPageChange(p)}
                />
              </div>
          }
          {
            products.length > 1 && <ProductOffer products={products}/>
          }
          <NavLink to='/home' style={{ margin: '130px auto' }}>
            <ApplyBtn icon={faArrowLeft} label={t('Go back')}/>
          </NavLink>
        </div>
    }
  </>
})
