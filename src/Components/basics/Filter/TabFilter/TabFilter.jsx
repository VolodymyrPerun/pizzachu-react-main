import './TabFilter.scss'
import React from 'react'
import Tab from '../../../commons/Buttons/Tab/Tab'
//////////////////////////////////////////////////

const TabFilter = ({ activeTab, filterItems, onPageChangeProducts }) =>
  <>
    {
      filterItems &&
      filterItems.map((item, index) => (
        <Tab
          key={index}
          label={item.label}
          className={activeTab === index ? item.active : item.cN}
          handleClick={onPageChangeProducts(item.type, item.section, item.size_id)}
        />
      ))
    }
  </>;

export default TabFilter;
