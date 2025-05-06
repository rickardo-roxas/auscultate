import React from 'react';
import styles from './HowItWorksCards.module.css';
import { FaFileUpload, FaClipboardCheck, FaSearch } from 'react-icons/fa';


const cards = [
  {
    icon: <FaFileUpload size={50} />,
    title: 'Upload',
    description: (
      <>
        Users upload <strong>recorded lung sounds</strong> in WAV format through our platform.
      </>
    ),
  },
  {
    icon: <FaSearch size={50} />,
    title: 'Analysis',
    description: 'The system extracts MFCC and Chroma features and uses a CNN-LSTM model to detect lung diseases based on lung sounds.',
  },
  {
    icon: <FaClipboardCheck size={50} />,
    title: 'Results',
    description: 'Users receive results highlighting the lung disease with visual and textual interpretation.',
  },
];

function HowItWorksCards() {
  return (
    <section className={styles.container}>
      {cards.map((card, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.iconWrapper}>
            <div className={styles.icon}>{card.icon}</div>
          </div>
          <h3 className={styles.title}>{card.title}</h3>
          <p className={styles.description}>{card.description}</p>
        </div>
      ))}
    </section>
  );
}

export default HowItWorksCards;
