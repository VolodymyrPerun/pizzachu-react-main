import React, {useEffect, useState} from 'react';
import styles from './PromoBlock.module.scss'
import noPhoto from "../../../../assets/images/no-aveliable-image.png";
import {PRODUCT_SECTION, PRODUCT_TYPE, SIZES_DEFAULT} from "../../../../constants";
import {NavLink} from "react-router-dom";
import {faTruck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Timer from "../../../commons/Timer/Timer";
//import Preloader from "../../../commons/Preloader/Preloader";


export const PromoBlock = ({
                               //isFetching,
                               products,
                               getAllPromoProducts
}) => {

    let [type, setType] = useState(PRODUCT_TYPE.PIZZA);

    setTimeout(() => {
        setType(type = PRODUCT_TYPE.PIZZA);
    }, 15000);

    setTimeout(() => {
        setType(type = PRODUCT_TYPE.SUSHI_AND_ROLES);
    }, 10000);

    useEffect(() => {
        getAllPromoProducts(type, PRODUCT_SECTION.PROMOTIONAL, SIZES_DEFAULT.XL);
    }, [type, getAllPromoProducts]);


    return <>
        {
            //isFetching ? <Preloader/> :

            <div className={styles.container}>

                <div>
                    <h2>Акція тижня!</h2>
                    <h3>До кінця акції залишилось: </h3>
                    <Timer/>
                </div>

                <p className={styles.delivery}>

                    <span><FontAwesomeIcon
                        style={{marginRight: '7px', color: '#EE7178'}}
                        icon={faTruck}/>Доставимо до <span style={{color: '#EE7178'}}>29</span> хвилин або даруємо піцу/рол за спізнення</span>
                </p>

                {<div className={styles.promoContainer}>
                    {products.map((prod, i) => {
                        if (prod
                            && i <= 1
                        ) {
                            return <NavLink key={prod.productId} className={styles.promoCard}
                                            to={'/productPage/' + prod.productId}>
                                <div className={styles.promoLabel}>
                                    {type === PRODUCT_TYPE.PIZZA ? '-50%' : '-110грн'}
                                </div>
                                {prod.product_photo
                                    ? <img className={styles.image}
                                           src={`http://localhost:5000/${prod.product_photo}`}
                                           alt={'product'}/>
                                    : <img className={styles.image} src={noPhoto} alt={'product'}/>}
                                {prod.section_id !== PRODUCT_SECTION.DRINKS
                                    ? <p className={styles.weight}>Вага: <span>{prod.weight}</span> гр</p>
                                    : <p className={styles.weight}>Об'єм: <span>{prod.weight}</span> л</p>}
                                <p className={styles.title}>{prod.name}</p>
                                <p className={styles.price}>Ціна: <span>{prod.price}</span> грн.</p>
                            </NavLink>
                        } else {
                            return null
                        }
                    })}
                </div>}

            </div>
        }
    </>
};

