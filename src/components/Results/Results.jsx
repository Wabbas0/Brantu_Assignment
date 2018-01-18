import React from 'react';
import PropTypes from 'prop-types';
import ProductsList from '../ProductsList/ProductsList';
import NotFound from '../NotFound/NotFound';
import Button from '../Button/Button';
import styles from './results.scss';

const Results = ({ results, onClear }) => (
  <div className={styles.wrapper}>
    {results.length > 0 ? <ProductsList items={results} /> : <NotFound />}

    <Button className={styles.button} onClick={onClear}>
      clear results
    </Button>
  </div>
);

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  })).isRequired,

  onClear: PropTypes.func.isRequired,
};

export default Results;
