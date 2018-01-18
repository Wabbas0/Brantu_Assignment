import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './product-item.scss';

const ProductItem = ({ name, price, image }) => (
  <li className={styles.productItem}>
    <Link className={styles.prodLink} to={`/products?name=${name}`}>
      <div className={styles.prodInfo}>
        <h3 title={name} className={styles.prodName}>
          {name}
        </h3>
        <span className={styles.prodPrice}>{`${price}$`}</span>
      </div>
      <div className={styles.prodImage}>
        <img className={styles.image} src={image} alt="product pic" />
      </div>
    </Link>
  </li>
);

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

export default ProductItem;
