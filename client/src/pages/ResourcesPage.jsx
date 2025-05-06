import React from 'react';
import Navbar from '../components/layout/Header/Navbar';
import Footer from '../components/layout/Footer/Footer';
import ResearchPaper from '../components/features/Resources/ResearchPaper';
import FAQs from '../components/features/Resources/FAQs';
import styles from './ResourcesPage.module.css';

function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.pageContainer}>
        <h1 className={styles.title}>Resources</h1>
        <ResearchPaper />
        <FAQs />
      </main>
      <Footer />
    </>
  );
}

export default ResourcesPage;
