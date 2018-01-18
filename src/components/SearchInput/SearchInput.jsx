import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import styles from './search.scss';

const SearchBar = ({ className, value, placeholder, onChange }) => (
  <label htmlFor="query" className={`${styles.wrapper} ${className}`}>
    <input
      className={styles.input}
      type="search"
      placeholder={placeholder}
      name="query"
      value={value}
      onChange={onChange}
      id="query"
    />

    <Link className={styles.button} to={`/search?q=${value}`}>
      <Icon className={styles.icon} icon="search" />
    </Link>
  </label>
);

SearchBar.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.func,
  placeholder: PropTypes.string
};

SearchBar.defaultProps = {
  className: '',
  placeholder: ''
};

export default SearchBar;
