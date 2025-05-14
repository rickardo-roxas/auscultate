import React from 'react';

import Logo from './Logo';
import Links from './Links';

import styles from './Navbar.module.css';

/**
 * Reusable Navbar component that renders the logo and navigation links.
 * @returns {JSX.Element} - Rendered Navbar component
 */
function Navbar() {
  return (
    <header className={styles.header}>
      <Logo />
      <Links className={styles.links} />
    </header>
  );
}

export default Navbar;
