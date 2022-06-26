import React from 'react'
import PropTypes from 'prop-types'
import styles from './Filter.module.scss'
import TabFilter from './TabFilter/TabFilter'
import { PRODUCT_TYPE } from '../../../constants'
import  FieldSettings from './FilterItems/FieldSettings'
import { TypesFilterItems } from "./FilterItems/FilterItems";
//////////////////////////////////////////////////

export const Filter = ({ type, activeTab, onPageChangeProducts }) =>
  <>
    <div className={styles.container}>
      <TabFilter
        activeTab={activeTab}
        filterItems={TypesFilterItems}
        onPageChangeProducts={onPageChangeProducts}/>
    </div>
    {
      FieldSettings.map((item, index) => (
          <div key={index}>
            {
              type === item.type &&
              <TabFilter
                activeTab={activeTab}
                filterItems={item.filterItem}
                onPageChangeProducts={onPageChangeProducts}
              />
            }
          </div>
        )
      )
    }
  </>

Filter.propTypes = {
  type: PropTypes.number,
  onPageChangeProducts: PropTypes.func,
  activeTab: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.number,
  ]),
}

Filter.defaultProps = {
  type: PRODUCT_TYPE.PIZZA,
}
