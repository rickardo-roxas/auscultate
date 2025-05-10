import React from 'react';
import {Card as BootstrapCard} from 'react-bootstrap';
import styles from './Card.module.css';

/**
 * @description Reusable Card component that renders a card.
 * @param {*} children - Card body content. Can contain multiple elements.
 * @param {*} className - Optional additional class name for the card.
 * @returns {JSX.Element} - Rendered card component
 * 
 * @example
 * <Card>
 *    <h2>Card Title</h2>
 *   <p>Card content goes here.</p>
 * </Card>
 * 
 * @example
 * <Card className="custom-class">
 *   <h2>Card Title</h2>
 *  <p>Card content goes here.</p>
 * </Card>
 */
function Card({children, className=''}) {
    return (
        <BootstrapCard className={`${styles.card} ${className}`}>
            <BootstrapCard.Body className={styles.body}>
                {children}
            </BootstrapCard.Body>
        </BootstrapCard>
    );
}

export default Card;