import Tab from "../../../commons/Buttons/Tab/Tab";
import React from "react";
import './TabFilter.scss';

const TabFilter = ({FilterItems, onPageChangeProducts, activeTab}) => {

    return <>
        {FilterItems &&
        FilterItems.map((item, index) => (
            <Tab
                key={index}
                className={activeTab === index ? item.active : item.cN}
                label={item.label}
                handleClick={onPageChangeProducts(item.type, item.section, item.size_id)}
            />
        ))}
    </>
};

export default TabFilter;
