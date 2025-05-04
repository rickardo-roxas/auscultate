import React from 'react';
import Navbar from '../components/layout/Header/Navbar';
import Footer from '../components/layout/Footer/Footer';
import AuscultateHero from '../components/features/Hero/AuscultateHero';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <AuscultateHero />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
