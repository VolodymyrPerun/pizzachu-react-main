import React from 'react';
import styles from "./Filter.module.scss";
import {PRODUCT_TYPE} from '../../../constants/';
import {
    DessertsAndDrinksSectionsFilterItems,
    PizzaSectionsFilterItems,
    PizzasSectionsSizeFilterItems,
    SoupsAndSaladsSectionsFilterItems,
    SushiAndRolesSectionsFilterItems,
    TypesFilterItems
} from "./FilterItems/FilterItems";
import TabFilter from "./TabFilter/TabFilter";
import PropTypes from "prop-types";
import TabSort from "./TabSort/TabSort";


export const Filter = ({
                           type,
                           activeTab,
                           onPageChangeProducts,
                           setFilter
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
            <TabSort FilterItems={PizzasSectionsSizeFilterItems}
                     activeTab={activeTab}
                     setFilter={setFilter}
            />
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
    </>
};

Filter.propTypes = {
    type: PropTypes.number,
    activeTab: PropTypes.oneOfType([
        PropTypes.any,
        PropTypes.number
    ]),
    onPageChangeProducts: PropTypes.func
};

Filter.defaultProps = {
    type: PRODUCT_TYPE.PIZZA,
};
