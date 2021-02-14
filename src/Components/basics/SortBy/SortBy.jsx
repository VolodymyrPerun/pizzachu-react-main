import React from 'react';
import styles from "./SortBy.module.scss";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const SortBy = ({setFilter, searchQuery, setSearchQuery, activeTab}) => {

    const filterOptions = key => () => {
        setFilter(key);
    };

    return <>
        <div className={styles.container}>
            <button
                className={styles.tab}
                disabled={true}>
                Сортувати по:
            </button>
            <button
                className={activeTab ? styles.activeTab : styles.tab}
                onClick={filterOptions('price_high')}>
                <FontAwesomeIcon
                    icon={faCaretUp}/> Ціна
            </button>
            <button
                className={activeTab ? styles.activeTab : styles.tab}
                onClick={filterOptions('price_low')}>
                <FontAwesomeIcon
                    icon={faCaretDown}/> Ціна
            </button>
            <button
                className={activeTab ? styles.activeTab : styles.tab}
                onClick={filterOptions('weight_high')}>
                <FontAwesomeIcon
                    icon={faCaretUp}/> Вага
            </button>
            <button
                className={activeTab ? styles.activeTab : styles.tab}
                onClick={filterOptions('weight_low')}>
                <FontAwesomeIcon
                    icon={faCaretDown}/> Вага
            </button>
            <input
                onChange={e => setSearchQuery(e.target.value)}
                value={searchQuery}
                placeholder={'Пошук...'}
            />
        </div>
    </>
};

export default SortBy;
