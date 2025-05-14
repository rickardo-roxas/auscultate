import React from 'react';
import ResearchPaper from '../components/features/Resources/ResearchPaper';
import FAQs from '../components/features/Resources/FAQs';
import styles from './ResourcesPage.module.css';

function ResourcesPage() {
  return (
    <>
      <main className={styles.pageContainer}>
        <h1 className={styles.title}>Resources</h1>
        <ResearchPaper />
        <FAQs />
      </main>
    </>
  );
}

export default ResourcesPage;
