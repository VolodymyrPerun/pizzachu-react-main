import Tab from "../../../commons/Buttons/Tab/Tab";
import React from "react";
import './TabFilter.scss';

const TabFilter = ({FilterItems, onPageChangeProductsType, onPageChangeProductsSection}) => {

    return <>
        {FilterItems &&
        FilterItems.map((item, index) => (
            <Tab
                className={item.cN}
                key={index}
                label={item.label}
                handleClick={!item.section
                    ? onPageChangeProductsType(item.type)
                    : onPageChangeProductsSection(item.type, item.section)}/>
        ))}
    </>
};

export default TabFilter;
