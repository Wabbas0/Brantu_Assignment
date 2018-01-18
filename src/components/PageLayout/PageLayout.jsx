import React from 'react';
import PropTypes from 'prop-types';
import styles from './page-layout.scss';

const PageLayout = ({ children }) => (
  <main className={styles.contentWrapper}>{children}</main>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
