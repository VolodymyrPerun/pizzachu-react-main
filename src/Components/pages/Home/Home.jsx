import React from 'react';
import Products from "../../../containers/Products/Products";
import styles from "./Home.module.scss"
import PromoBlock from "../../../containers/PromoBlock/PromoBlock";
import '../../../App.scss';

const Home = () => {
    return (
        <div className='app-wrapper-content'>
            <div className={styles.container}>
                <PromoBlock/>
                <Products/>
            </div>
        </div>
    )
};

export default Home;
