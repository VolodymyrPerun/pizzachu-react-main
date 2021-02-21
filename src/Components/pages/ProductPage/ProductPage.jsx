import React, {memo, useEffect} from 'react';
import styles from './ProductPage.module.scss'
import Preloader from "../../commons/Preloader/Preloader";
import noPhoto from "../../../assets/images/no-aveliable-image.png";
import sizeIcon from '../../../assets/images/diameter-icon.png'
import {PRODUCT_SECTION, PRODUCT_TYPE} from "../../../constants";
import {CloseCircleOutlined} from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import {
    faArrowLeft,
    faBalanceScaleLeft,
    faInfo,
    faMoneyBillWave,
    faPrescriptionBottle,
    faTruck
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {shuffle} from 'lodash';
import ApplyBtn from "../../commons/Buttons/Apply/ApplyBtn";

export const ProductPage = memo(({product, match, getProductById, isFetching, products}) => {

    useEffect(() => {
        getProductById(match.params.productId);
    }, [match.params.productId, getProductById]);


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
                        : <p className={styles.description} style={{color: 'transparent', visibility: 'hidden'}}>.</p>}
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
                            : <p className={styles.weight} style={{color: 'transparent', visibility: 'hidden'}}>.</p>}


                    </div>
                    <p className={styles.delivery}>
                        <FontAwesomeIcon
                            style={{marginRight: '7px', color: '#EE7178'}}
                            icon={faTruck}/>
                        Доставимо до <span style={{color: '#EE7178'}}>29</span> хвилин або даруємо піцу/рол за спізнення
                    </p>
                </div>

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

