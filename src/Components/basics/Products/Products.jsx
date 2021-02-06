import React, {useEffect} from 'react';
import ProductCard from "../../basics/Products/ProductsCard/ProductsCard";
import styles from './Products.module.scss'
import {Pagination} from 'antd';
import {FastBackwardFilled, FastForwardFilled} from '@ant-design/icons';

export const Products = ({products, pageSize, total, type, section, getAllProducts, setCurrentPage}) => {


    console.log(products, total);

    useEffect((currentPage, pageSize, type, section) => {
        debugger
        getAllProducts(type, section, pageSize, currentPage);
    }, []);


    const onPageChange = currentPage => {
        debugger
        setCurrentPage(currentPage);
        getAllProducts(type, section, pageSize, currentPage);
    };

    let pagesCount = Math.floor(Math.ceil(total / pageSize) * 10);

    function itemRender(current, type, originalElement) {
        if (type === 'prev') {
            return <button><FastBackwardFilled/></button>;
        }
        if (type === 'next') {
            return <button><FastForwardFilled/></button>;
        }
        return originalElement;
    }

    return <>

        <div className={styles.cardContainer}>
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

        <Pagination
            className={styles.pagination}
            total={pagesCount}
            itemRender={itemRender}
            showLessItems={true}
            showSizeChanger={false}
            onChange={(p) => {
                onPageChange(p)
            }}
            onClick={(p) => {
                onPageChange(p)
            }}
        />
    </>
}

