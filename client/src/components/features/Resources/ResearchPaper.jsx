import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import styles from './ResearchPaper.module.css';

function ResearchPaper() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Research Paper</h3>
      <hr className={styles.separator} />
      <Accordion activeKey={isOpen ? "0" : null} onSelect={toggleAccordion}>
        <Accordion.Item eventKey="0" className={styles.card}>
          <Accordion.Header>
            <div>
              <div className={styles.titleText}>
                MFCC-Chroma Fusion using a Dual-Channel CNN-LSTM and Demographic-Aware Random Forest for Lung Sound Disease Classification
              </div>
              {!isOpen && (
                <p className={styles.abstractPreview}>
                  <strong>Abstract:</strong> Pulmonary diseases continue to afflict millions worldwide. A common line of defense is the lung disease 
                  detection conducted by doctors through the auscultation...
                </p>
              )}
            </div>
          </Accordion.Header>
          <Accordion.Body>
          <div className={styles.bodyContent}>
            <p>
            <strong>Abstract:</strong> Pulmonary diseases continue to afflict millions worldwide. A common line of defense is the lung disease detection 
              conducted by doctors through the auscultation process. However, the practice has been proven to be subjective and often provides inconsistent 
              results. Establishing an automated classification model that can assist in the diagnosis of a patient would root out the subjectivity and could 
              be of great service to doctors. Therefore, in addressing this concern, the study introduces a deep learning classification model based on a CNN-LSTM 
              algorithm. The models are designed to run parallel with Mel-scale Frequency Cepstral Coefficients (MFCC) and Chromograms employed for feature extraction. 
              A random forest model is also introduced to assess the viability of including demographic information through the diagnosis process. A fusion of the two 
              models is also considered. This paper utilizes the publicly available respiratory sound recordings found in the ICBHI 2017 challenge dataset obtaining a 
              total 6456 respiratory cycles after preprocessing. The novel contribution of this study is the introduction of an additional feature set into a model 
              architecture that showed promise.
            </p>
            <div className={styles.buttonContainer}>
              <button className={styles.readButton}>Read Paper</button>
            </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default ResearchPaper;
