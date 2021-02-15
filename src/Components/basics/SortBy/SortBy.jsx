import React from 'react';
import styles from "./SortBy.module.scss";
import SortPopup from "./SortPopup/SortPopup";


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

export default SortBy;
