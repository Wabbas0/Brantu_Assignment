import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.scss';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const Nav = () => (
  <nav>
    <Logo className={styles.navLogo} />

    <ul className={styles.navLinks}>
      <li className={styles.navItem}>
        <Link to="/loyalty" className={styles.navLink}>
          products
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/loyalty" className={styles.navLink}>
          sign in
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/loyalty" className={`${styles.button} ${styles.navLink}`}>
          products
        </Link>
      </li>
    </ul>

    <Button className={styles.menuIcon} isIcon={true}>
      <Icon icon="bars" />
    </Button>
  </nav>
);
export default Nav;
