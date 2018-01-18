import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import styles from './home.scss';

const Home = () => (
  <section className={styles.wrapper}>
    <h1 className={styles.heading}>
      We help you to shop the right product at the right price!
    </h1>
    <SearchBar value="" onChange={() => console.log('yay')} />
  </section>
);

export default Home;
