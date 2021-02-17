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
import PropTypes from "prop-types";


export const Filter = ({
                           type,
                           activeTab,
                           onPageChangeProducts
                       }) => {

    return <>

        <div className={styles.container}>
            <TabFilter FilterItems={TypesFilterItems}
                       activeTab={activeTab}
                       onPageChangeProducts={onPageChangeProducts}/>
        </div>


        {(type === PRODUCT_TYPE.PIZZA) && <div>
            <TabFilter FilterItems={PizzaSectionsFilterItems}
                       activeTab={activeTab}
                       onPageChangeProducts={onPageChangeProducts}/>
        </div>}
        {(type === PRODUCT_TYPE.SUSHI_AND_ROLES) && <div>
            <TabFilter FilterItems={SushiAndRolesSectionsFilterItems}
                       activeTab={activeTab}
                       onPageChangeProducts={onPageChangeProducts}/>
        </div>}
        {(type === PRODUCT_TYPE.SOUPS_AND_SALADS) && <div>
            <TabFilter FilterItems={SoupsAndSaladsSectionsFilterItems}
                       activeTab={activeTab}
                       onPageChangeProducts={onPageChangeProducts}/>
        </div>}
        {(type === PRODUCT_TYPE.DESSERTS_AND_DRINKS) && <div>
            <TabFilter FilterItems={DessertsAndDrinksSectionsFilterItems}
                       activeTab={activeTab}
                       onPageChangeProducts={onPageChangeProducts}/>
        </div>}
        {(type === PRODUCT_TYPE.SUPPLEMENTS) && <div>
            <TabFilter FilterItems={SupplementsSectionsFilterItems}
                       activeTab={activeTab}
                       onPageChangeProducts={onPageChangeProducts}/>
        </div>}
    </>
};

Filter.propTypes = {
    type: PropTypes.number,
    activeTab: PropTypes.number,
    onPageChangeProducts: PropTypes.func
};

Filter.defaultProps = {
    type: PRODUCT_TYPE.PIZZA,
};
