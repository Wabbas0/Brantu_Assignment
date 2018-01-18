import React from 'react';
import styles from './not-found.scss';

const NotFound = () => (
  <div className={styles.wrapper}>
    <h3 className={styles.heading}>no results found</h3>

    <img className={styles.image} src="./fox.png" alt="mr fox" />

    <p className={styles.feedback}>No results found. Please search again.</p>
  </div>
);

export default NotFound;
