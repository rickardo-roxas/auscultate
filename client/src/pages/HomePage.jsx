import React from 'react';
import AuscultateHero from '../components/features/Hero/AuscultateHero';
import FileUpload from '../components/features/FileUpload/FileUpload';

function HomePage() {
  return (
    <>
      <AuscultateHero />
      <div id='upload'>
        <FileUpload />
      </div>
    </>
  );
}

export default HomePage;
