import React from 'react';
import styles from "./SortBy.module.scss";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const SortBy = ({setFilter, searchQuery, setSearchQuery}) => {

    const onHandle = key => () => {
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
                className={styles.tab}
                onClick={onHandle('price_high')}>
                <FontAwesomeIcon
                    icon={faCaretUp}/> Ціна
            </button>
            <button
                className={styles.tab}
                onClick={onHandle('price_low')}>
                <FontAwesomeIcon
                    icon={faCaretDown}/> Ціна
            </button>
            <button
                className={styles.tab}
                onClick={onHandle('weight_high')}>
                <FontAwesomeIcon
                    icon={faCaretUp}/> Вага
            </button>
            <button
                className={styles.tab}
                onClick={onHandle('weight_low')}>
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
