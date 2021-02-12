import React from 'react';
import styles from "./SortBy.module.scss";
import {faCaretDown, faCaretUp, faFileSignature} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Input} from "antd";


const SortBy = ({setFilter, filterBy, searchQuery, setSearchQuery, activeTab, setActiveTab}) => {

    const onHandle = key => () => {
        setFilter(key);
    };

    return <>
        <div className={styles.container}>
            <button
                className={activeTab ? styles.active : styles.tab}
                disabled={true}>
                Сортувати по:
            </button>
            <button
                className={activeTab ? styles.active : styles.tab}
                onClick={onHandle('price_high')}>
                <FontAwesomeIcon
                    icon={faCaretUp}/> Ціна
            </button>
            <button
                className={activeTab ? styles.active : styles.tab}
                onClick={onHandle('price_low')}>
                <FontAwesomeIcon
                    icon={faCaretDown}/> Ціна
            </button>
            <button
                className={`${activeTab ? styles.active : styles.tab} ${styles.weight}`}
                onClick={onHandle('weight_high')}>
                <FontAwesomeIcon
                    icon={faCaretUp}/> Вага
            </button>
            <button
                className={activeTab ? styles.active : styles.tab}
                onClick={onHandle('weight_low')}>
                <FontAwesomeIcon
                    icon={faCaretDown}/> Вага
            </button>
            <Input
                onChange={e => setSearchQuery(e.target.value)}
                value={searchQuery}
                placeholder={'Пошук...'}
            />
        </div>
    </>
};

export default SortBy;
