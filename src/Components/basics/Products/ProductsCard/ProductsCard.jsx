import React from 'react';
import styles from './ProductsCard.module.scss';


const ProductsCard = ({name, description, product_photo, price, weight, addToCart, addedCount, ...rest}) => {

    // console.log(products['ProductSize.size']);


    // console.log('_________________3');
    // console.log(['ProductSize.size']);
    // console.log('_________________3');

    return (
        <div className={styles.card}>
            <img className={styles.image} src={`http://localhost:5000/${product_photo}`} alt={'avatar'}/>
            <p className={styles.weight}>Вага: <span>{weight}</span> гр.</p>
            {rest['ProductSize.size']
                ?
                <p className={styles.weight}>Розмір: <span>{rest['ProductSize.size']}</span> см.</p>
                : <p className={styles.weight} style={{color: 'white', visibility: 'hidden'}}>.</p>}
            <p className={styles.title}>{name}</p>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}>Ціна: <span>{price}</span> грн.</p>
        </div>
    )
};

export default ProductsCard;
