import React from 'react';
import PopupMenu from '../PopupMenu/PopupMenu';
import {sortItems} from './sortItems/sortItems';


const SortPopup = ({setFilter}) => {

    return (
        <div style={{maxWidth: '180px', maxHeight: '20px'}} className="sort">
            <PopupMenu
                onClick={setFilter}
                sortItems={sortItems}>
            </PopupMenu>
        </div>
    );
};

export default SortPopup;
