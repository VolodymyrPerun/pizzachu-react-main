import React from 'react';
import PopupMenu from '../PopupMenu/PopupMenu';
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";

const SortPopup = ({setFilter}) => {

    const items = [
        {
            value: 'price_low', label: 'Від дешевих до дорогих', icon: faCaretUp
        },
        {
            value: 'price_high', label: 'Від дорогих до дешевих', icon: faCaretDown
        },
        {
            value: 'weight_low', label: 'Від найменшої ваги', icon: faCaretUp
        },
        {
            value: 'weight_high', label: 'Від найбільшої ваги', icon: faCaretDown
        }
    ];

    return (
        <div style={{maxWidth: '180px', maxHeight: '20px'}} className="sort">
            <PopupMenu
                onClick={setFilter}
                items={items}>
            </PopupMenu>
        </div>
    );
};

export default SortPopup;
