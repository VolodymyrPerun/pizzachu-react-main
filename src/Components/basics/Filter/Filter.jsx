import React from 'react'
import PropTypes from 'prop-types'
import styles from './Filter.module.scss'
import TabFilter from './TabFilter/TabFilter'
import { PRODUCT_TYPE } from '../../../constants/'
import {
    TypesFilterItems,
    PizzaSectionsFilterItems,
    SushiAndRolesSectionsFilterItems,
    SoupsAndSaladsSectionsFilterItems,
    DessertsAndDrinksSectionsFilterItems,
} from './FilterItems/FilterItems'
//////////////////////////////////////////////////

export const Filter = ({ type, activeTab, onPageChangeProducts }) => {
  return <>
    <div className={styles.container}>
      <TabFilter activeTab={activeTab}
                 FilterItems={TypesFilterItems}
                 onPageChangeProducts={onPageChangeProducts}/>
    </div>
    {(type === PRODUCT_TYPE.PIZZA) && <div>
      <TabFilter activeTab={activeTab}
                 FilterItems={PizzaSectionsFilterItems}
                 onPageChangeProducts={onPageChangeProducts}/>
    </div>}
    {(type === PRODUCT_TYPE.SUSHI_AND_ROLES) && <div>
      <TabFilter activeTab={activeTab}
                 FilterItems={SushiAndRolesSectionsFilterItems}
                 onPageChangeProducts={onPageChangeProducts}/>
    </div>}
    {(type === PRODUCT_TYPE.SOUPS_AND_SALADS) && <div>
      <TabFilter activeTab={activeTab}
                 FilterItems={SoupsAndSaladsSectionsFilterItems}
                 onPageChangeProducts={onPageChangeProducts}/>
    </div>}
    {(type === PRODUCT_TYPE.DESSERTS_AND_DRINKS) && <div>
      <TabFilter activeTab={activeTab}
                 FilterItems={DessertsAndDrinksSectionsFilterItems}
                 onPageChangeProducts={onPageChangeProducts}/>
    </div>}
  </>
}

Filter.propTypes = {
  type: PropTypes.number,
  activeTab: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.number,
  ]),
  onPageChangeProducts: PropTypes.func,
}

Filter.defaultProps = {
  type: PRODUCT_TYPE.PIZZA,
}
