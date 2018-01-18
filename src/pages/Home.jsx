import React from 'react';
import ProductItem from '../components/ProductItem/ProductItem';
import styles from './home.scss';

const Home = () => (
  <section className={styles.wrapper}>
    {/* <h1 className={styles.heading}>
      We help you to shop the right product at the right price!
    </h1> */}
    <ProductItem name="Delta Plus Polycarbonate Visor 2 Piece Set - Clear" price='30$' image="http://cf5.s3.souqcdn.com/item/2015/10/18/92/99/51/9/item_L_9299519_10086890.jpg"/>
  </section>
);

export default Home;
