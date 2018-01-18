import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem/ProductItem';
import styles from './products-list.scss';

const ProductsList = ({ items }) => (
  <ul className={styles.products}>
    {items.map((item, i) => (
      <ProductItem
        key={i}
        name={item.name}
        price={item.price}
        image={item.picture}
      />
    ))}
  </ul>
);

ProductsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string
    })
  ).isRequired
};

export default ProductsList;
