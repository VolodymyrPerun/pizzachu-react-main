import React from 'react'
import PropTypes from 'prop-types'
import styles from './SortBy.module.scss'
import SortPopup from './SortPopup/SortPopup'
//////////////////////////////////////////////////

const SortBy = ({ setFilter, searchQuery, setSearchQuery }) => {

  return <>
    <div className={styles.container}>
      <input
        placeholder='Пошук...'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}/>
      <div className={styles.sortPopup}>
        <SortPopup setFilter={setFilter}/>
      </div>
    </div>
  </>
}

SortBy.propTypes = {
  setFilter: PropTypes.func,
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
}

SortBy.defaultProps = {
  setFilter: 'name',
}

export default SortBy
