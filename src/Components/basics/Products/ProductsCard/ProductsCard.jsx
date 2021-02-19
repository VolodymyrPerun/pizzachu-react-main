import React from 'react';
import styles from './ProductsCard.module.scss';
import noPhoto from '../../../../assets/images/no-aveliable-image.png';
import {PRODUCT_SECTION, PRODUCT_TYPE} from '../../../../constants/';
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";


const ProductsCard = ({
                          productId,
                          name,
                          type_id,
                          setProductSize,
                          description,
                          product_photo,
                          price,
                          weight,
                          section_id,
                          isFetching,
                          ...rest
                      }) => {


    return (
        <>
            {isFetching
                ? <img className={styles.image} src={noPhoto} alt={'product'}/>
                : <NavLink className={styles.card} to={'/productPage/' + productId}>
                    {product_photo
                        ? <img className={styles.image} src={`http://localhost:5000/${product_photo}`} alt={'product'}/>
                        : <img className={styles.image} src={noPhoto} alt={'product'}/>}
                    <div className={styles.weight}>
                        {section_id !== PRODUCT_SECTION.DRINKS
                            ? <p>Вага: <span>{weight}</span> гр</p>
                            : <p>Об'єм: <span>{weight}</span> л</p>}
                        {type_id === PRODUCT_TYPE.PIZZA
                            ? <p>Розмір: <span>{rest['ProductSize.size']}</span> см</p>
                            : <p style={{color: 'transparent', visibility: 'hidden'}}>.</p>}
                    </div>
                    <p className={styles.title}>{name}</p>
                    {description
                        ? <p className={styles.description}>{description}</p>
                        : <p className={styles.description} style={{color: 'transparent', visibility: 'hidden'}}>.</p>}
                    <p className={styles.price}>Ціна: <span>{price}</span> грн.</p>
                </NavLink>
            }
        </>
    )
};

ProductsCard.propTypes = {
    productId: PropTypes.number,
    size_id: PropTypes.number,
    name: PropTypes.string,
    setProductSize:PropTypes.func,
    description: PropTypes.string,
    product_photo: PropTypes.string,
    price: PropTypes.number,
    weight: PropTypes.number,
    section_id: PropTypes.number,
    isFetching: PropTypes.bool,
    rest: PropTypes.array
};

export default ProductsCard;
