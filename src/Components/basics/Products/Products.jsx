import React, {useEffect} from 'react';
import ProductCard from "../../basics/Products/ProductsCard/ProductsCard";
import styles from './Products.module.scss'
import {Pagination} from 'antd';
import {FastBackwardFilled, FastForwardFilled} from '@ant-design/icons';

export const Products = ({products, pageSize, total, currentPage, getAllProducts, setCurrentPage, setPageSize}) => {

    useEffect((currentPage, pageSize) => {
        getAllProducts(currentPage, pageSize);
    }, []);


    const onPageChange = currentPage => {
        debugger
        setCurrentPage(currentPage);
        debugger
        getAllProducts(currentPage, pageSize);
    };

    let pagesCount = Math.ceil(Math.floor(total / pageSize) * 10);

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

