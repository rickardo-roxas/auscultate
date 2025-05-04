import React from 'react';
import styles from './AuscultateHero.module.css';
import { Button } from 'react-bootstrap';


function AuscultateHero() {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.title}>AUSCULTATE</h1>
      <p className={styles.subtitle}>
        AuscUltate uses AI technology to analyze and detect abnormalities in lung sounds
      </p>
      <div className={styles.buttonGroup}>
        <Button variant="primary" className={styles.primaryBtn}>Upload Sound</Button>
        <Button variant="outline-primary" className={styles.secondaryBtn}>Learn More</Button>
      </div>
    </section>
  );
}

export default AuscultateHero;
