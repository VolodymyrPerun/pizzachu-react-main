import Tab from "../../../commons/Buttons/Tab/Tab";
import React from "react";
import './TabFilter.scss';

const TabFilter = ({FilterItems, onPageChangeProducts, activeTab}) => {

    return <>
        {FilterItems &&
        FilterItems.map((item, index) => (
            <Tab
                className={activeTab === index ? item.active : item.cN}
                key={index}
                label={item.label}
                handleClick={onPageChangeProducts(item.type, item.section)}/>
        ))}
    </>
};

export default TabFilter;
