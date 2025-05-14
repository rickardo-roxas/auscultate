// Libraries and dependencies
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/Styles.css";

// Main app
import App from './App.jsx';

/**
 * Main entry point for the React application.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);