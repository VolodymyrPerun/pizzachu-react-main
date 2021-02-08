import React from 'react';
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


const Filter = ({type, onPageChangeProductsType, onPageChangeProductsSection}) => {

    return <>

        <div className={styles.inputContainer}>
            <input
                // onChange={e => setSearchQuery(e.target.value)}
                // value={searchQuery}
                placeholder='Пошук...'/>
        </div>

        <div className={styles.container}>
            <TabFilter className={styles.container}
                       FilterItems={TypesFilterItems}
                       onPageChangeProductsType={onPageChangeProductsType}
                       onPageChangeProductsSection={onPageChangeProductsSection}/>
        </div>


        {(type === PRODUCT_TYPE.PIZZA) && <div>
            <TabFilter FilterItems={PizzaSectionsFilterItems}
                       onPageChangeProductsType={onPageChangeProductsType}
                       onPageChangeProductsSection={onPageChangeProductsSection}/>
        </div>}
        {(type === PRODUCT_TYPE.SUSHI_AND_ROLES) && <div>
            <TabFilter FilterItems={SushiAndRolesSectionsFilterItems}
                       onPageChangeProductsType={onPageChangeProductsType}
                       onPageChangeProductsSection={onPageChangeProductsSection}/>
        </div>}
        {(type === PRODUCT_TYPE.SOUPS_AND_SALADS) && <div>
            <TabFilter FilterItems={SoupsAndSaladsSectionsFilterItems}
                       onPageChangeProductsType={onPageChangeProductsType}
                       onPageChangeProductsSection={onPageChangeProductsSection}/>
        </div>}
        {(type === PRODUCT_TYPE.DESSERTS_AND_DRINKS) && <div>
            <TabFilter FilterItems={DessertsAndDrinksSectionsFilterItems}
                       onPageChangeProductsType={onPageChangeProductsType}
                       onPageChangeProductsSection={onPageChangeProductsSection}/>
        </div>}
        {(type === PRODUCT_TYPE.SUPPLEMENTS) && <div>
            <TabFilter FilterItems={SupplementsSectionsFilterItems}
                       onPageChangeProductsType={onPageChangeProductsType}
                       onPageChangeProductsSection={onPageChangeProductsSection}/>
        </div>}
    </>
}

export default Filter;
