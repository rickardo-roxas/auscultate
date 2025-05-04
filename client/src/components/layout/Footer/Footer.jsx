import React from 'react';

import logo from '../../../assets/icons/logo_solid.png';
import styles from './Footer.module.css';

/**
 * Reusable Footer component that renders the footer section of the application.
 * @returns {JSX.Element} - Rendered footer component
 */
function Footer() {
    return (
        <footer>
            <img 
                src={logo} 
                alt="Logo" 
                className={styles.logo}
            />
            <p 
                className={styles.copyright}
            >
                &copy; 2025 The First Se7en. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;