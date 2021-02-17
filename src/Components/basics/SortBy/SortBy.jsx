import React from 'react';
import styles from "./SortBy.module.scss";
import SortPopup from "./SortPopup/SortPopup";
import PropTypes from "prop-types";
import {PAGE_DEFAULT, PRODUCT_TYPE} from "../../../constants";


const SortBy = ({setFilter, searchQuery, setSearchQuery}) => {

    return <>

        <div className={styles.container}>
            <input
                onChange={e => setSearchQuery(e.target.value)}
                value={searchQuery}
                placeholder={'Пошук...'}
            />
            <div className={styles.sortPopup}>
                <SortPopup setFilter={setFilter}/>
            </div>
        </div>
    </>
};

SortBy.propTypes = {
    searchQuery: PropTypes.string,
    setFilter:PropTypes.func,
    setSearchQuery: PropTypes.func
};

SortBy.defaultProps = {
    setFilter: 'name'
};

export default SortBy;
