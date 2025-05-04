import React from 'react';
import { Accordion } from 'react-bootstrap';
import styles from './FAQs.module.css';

function FAQs() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>FAQs</h3>
      <hr className={styles.separator} />
      <Accordion>
        <Accordion.Item eventKey="0" className={styles.card}>
          <Accordion.Header>
            <div className={styles.question}>What audio file formats are supported?</div>
          </Accordion.Header>
          <Accordion.Body>
            We currently support WAV formats. Ensure your audio quality is clear for the best analysis results.
          </Accordion.Body>

        </Accordion.Item>
        <Accordion.Item eventKey="1" className={styles.card}>
          <Accordion.Header>
            <div className={styles.question}>How accurate is the detection algorithm?</div>
          </Accordion.Header>
          <Accordion.Body>
            Our model has been trained on thousands of annotated samples and achieves high accuracy on benchmark datasets like ICBHI 2017. However, results may vary depending on input quality.
          </Accordion.Body>

        </Accordion.Item>
        <Accordion.Item eventKey="2" className={styles.card}>
          <Accordion.Header>
            <div className={styles.question}>Is my uploaded data stored permanently?</div>
          </Accordion.Header>
          <Accordion.Body>
            No. We prioritize user privacy and do not store your data permanently. All uploads are used only for real-time analysis.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" className={styles.card}>
          <Accordion.Header>
            <div className={styles.question}>Can I use the platform for clinical diagnosis?</div>
          </Accordion.Header>
          <Accordion.Body>
            Auscultate is intended for research and educational purposes only. It should not replace professional medical advice, diagnosis, or treatment. Always consult a licensed healthcare provider.
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  );
}

export default FAQs;
