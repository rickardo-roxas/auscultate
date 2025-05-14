import React from 'react';
import styles from './Heading.module.css';

function Heading() {
  return (
    <section className={styles.section}>
      <h2>How Auscultate Works</h2>
      <p>
      Auscultate uses a classification model using a deep learning architecture to identify lung diseases 
      based on lung sounds—supporting faster and more accurate pulmonary assessments.
      </p>
    </section>
  );
}

export default Heading;
