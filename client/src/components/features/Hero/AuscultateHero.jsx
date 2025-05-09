import React from 'react';
import styles from './AuscultateHero.module.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function AuscultateHero() {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.title}>AUSCULTATE</h1>
      <p className={styles.subtitle}>
        AuscUltate uses AI technology to analyze and detect abnormalities in lung sounds
      </p>
      <div className={styles.buttonGroup}>
        <a href='#upload'>
          <Button variant="primary" className={styles.primaryBtn}>Upload Sound</Button>
        </a>
        <Link to='/how-it-works'>
          <Button variant="outline-primary" className={styles.secondaryBtn}>Learn More</Button>
        </Link>
      </div>
    </section>
  );
}

export default AuscultateHero;
