import React from 'react';
import {Card as BootstrapCard} from 'react-bootstrap';

function Card(children, styles='') {
    return (
        <BootstrapCard className={`${styles.card} ${className}`}>
            <BootstrapCard.Body className={styles.body}>
                {children}
            </BootstrapCard.Body>
        </BootstrapCard>
    );
}

export default Card;