import React, {useEffect} from 'react';
import styles from './ProductsCard.module.scss';
import noPhoto from '../../../../assets/images/no-aveliable-image.png';
import {PRODUCT_SECTION} from '../../../../constants/';
import {getAllProducts} from "../../../../redux/reducers/productsReducer/thunks";


const ProductsCard = ({
                          productId,
                          size_id,
                          name,
                          setProductSize,
                          description,
                          product_photo,
                          price,
                          weight,
                          addToCart,
                          addedCount,
                          section_id,
                          ...rest
                      }) => {


    // const availableSizes = [1, 2, 3];
    //const addedCount = cartItems[id] ? cartItems[id].length : 0;


    // const [size, setSize] = React.useState(availableSizes[0]);

    // useEffect((type, section, pageSize, currentPage) => {
    //     // let newSize = setSize(size);
    //     // setProductSize(newSize);
    //     getAllProducts(type, section, pageSize,currentPage)
    // }, []);

    // const changeSize = (size, type, section, pageSize,currentPage,) => {
    //    let newSize = setSize(size);
    //     const obj = {
    //         productId,
    //         size,
    //         price,
    //     };
    //     setProductSize(newSize)
    //         getAllProducts(type, section, pageSize,currentPage,  name, size===newSize)


    //     console.log(size_id);//todo getProduct by name and size_id, limit=1
    // }

    return (
        <div className={styles.card}>
            {product_photo
                ? <img className={styles.image} src={`http://localhost:5000/${product_photo}`} alt={'product'}/>
                : <img className={styles.image} src={noPhoto} alt={'product'}/>}
            {section_id !== PRODUCT_SECTION.DRINKS
                ? <p className={styles.weight}>Вага: <span>{weight}</span> гр</p>
                : <p className={styles.weight}>Об'єм: <span>{weight}</span> л</p>}
            {rest['ProductSize.size']
                ? <p className={styles.weight}>Розмір: <span>{rest['ProductSize.size']}</span> см</p>
                : <p className={styles.weight} style={{color: 'transparent', visibility: 'hidden'}}>.</p>}
            <p className={styles.title}>{name}</p>
            {description
                ? <p className={styles.description}>{description}</p>
                : <p className={styles.description} style={{color: 'transparent', visibility: 'hidden'}}>.</p>}
            <p className={styles.price}>Ціна: <span>{price}</span> грн.</p>

            {/*{availableSizes.map((curSize, curIndex) => (*/}
            {/*    <button*/}
            {/*        key={curIndex}*/}
            {/*        onClick={() => {*/}
            {/*            changeSize(curSize);*/}
            {/*        }}>{curSize} см.*/}
            {/*    </button>*/}

            {/*))}*/}
        </div>
    )
};

export default ProductsCard;
