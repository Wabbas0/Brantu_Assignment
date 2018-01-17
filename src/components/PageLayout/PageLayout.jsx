import React from 'react';
import styles from './page-layout.scss';

const PageLayout = ({children}) => (
    <main className={styles.contentWrapper}>
        {children}
    </main>
);


export default PageLayout;