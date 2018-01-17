import React from 'react';
import PropTypes from 'prop-types';
import styles from './icon.scss';

const Icon = ({ icon }) => <i className={`fa fa-${icon} ${styles.icon}`} aria-hidden="true" />;

Icon.propTypes = {
  icon: PropTypes.string.isRequired
};

export default Icon;
