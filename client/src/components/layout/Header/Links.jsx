import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Links.module.css';

/**
 * Navbar links component
 * @returns {JSX.Element} - Rendered Links component
 */
function Links({ className = '' }) {
  return (
    <nav className={`${styles.nav} ${className}`}>
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? styles.activeLink : styles.link}
      >
        Home
      </NavLink>
      <NavLink 
        to="/how-it-works" 
        className={({ isActive }) => isActive ? styles.activeLink : styles.link}
      >
        How It Works
      </NavLink>
      <NavLink 
        to="/resources" 
        className={({ isActive }) => isActive ? styles.activeLink : styles.link}
      >
        Resources
      </NavLink>
    </nav>
  );
}

export default Links;
