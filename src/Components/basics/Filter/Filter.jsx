import React from 'react'
import PropTypes from 'prop-types'
import styles from './Filter.module.scss'
import TabFilter from './TabFilter/TabFilter'
import { PRODUCT_TYPE } from '../../../constants'
import FieldSettings from './FilterItems/FieldSettings'
//////////////////////////////////////////////////

export const Filter = ({ type, activeTab, onPageChangeProducts }) => {
  return <>
    {FieldSettings.map((item, index) => (
      (type === item.type) && <div className={styles.container}>
        <TabFilter
          key={index}
          activeTab={activeTab}
          FilterItems={item.filterItem}
          onPageChangeProducts={onPageChangeProducts}/>
      </div>
    ))}
  </>
}

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
