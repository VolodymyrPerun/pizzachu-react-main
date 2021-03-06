import React, {memo, useMemo} from 'react';
import styles from './PopupMenu.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import {PRODUCT_TYPE} from "../../../../constants";

let label = "оберіть метод сортування";
const PopupMenu = memo(({sortItems, setFilter}) => {

    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState(0);
    const blockRef = React.useRef(0);
    const clickOutsideCallback = React.useCallback(e => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(blockRef.current)) {
            setVisiblePopup(false);
        }
    }, []);

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    }

    const handleClick = item => {
        if (setFilter) {
            setFilter(item);
        }
        setActiveItem(item);
        setVisiblePopup(false);

        switch (item) {
            case ('price_low'):
                return label = sortItems[0].label;
            case ('price_high'):
                return label = sortItems[1].label;
            case ('weight_low'):
                return label = sortItems[2].label;
            case ('weight_high'):
                return label = sortItems[3].label
            default:
                return label = sortItems[0].label;
        }
    };

    useMemo(() => {
        document.querySelector('body').addEventListener('click', clickOutsideCallback);
        return () => document.querySelector('body').removeEventListener('click', clickOutsideCallback);
    }, [clickOutsideCallback]);


    return (
        <>
            <div ref={blockRef} className={styles.container} onClick={toggleVisiblePopup}>

                <div style={{width: '180px', maxHeight: '50px', fontSize: '17px'}} className="sort__label">
                    <FontAwesomeIcon
                        className={visiblePopup ? styles.rotated : ''}
                        icon={faCaretDown}
                    />
                    <b>Сортувати по: </b><br/>
                    <span className={styles.label}>{label}</span>
                </div>
            </div>
            {visiblePopup && (
                <div className={styles.popupMenu}>
                    <ul>
                        {sortItems.map((item, index) => (
                            <li
                                className={item.value === activeItem ? styles.active : ''}
                                onClick={(() => handleClick(item.value))}
                                key={index}>
                                <FontAwesomeIcon icon={item.icon}/>
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
});

PopupMenu.propTypes = {
    sortItems: PropTypes.arrayOf(PropTypes.object),
    setFilter: PropTypes.func
};

PopupMenu.defaultProps = {
    type: PRODUCT_TYPE.PIZZA,
    setFilter: 'name'
};

export default PopupMenu;
