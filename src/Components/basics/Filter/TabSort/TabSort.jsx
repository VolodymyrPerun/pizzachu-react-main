import Tab from "../../../commons/Buttons/Tab/Tab";
import React, {useState} from "react";
import './TabSort.scss';

const TabSort = ({FilterItems, setFilter}) => {

    const [activeTab, setActiveTab] = useState(0);

    const handle = item => {
        if (setFilter) {
            setFilter(item);
        }
        setActiveTab(item)
    }

    return <>
        {FilterItems &&
        FilterItems.map((item, index) => (
            <Tab
                key={index}
                label={item.label}
                className={activeTab === item ? item.active : item.cN}
                handleClick={(() => handle(item.size))}
            />
        ))}
    </>
};

// Products.propTypes = {
//    // FilterItems: PropTypes.array,
//    // setFilter: PropTypes.func,
// };
//
// Products.defaultProps = {
//    // setFilter: L
// };

export default TabSort;
