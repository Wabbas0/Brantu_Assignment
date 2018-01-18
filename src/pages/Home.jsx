import React from 'react';
import ProductsList from '../components/ProductsList/ProductsList';
import productsData from '../data/Products.json'
import styles from './home.scss';

const Home = () => (
  <section className={styles.wrapper}>
    {/* <h1 className={styles.heading}>
      We help you to shop the right product at the right price!
    </h1> */}
    <ProductsList items={productsData}/>
  </section>
);

export default Home;
