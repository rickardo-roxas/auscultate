import React from 'react';
import styles from './HowItWorksCards.module.css';
import { FaFileUpload, FaClipboardCheck, FaSearch } from 'react-icons/fa';


const cards = [
  {
    icon: <FaFileUpload size={50} />,
    title: 'Upload',
    description: (
      <>
        Easily upload your <strong>recorded lung sounds</strong> in .WAV or .MP3 format via our user-friendly platform, ensuring your data is ready for analysis.
      </>
    ),
  },
  {
    icon: <FaSearch size={50} />,
    title: 'Analysis',
    description: '        Our advanced AI system analyzes your lung sounds by extracting key features and leveraging a deep learning model to detect potential lung diseases with high accuracy.',
  },
  {
    icon: <FaClipboardCheck size={50} />,
    title: 'Results',
    description: 'Receive detailed results that provide clear visual and textual insights into any detected lung diseases, helping you make informed health decisions.',
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
