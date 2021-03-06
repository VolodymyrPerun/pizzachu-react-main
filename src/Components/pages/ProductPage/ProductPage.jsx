import React, {memo, useEffect, useState} from 'react';
import styles from './ProductPage.module.scss';
import Preloader from "../../commons/Preloader/Preloader";
import noPhoto from "../../../assets/images/no-aveliable-image.png";
import sizeIcon from '../../../assets/images/diameter-icon.png';
import {PRODUCT_SECTION, PRODUCT_TYPE} from "../../../constants";
import {CloseCircleOutlined, FastBackwardFilled, FastForwardFilled} from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import {
    faArrowLeft,
    faBalanceScaleLeft,
    faBell,
    faCartPlus,
    faInfo,
    faMoneyBillWave,
    faPrescriptionBottle,
    faTruck
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {shuffle} from 'lodash';
import ApplyBtn from "../../commons/Buttons/Apply/ApplyBtn";
import AddTo from "../../commons/Buttons/AddTo/AddTo";
import {CommentForm} from "./CommentForm/CommentForm";
import CommentCard from "./CommentCard/CommentCard";
import Rating from "material-ui-rating/lib";
import Box from "@material-ui/core/Box";
import {Pagination} from 'antd';
import {checkAccessTokenPresent} from "../../../helpers/checkAccessTokenPresent";


export const ProductPage = memo(({
                                     product,
                                     match,
                                     getProductById,
                                     isFetching,
                                     products,
                                     addProductToCart,
                                     getCart,
                                     pageCount,
                                     pageSize,
                                     myID,
                                     commentInfo,
                                     isLoadingComments,
                                     isAuth,
                                     getCommentsFromDB,
                                     sendComment,
                                     setCurrentPage,
                                     deleteChosenComment,
                                     editChosenComment,
                                     currentPage,
                                     setProductMark,
                                     getIsEvaluatedProduct,
                                     getAverageProductMark,
                                     mark,
                                     isMarkLoading,
                                     isClosed,
                                     replyCommentsInfo,
                                     totalReplyCommentsCount,
                                     getReplyCommentsFromDB,
                                     deleteChosenReplyComment,
                                     editChosenReplyComment,
                                     sendReplyComment
                                 }) => {


    useEffect((productId, commentId, pageSize, currentPage) => {
        productId = match.params.productId;
        getProductById(productId);
        getCommentsFromDB(productId, pageSize, currentPage);
        getAverageProductMark(match.params.productId);
        getCart();
        const token = checkAccessTokenPresent();

        if (token) {
            getIsEvaluatedProduct(productId)
        }
    }, [match.params.productId,
        getProductById,
        getCommentsFromDB,
        getCart,
        pageSize,
        getAverageProductMark,
        getIsEvaluatedProduct]);


    let handleClick = (id, count) => {
        addProductToCart(id, count);
    };

    const onSendComment = data => {
        sendComment(match.params.productId, data, pageSize, currentPage);
    };

    const onPageChange = curPage => {
        setCurrentPage(currentPage);
        getCommentsFromDB(match.params.productId, pageSize, curPage);
    };

    let pagesCount = Math.floor(Math.ceil(pageCount / pageSize) * 10);

    function itemRender(current, type, originalElement) {
        if (type === 'prev') {
            return <button><FastBackwardFilled/></button>;
        }
        if (type === 'next') {
            return <button><FastForwardFilled/></button>;
        }
        return originalElement;
    }

    const [star, setStar] = useState(1);

    if (!isMarkLoading) {
        return <Preloader/>
    }

    const evaluateProduct = star => {
        setProductMark(star, match.params.productId);
    };

    return <>
        {
            isFetching ? <Preloader/> :
                <div className={styles.container}>

                    <div className={styles.card}>
                        <NavLink className={styles.closeBtn} to={'/home'}>
                            <CloseCircleOutlined className={styles.icon}/>
                        </NavLink>
                        {product.product_photo
                            ? <img className={styles.image} src={`http://localhost:5000/${product.product_photo}`}
                                   alt={'product'}/>
                            : <img className={styles.image} src={noPhoto} alt={'product'}/>}
                        <p className={styles.title}>{product.name}</p>
                        {product.description
                            ? <p className={styles.description}>
                                <FontAwesomeIcon
                                    style={{marginRight: '7px', fontSize: '18px', color: '#EE7178'}}
                                    icon={faInfo}/>
                                {product.description}
                            </p>
                            : <p className={styles.description}
                                 style={{color: 'transparent', visibility: 'hidden'}}>.</p>}

                        <div className={styles.atributes}>
                            <p className={styles.price}><FontAwesomeIcon
                                style={{marginRight: '10px', color: '#EE7178'}}
                                icon={faMoneyBillWave}/>Ціна: <span>{product.price}</span> грн</p>
                            {product.section_id !== PRODUCT_SECTION.DRINKS
                                ? <p className={styles.weight}><FontAwesomeIcon
                                    style={{marginRight: '7px', color: '#EE7178'}}
                                    icon={faBalanceScaleLeft}/>Вага: <span>{product.weight}</span> гр</p>
                                : <p className={styles.weight}><FontAwesomeIcon
                                    style={{marginRight: '7px', color: '#EE7178'}}
                                    icon={faPrescriptionBottle}/>Об'єм: <span>{product.weight}</span> л</p>}
                            {product.type_id === PRODUCT_TYPE.PIZZA
                                ? <p className={styles.weight}>
                                    <img style={{
                                        position: 'relative',
                                        top: '2px',
                                        marginRight: '7px',
                                        color: '#EE7178',
                                        width: '20px',
                                        height: '20px'
                                    }}
                                         className={styles.image} src={sizeIcon} alt={'icon'}/>
                                    Розмір: <span>{product['ProductSize.size']}</span> см</p>
                                :
                                <p className={styles.weight} style={{color: 'transparent', visibility: 'hidden'}}>.</p>}
                        </div>
                        <p className={styles.delivery}>
                            <FontAwesomeIcon
                                style={{marginRight: '7px', color: '#EE7178'}}
                                icon={faTruck}/>
                            Доставимо до <span style={{color: '#EE7178'}}>29</span> хвилин або даруємо піцу/рол за
                            спізнення
                        </p>
                        <div className={styles.btn}>
                            <AddTo to={'/cart'} label={'Купити'} icon={faCartPlus}
                                   handleClick={() => handleClick(product.productId, 1)}/>
                        </div>
                    </div>

                    {
                        <div className={styles.rate}>
                            <div className={styles.ratingTitle}>Середня
                                оцінка:
                            </div>
                            <Rating name={"half-rating-read"}
                                    value={mark}
                                    precision={0.5}
                                    readOnly/>
                        </div>
                    }

                    {
                        isAuth && <div>
                            <div className={styles.moreProductsTitle}>
                                <FontAwesomeIcon
                                    style={{marginLeft: '7px', fontSize: '18px', color: '#EE7178'}}
                                    icon={faBell}/>
                                (<span style={{fontSize: '18px', color: '#EE7178'}}>{pageCount}</span>) Відгуки про
                                товар {product.name} :
                            </div>
                            <Box component={"fieldset"} mb={3} borderColor={"transparent"}>
                                <div className={styles.ratingTitle}>Оцініть товар {product.name}:</div>
                                <Rating
                                    className={styles.rating}
                                    name={"simple-controlled"}
                                    value={star}
                                    onChange={(star) => {
                                        setStar(star);
                                        evaluateProduct(star)
                                    }}
                                />
                            </Box>
                        </div>
                    }

                    {
                        isLoadingComments ?
                            <Preloader/> :
                            <div className={styles.commentContainer}>
                                <div className={styles.commentArea}>
                                    <CommentForm
                                        onSubmit={onSendComment}
                                        isAuth={isAuth}
                                    />
                                </div>

                                {
                                    commentInfo.map(
                                        comment =>

                                            <CommentCard
                                                key={comment.id}
                                                commentId={comment.id}
                                                commentText={comment.text}
                                                commentTime={comment.created_at}
                                                name={comment["User.name"]}
                                                surname={comment["User.surname"]}
                                                user_photo={comment["User.user_photo"]}
                                                isOwner={myID === comment.userId}
                                                deleteChosenComment={deleteChosenComment}
                                                productId={match.params.productId}
                                                editChosenComment={editChosenComment}
                                                isAuth={isAuth}
                                                currentPage={currentPage}
                                                pageSize={pageSize}
                                                replyCommentsInfo={replyCommentsInfo}
                                                isClosed={isClosed}
                                                getReplyCommentsFromDB={getReplyCommentsFromDB}
                                                match={match}
                                                totalReplyCommentsCount={totalReplyCommentsCount}
                                                deleteChosenReplyComment={deleteChosenReplyComment}
                                                editChosenReplyComment={editChosenReplyComment}
                                                sendReplyComment={sendReplyComment}
                                            />
                                    )
                                }


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

                            </div>
                    }

                    {products.length > 1 ?
                        <>
                            <p className={styles.moreProductsTitle}>Пропонуємо також: </p>
                            <div className={styles.promoContainer}>
                                {shuffle(products).map((prod, i) => {
                                    if (prod
                                        && i <= 3
                                    ) {
                                        return <NavLink key={prod.productId} className={styles.promoCard}
                                                        to={'/productPage/' + prod.productId}>
                                            {prod.product_photo
                                                ? <img className={styles.image}
                                                       src={`http://localhost:5000/${prod.product_photo}`}
                                                       alt={'product'}/>
                                                : <img className={styles.image} src={noPhoto} alt={'product'}/>}
                                            {prod.section_id !== PRODUCT_SECTION.DRINKS
                                                ? <p className={styles.weight}>Вага: <span>{prod.weight}</span> гр</p>
                                                : <p className={styles.weight}>Об'єм: <span>{prod.weight}</span> л</p>}
                                            {prod.type_id === PRODUCT_TYPE.PIZZA
                                                ?
                                                <p className={styles.weight}>Розмір: <span>{prod['ProductSize.size']}</span> см
                                                </p>
                                                : <p className={styles.weight}
                                                     style={{color: 'transparent', visibility: 'hidden'}}>.</p>}
                                            <p className={styles.title}>{prod.name}</p>
                                            {prod.description
                                                ? <p className={styles.description}>{prod.description}</p>
                                                : <p className={styles.description}
                                                     style={{color: 'transparent', visibility: 'hidden'}}>.</p>}
                                            <p className={styles.price}>Ціна: <span>{prod.price}</span> грн.</p>
                                        </NavLink>
                                    } else {
                                        return null
                                    }
                                })}
                            </div>
                        </> : null}


                    <NavLink style={{margin: '30px auto'}} to={'/home'}>
                        <ApplyBtn
                            icon={faArrowLeft}
                            label={'Повернутись назад'}
                        />
                    </NavLink>
                </div>
        }
    </>
});

