import React, {useEffect} from 'react';
import styles from './ProductPage.module.scss'
import Preloader from "../../commons/Preloader/Preloader";
import noPhoto from "../../../assets/images/no-aveliable-image.png";
import size from '../../../assets/images/diameter-icon.png'
import {PRODUCT_SECTION} from "../../../constants";
import {CloseCircleOutlined} from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import {
    faBalanceScaleLeft,
    faInfo,
    faMoneyBillWave,
    faPrescriptionBottle,
    faTruck
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ProductPage = ({product, match, getProductById, isFetching, products}) => {
    
    useEffect(() => {
        getProductById(match.params.productId);
    }, [match.params.productId]);


    return <>
        {isFetching
            ? <Preloader/>
            :
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
                        {product['ProductSize.size']
                            ? <p className={styles.weight}>
                                <img style={{
                                    position: 'relative',
                                    top: '2px',
                                    marginRight: '7px',
                                    color: '#EE7178',
                                    width: '20px',
                                    height: '20px'
                                }}
                                     className={styles.image} src={size} alt={'icon'}/>
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
                            {products.map((products, i) => {
                                if (products &&
                                    // products.section_id === 14 &&
                                    // !products.size_id &&
                                    i <= 1) {
                                    return <NavLink key={i} className={styles.promoCard}
                                                    to={'/productPage/' + products.productId}>
                                        {products.product_photo
                                            ? <img className={styles.image}
                                                   src={`http://localhost:5000/${products.product_photo}`}
                                                   alt={'product'}/>
                                            : <img className={styles.image} src={noPhoto} alt={'product'}/>}
                                        {products.section_id !== PRODUCT_SECTION.DRINKS
                                            ? <p className={styles.weight}>Вага: <span>{products.weight}</span> гр</p>
                                            : <p className={styles.weight}>Об'єм: <span>{products.weight}</span> л</p>}
                                        {products['ProductSize.size']
                                            ?
                                            <p className={styles.weight}>Розмір: <span>{products['ProductSize.size']}</span> см
                                            </p>
                                            : <p className={styles.weight}
                                                 style={{color: 'transparent', visibility: 'hidden'}}>.</p>}
                                        <p className={styles.title}>{products.name}</p>
                                        {products.description
                                            ? <p className={styles.description}>{products.description}</p>
                                            : <p className={styles.description}
                                                 style={{color: 'transparent', visibility: 'hidden'}}>.</p>}
                                        <p className={styles.price}>Ціна: <span>{products.price}</span> грн.</p>
                                    </NavLink>
                                } else {
                                    return null
                                }
                            })}
                        </div>
                    </> : null}
            </div>
        }
    </>
};

