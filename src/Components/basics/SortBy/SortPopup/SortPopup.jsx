import React, {memo} from 'react';
import PopupMenu from '../PopupMenu/PopupMenu';
import {sortItems} from './sortItems/sortItems';
import PropTypes from "prop-types";


const SortPopup = memo(({setFilter}) => {

    return (
        <div style={{maxWidth: '180px', maxHeight: '20px'}} className="sort">
            <PopupMenu
                setFilter={setFilter}
                sortItems={sortItems}>
            </PopupMenu>
        </div>
    );
});

SortPopup.propTypes = {
    sortItems: PropTypes.arrayOf(PropTypes.object),
    setFilter: PropTypes.func
};

SortPopup.defaultProps = {
    setFilter: 'name'
};

export default SortPopup;
