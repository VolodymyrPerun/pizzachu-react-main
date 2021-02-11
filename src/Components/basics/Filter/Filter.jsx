import React, {useEffect} from 'react';
import styles from "./Filter.module.scss";
import {PRODUCT_TYPE} from '../../../constants/';
import {
    TypesFilterItems,
    PizzaSectionsFilterItems,
    SushiAndRolesSectionsFilterItems,
    DessertsAndDrinksSectionsFilterItems,
    SupplementsSectionsFilterItems,
    SoupsAndSaladsSectionsFilterItems
} from "./FilterItems/FilterItems";
import TabFilter from "./TabFilter/TabFilter";
import SortBy from "../SortBy/SortBy";


export const Filter = ({
                           products,
                           type,
                           activeTab,
                           onPageChangeProductsType,
                           onPageChangeProductsSection,
                           setFilter,
                           filterBy,
                           searchQuery,
                           setSearchQuery
                       }) => {

    console.log(products);

    return <>

        <div className={styles.inputContainer}>
            <SortBy
                onPageChangeProductsType={onPageChangeProductsType}
                filterBy={filterBy}
                searchQuery={searchQuery}
                setFilter={setFilter}
                setSearchQuery={setSearchQuery}/>
        </div>

        <div className={styles.container}>
            <TabFilter FilterItems={TypesFilterItems}
                       activeTab={activeTab}
                       onPageChangeProductsType={onPageChangeProductsType}
                       onPageChangeProductsSection={onPageChangeProductsSection}/>
        </div>


        {(type === PRODUCT_TYPE.PIZZA) && <div>
            <TabFilter FilterItems={PizzaSectionsFilterItems}
                       activeTab={activeTab}
                       onPageChangeProductsType={onPageChangeProductsType}
                       onPageChangeProductsSection={onPageChangeProductsSection}/>
        </div>}
        {(type === PRODUCT_TYPE.SUSHI_AND_ROLES) && <div>
            <TabFilter FilterItems={SushiAndRolesSectionsFilterItems}
                       activeTab={activeTab}
                       onPageChangeProductsType={onPageChangeProductsType}
                       onPageChangeProductsSection={onPageChangeProductsSection}/>
        </div>}
        {(type === PRODUCT_TYPE.SOUPS_AND_SALADS) && <div>
            <TabFilter FilterItems={SoupsAndSaladsSectionsFilterItems}
                       activeTab={activeTab}
                       onPageChangeProductsType={onPageChangeProductsType}
                       onPageChangeProductsSection={onPageChangeProductsSection}/>
        </div>}
        {(type === PRODUCT_TYPE.DESSERTS_AND_DRINKS) && <div>
            <TabFilter FilterItems={DessertsAndDrinksSectionsFilterItems}
                       activeTab={activeTab}
                       onPageChangeProductsType={onPageChangeProductsType}
                       onPageChangeProductsSection={onPageChangeProductsSection}/>
        </div>}
        {(type === PRODUCT_TYPE.SUPPLEMENTS) && <div>
            <TabFilter FilterItems={SupplementsSectionsFilterItems}
                       activeTab={activeTab}
                       onPageChangeProductsType={onPageChangeProductsType}
                       onPageChangeProductsSection={onPageChangeProductsSection}/>
        </div>}
    </>
};
