import { Pagination } from 'antd'
import PropTypes from 'prop-types'
import React, { memo, useMemo, useState } from 'react'
import SortBy from '../SortBy/SortBy'
import { Filter } from '../Filter/Filter'
import styles from './Products.module.scss'
import { PAGE_DEFAULT, PRODUCT_TYPE } from '../../../constants'
import ProductCard from '../../basics/Products/ProductsCard/ProductsCard'
import { FastBackwardFilled, FastForwardFilled } from '@ant-design/icons'
//import Preloader from "../../commons/Preloader/Preloader";
//////////////////////////////////////////////////

const Products = memo(({
  type,
  total,
  getCart,
  section,
  size_id,
  products,
  pageSize,
  setFilter,
  isFetching,
  searchQuery,
  setCurrentPage,
  getAllProducts,
  setSearchQuery,
  addProductToCart,
}) => {

  useMemo((type, section, size_id, pageSize, currentPage) => {
    let cleanupFunction = false
    try {
      (!cleanupFunction) &&
      getAllProducts(type, section, size_id, pageSize, currentPage)
    } catch (e) {
      console.error(e)
    }
    return (() => {
        cleanupFunction = true
        getAllProducts(type, section, size_id, pageSize, currentPage)
      }
    )
  }, [getAllProducts])

  const [activeTab, setActiveTab] = useState(0)

  const onPageChange = currentPage => {
    setCurrentPage(currentPage)
    getAllProducts(type, section, size_id, pageSize, currentPage)
  }

  const onPageChangeProducts = (keyType, keySection, keySize) => (
    type, section) => {
    getAllProducts(keyType, keySection, keySize)
    !section ? setActiveTab(type) : setActiveTab(section)
  }

  let pagesCount = Math.floor(Math.ceil(total / pageSize) * 10)

  function itemRender (current, type, originalElement) {
    if (type === 'prev') {
      return <button><FastBackwardFilled/></button>
    }
    if (type === 'next') {
      return <button><FastForwardFilled/></button>
    }
    return originalElement
  }

  return <>
    <SortBy
      setFilter={setFilter}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}/>
    <Filter
      type={type}
      activeTab={activeTab}
      onPageChangeProducts={onPageChangeProducts}/>
    <div className={styles.cardContainer}>
      {
        // isFetching
        // ? <Preloader/> :
        products.map(product =>
          <ProductCard
            key={product.productId}
            {...product}
            getCart={getCart}
            isFetching={isFetching}
            addProductToCart={addProductToCart}/>
        )}
    </div>
    <Pagination
      total={pagesCount}
      showLessItems={true}
      showSizeChanger={false}
      itemRender={itemRender}
      className={styles.pagination}
      onChange={(p) => {onPageChange(p)}}/>
  </>
})

Products.propTypes = {
  type: PropTypes.number,
  total: PropTypes.number,
  products: PropTypes.array,
  setFilter: PropTypes.func,
  section: PropTypes.number,
  pageSize: PropTypes.number,
  isFetching: PropTypes.bool,
  searchQuery: PropTypes.string,
  getAllProducts: PropTypes.func,
  setCurrentPage: PropTypes.func,
  setSearchQuery: PropTypes.func,
}

Products.defaultProps = {
  total: 0,
  products: [],
  size_id: null,
  section: null,
  setFilter: 'name',
  isFetching: true,
  type: PRODUCT_TYPE.PIZZA,
  pageSize: PAGE_DEFAULT.PAGE_SIZE,
}

export default Products
