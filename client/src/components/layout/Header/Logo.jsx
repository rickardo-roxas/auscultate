// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Local
import Image from '../../ui/Image';
import logo from '../../../assets/icons/logo_solid.png';

import styles from './Logo.module.css';

/**
 * Reusable Logo component that renders the logo of Auscultate.
 * @returns {JSX.Element} - Rendered Logo component
 */
function Logo() {
    return (
        <Link to="/" className={styles.logo}>
            <Image 
                alt="Auscultate logo"
                src={logo}
                width={ 120 }
                height={ 120 }
            />
        </Link>
    );
}

export default Logo;