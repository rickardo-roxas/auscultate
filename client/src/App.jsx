import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

// Pages and Components
import Wrapper from './components/layout/Wrapper';
import ErrorBoundary from './components/ui/ErrorBoundary/ErrorBoundary';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import ResourcesPage from './pages/ResourcesPage';

/**
 * Main application component.
 * @returns {JSX.Element} - The main application component.
 */
function App() {
  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Wrapper>
        <Routes>
          <Route path='/' element={
            <ErrorBoundary fallback={<div>Oops! Failed to load this page.</div>}>
              <HomePage />
            </ErrorBoundary>}
          />
          <Route path='/how-it-works' element={
            <ErrorBoundary fallback={<div>Oops! Failed to load this page.</div>}>
              <HowItWorksPage />
            </ErrorBoundary>}
          />
          <Route path='/resources' element={
            <ErrorBoundary fallback={<div>Oops! Failed to load this page.</div>}>
              <ResourcesPage />
            </ErrorBoundary>}
          />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;