import React from 'react';
import { Link } from 'react-router-dom';
import styles from './logo.scss';

const Logo = () => (
  <Link to="/" className={'test'}>
    <h1>
      Elprices<span>.com</span>
    </h1>
  </Link>
);

export default Logo;
