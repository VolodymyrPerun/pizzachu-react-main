import React, {memo, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ProductCard from "../../basics/Products/ProductsCard/ProductsCard";
import styles from './Products.module.scss'
import {Pagination} from 'antd';
import {FastBackwardFilled, FastForwardFilled} from '@ant-design/icons';
import {Filter} from "../Filter/Filter";
import SortBy from "../SortBy/SortBy";
//import Preloader from "../../commons/Preloader/Preloader";
import {PAGE_DEFAULT, PRODUCT_TYPE} from "../../../constants";

const Products = memo(({
                           products,
                           pageSize,
                           total,
                           type,
                           section,
                           size_id,
                           getAllProducts,
                           setCurrentPage,
                           setFilter,
                           searchQuery,
                           isFetching,
                           setSearchQuery,
                           addProductToCart,
                           getCart
                       }) => {


    useEffect((type, section, size_id, pageSize, currentPage) => {
        let cleanupFunction = false;
        try {
            (!cleanupFunction) &&
            getAllProducts(type, section, size_id, pageSize, currentPage);
        } catch (e) {
            console.error(e);
        }
        return (() => {
                cleanupFunction = true
                getAllProducts(type, section, size_id, pageSize, currentPage);
            }
        );
    }, [getAllProducts]);

    const [activeTab, setActiveTab] = useState(0);


    const onPageChange = currentPage => {
        setCurrentPage(currentPage);
        getAllProducts(type, section, size_id, pageSize, currentPage);
    };

    const onPageChangeProducts = (keyType, keySection, keySize) => (type, section) => {
        getAllProducts(keyType, keySection, keySize);
       !section ? setActiveTab(type) : setActiveTab(section);
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

        {/*<PromoBlock isFetching={isFetching} products={products} onPageChangeProducts={onPageChangeProducts}/>*/}

        <SortBy
            searchQuery={searchQuery}
            setFilter={setFilter}
            setSearchQuery={setSearchQuery}
        />

        <Filter
            type={type}
            onPageChangeProducts={onPageChangeProducts}
            activeTab={activeTab}
        />

        <div className={styles.cardContainer}>
            {
                // isFetching
                // ? <Preloader/> :
                    products.map(product =>
                        <ProductCard key={product.productId}
                                     {...product}
                                     isFetching={isFetching}
                                     addProductToCart={addProductToCart}
                                     getCart={getCart}
                        />
                )}
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
        />
    </>
});

Products.propTypes = {
    products: PropTypes.array,
    // types: PropTypes.arrayOf(PropTypes.number),
    // sizes: PropTypes.arrayOf(PropTypes.oneOf([26, 30, 40])),
    pageSize: PropTypes.number,
    total: PropTypes.number,
    type: PropTypes.number,
    section: PropTypes.number,
    searchQuery: PropTypes.string,
    getAllProducts:PropTypes.func,
    setCurrentPage:PropTypes.func,
    setFilter:PropTypes.func,
    setSearchQuery: PropTypes.func,
    isFetching: PropTypes.bool
};

Products.defaultProps = {
    pageSize: PAGE_DEFAULT.PAGE_SIZE,
    type: PRODUCT_TYPE.PIZZA,
    section: null,
    total: 0,
    products: [],
    size_id: null,
    setFilter: 'name',
    isFetching: true
};

export default Products;
