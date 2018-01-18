import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.scss';

const Button = ({
  className, onClick, children, isIcon,
}) => (
  <button
    className={`${!isIcon ? styles.button : styles.isIcon} ${className}`}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  isIcon: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  onClick: () => undefined,
  isIcon: false,
};

export default Button;
