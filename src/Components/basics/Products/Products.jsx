import React, {useEffect, useState} from 'react';
import ProductCard from "../../basics/Products/ProductsCard/ProductsCard";
import styles from './Products.module.scss'
import {Pagination} from 'antd';
import {FastBackwardFilled, FastForwardFilled} from '@ant-design/icons';
import {Filter} from "../Filter/Filter";
import SortBy from "../SortBy/SortBy";
import Preloader from "../../commons/Preloader/Preloader";

export const Products = ({
                             products,
                             pageSize,
                             currentPage,
                             total,
                             type,
                             section,
                             getAllProducts,
                             setCurrentPage,
                             setProductsType,
                             setProductsSection,
                             filterBy,
                             searchQuery,
                             setSearchQuery,
                             setFilter,
                             isFetching
                         }) => {

    useEffect((type, section, pageSize, currentPage) => {
        getAllProducts(type, section, pageSize, currentPage);
    }, [getAllProducts]);

    const [activeTab, setActiveTab] = useState(0);


    const onPageChange = currentPage => {
        setCurrentPage(currentPage);
        getAllProducts(type, section, pageSize, currentPage);
    };

    const onPageChangeProductsType = key => (type, pageSize, currentPage) => {
        setProductsType(key);
        getAllProducts(key, pageSize, currentPage);
        setActiveTab(type);
    };

    const onPageChangeProductsSection = (keyType, keySection) => (type, section, pageSize, currentPage) => {
        setProductsSection(keySection);
        getAllProducts(keyType, keySection, pageSize, currentPage);
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

        <SortBy
            filterBy={filterBy}
            searchQuery={searchQuery}
            setFilter={setFilter}
            setSearchQuery={setSearchQuery}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />

        <Filter
            type={type}
            section={section}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChangeProductsType={onPageChangeProductsType}
            onPageChangeProductsSection={onPageChangeProductsSection}
            activeTab={activeTab}
            getAllProducts={getAllProducts}
        />

        <div className={styles.cardContainer}>
            {isFetching
                ? <Preloader/>
                : products.map((products, i) => (
                    <ProductCard key={i} {...products} isFetching={isFetching}/>
                ))}
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
};

