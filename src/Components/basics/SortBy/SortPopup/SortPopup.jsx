import React, { memo } from 'react'
import PropTypes from 'prop-types'
import PopupMenu from '../PopupMenu/PopupMenu'
import { sortItems } from './sortItems/sortItems'
//////////////////////////////////////////////////

const SortPopup = memo(({ setFilter }) => {

  return (
    <div  className='sort' style={{ maxWidth: '180px', maxHeight: '20px' }}>
      <PopupMenu
        setFilter={setFilter}
        sortItems={sortItems}>
      </PopupMenu>
    </div>
  )
})

SortPopup.propTypes = {
  setFilter: PropTypes.func,
  sortItems: PropTypes.arrayOf(PropTypes.object),
}

SortPopup.defaultProps = {
  setFilter: 'name',
}

export default SortPopup
