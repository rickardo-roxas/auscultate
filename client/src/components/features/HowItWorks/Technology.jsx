import React from 'react';
import styles from './Technology.module.css';

function Technology() {
  return (
    <section className={styles.techSection}>
      <h2>Auscultate Technology</h2>
      <p> 
      AuscUltate employs state-of-the-art AI and deep learning techniques to process and analyze lung sounds with remarkable precision. The system utilizes a hybrid architecture combining <strong>Convolutional Neural Networks (CNNs)</strong> for feature extraction from audio spectrograms and <strong>Long Short-Term Memory (LSTM)</strong> networks for sequential data modeling. This hybrid model enables the extraction of both time-invariant and time-dependent features, which are essential for accurate classification of various lung diseases.
      </p>
      <p>
        By extracting key features like <strong>Mel-frequency cepstral coefficients (MFCCs)</strong> and <strong>Chroma features</strong> from raw audio, the platform ensures a robust representation of lung sounds that improves the model’s ability to distinguish between different pulmonary conditions. The deep learning models are trained on a large dataset of labeled lung sound recordings, allowing the system to generalize well to unseen data, making it an invaluable tool for clinicians in diagnosing respiratory diseases.
      </p>
    </section>
  );
}

export default Technology;
