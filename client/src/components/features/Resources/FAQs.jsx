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
          We currently support .WAV and .MP3 files. For optimal analysis, please ensure that your audio files are clear and of good quality.
          </Accordion.Body>

        </Accordion.Item>
        <Accordion.Item eventKey="1" className={styles.card}>
          <Accordion.Header>
            <div className={styles.question}>How accurate is the detection algorithm?</div>
          </Accordion.Header>
          <Accordion.Body>
            The model has been trained on thousands of annotated samples and achieves high accuracy on recognized datasets like ICBHI 2017. Please note that accuracy may vary based on the quality of the input audio.
          </Accordion.Body>

        </Accordion.Item>
        <Accordion.Item eventKey="2" className={styles.card}>
          <Accordion.Header>
            <div className={styles.question}>Is my uploaded data stored permanently?</div>
          </Accordion.Header>
          <Accordion.Body>
            No, your privacy is a top priority. We do not store any uploaded data permanently. Audio files are processed only for real-time analysis and are not retained after analysis is complete.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" className={styles.card}>
          <Accordion.Header>
            <div className={styles.question}>Can I use the platform for clinical diagnosis?</div>
          </Accordion.Header>
          <Accordion.Body>
          Auscultate is designed for research and educational purposes only. It is not intended to replace professional medical advice or diagnosis. Always consult a licensed healthcare provider for any medical concerns.
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  );
}

export default FAQs;
