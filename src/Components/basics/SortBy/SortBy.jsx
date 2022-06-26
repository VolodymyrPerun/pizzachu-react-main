import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
//
import styles from './SortBy.module.scss'
import SortPopup from './SortPopup/SortPopup'
//////////////////////////////////////////////////

const SortBy = ({ setFilter, searchQuery, setSearchQuery }) => {
  const { t } = useTranslation()

  return <div className={styles.container}>
    <input
      value={searchQuery}
      placeholder={`${t('Search')}...`}
      onChange={e => setSearchQuery(e.target.value)}
    />
    <div className={styles.sortPopup}>
      <SortPopup setFilter={setFilter}/>
    </div>
  </div>
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
