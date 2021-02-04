import React, {useEffect} from 'react';
import ProductCard from "../../basics/Products/ProductsCard/ProductsCard";
import styles from './Products.module.scss'

export const Products = ({products, getAllProducts}) => {

    useEffect(() => {
        getAllProducts();
    }, []);

    return <div className={styles.cardContainer}>
            {/*{!isReady ?*/}
            {/*    <Segment>*/}
            {/*        <Dimmer active>*/}
            {/*            <Loader size='large'>Завантаження...</Loader>*/}
            {/*        </Dimmer>*/}
            {/*        <Image*/}
            {/*            src='https://github.com/VolodymyrPerun/react-it-booking-shop-master/blob/master/assets/loading.gif?raw=true'/>*/}
            {/*    </Segment>*/}
            {/*    :*/}
            {products.map((products, i) => (
                <ProductCard key={i} {...products}/>
            ))}
            {/*}*/}
        </div>
}

