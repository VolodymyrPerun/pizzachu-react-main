import React from 'react';
import styles from './PopupMenu.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

const PopupMenu = ({items, onClick}) => {


    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState(0);
    const blockRef = React.useRef(0);
    const clickOutsideCallback = React.useCallback(e => {
        if (!e.path.includes(blockRef.current)) {
            setVisiblePopup(false);
        }
    }, []);

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    }

    const handleClick = item => {
        if (onClick) {
            onClick(item);
        }
        setActiveItem(item);
        setVisiblePopup(false);
    };

    React.useEffect(() => {
        document.querySelector('body').addEventListener('onClick', clickOutsideCallback);
        return () => document.querySelector('body').removeEventListener('onClick', clickOutsideCallback);
    }, [clickOutsideCallback]);


    return (
        <>
            <div className={styles.container} onClick={toggleVisiblePopup}>

                <div style={{maxWidth: '180px', maxHeight: '50px', fontSize: '17px'}} className="sort__label">
                    <FontAwesomeIcon
                        className={visiblePopup ? styles.rotated : ''}
                        icon={faCaretDown}
                    /><b>Сортувати по: </b>
                </div>
            </div>
            {visiblePopup && (
                <div ref={blockRef} className={styles.popupMenu}>
                    <ul>
                        {items.map((item, index) => (
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
};

export default PopupMenu;
