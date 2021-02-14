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
                             total,
                             type,
                             section,
                             getAllProducts,
                             setCurrentPage,
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

    const onPageChangeProductsType = key => (type) => {
        getAllProducts(key);
        setActiveTab(type);
    };

    const onPageChangeProductsSection = (keyType, keySection) => (type, section) => {
        getAllProducts(keyType, keySection);
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

        <SortBy
            searchQuery={searchQuery}
            setFilter={setFilter}
            setSearchQuery={setSearchQuery}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />

        <Filter
            type={type}
            section={section}
            onPageChangeProductsType={onPageChangeProductsType}
            onPageChangeProductsSection={onPageChangeProductsSection}
            activeTab={activeTab}
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

