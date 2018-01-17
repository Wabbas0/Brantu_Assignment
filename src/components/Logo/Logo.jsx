import React from 'react';
import { Link } from 'react-router-dom';
import styles from './logo.scss';

const Logo = () => (
  <Link to="/" className={styles.logo}>
    <h1 className={styles.logoText}>
      Elprices<span className={styles.tld}>.com</span>
    </h1>
  </Link>
);

export default Logo;
