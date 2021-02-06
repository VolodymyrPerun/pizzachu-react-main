import React from 'react';
import Products from "../../../containers/Products/Products";
import styles from "./Home.module.scss"


const Home = () => {
    return (
        <div className={styles.container}>
            <Products/>
        </div>
    )
};

export default Home;
