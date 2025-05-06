import React from 'react';

// Components
import Navbar from '../components/layout/Header/Navbar';
import Footer from '../components/layout/Footer/Footer';
import Heading from '../components/features/HowItWorks/Heading';
import HowItWorksCards from '../components/features/HowItWorks/HowItWorksCards';
import Technology from '../components/features/HowItWorks/Technology';

function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        <Heading />
        <HowItWorksCards />
        <Technology />
      </main>
      <Footer />
    </>
  );
}

export default HowItWorksPage;
