import React from 'react'
//
import '../../../App.scss'
import styles from './Home.module.scss'
//
import Products from '../../../containers/Products/Products'
import PromoBlock from '../../../containers/PromoBlock/PromoBlock'
//////////////////////////////////////////////////

const Home = () => (
  <div className='app-wrapper-content'>
    <div className={styles.container}>
      <PromoBlock/>
      <Products/>
    </div>
  </div>
)

export default Home
