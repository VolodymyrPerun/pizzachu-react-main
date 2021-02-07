import React from 'react';
import styles from './ProductsCard.module.scss';
import noPhoto from '../../../../assets/images/no-aveliable-image.png';


const ProductsCard = ({name, description, product_photo, price, weight, addToCart, addedCount, section_id, ...rest}) => {

    return (
        <div className={styles.card}>
            {product_photo
                ? <img className={styles.image} src={`http://localhost:5000/${product_photo}`} alt={'product'}/>
                : <img className={styles.image} src={noPhoto} alt={'product'}/>}
            {section_id !== 12
                ?
                <p className={styles.weight}>Вага: <span>{weight}</span> гр</p>
                : <p className={styles.weight}>Об'єм: <span>{weight}</span> л</p>}
            {rest['ProductSize.size']
                ?
                <p className={styles.weight}>Розмір: <span>{rest['ProductSize.size']}</span> см</p>
                : <p className={styles.weight} style={{color: 'white', visibility: 'hidden'}}>.</p>}
            <p className={styles.title}>{name}</p>
            {description
                ?
                <p className={styles.description}>{description}</p>
                : <p className={styles.description} style={{color: 'white', visibility: 'hidden'}}>.</p>}
            <p className={styles.price}>Ціна: <span>{price}</span> грн.</p>
        </div>
    )
};

export default ProductsCard;
