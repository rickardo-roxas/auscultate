import React from 'react';
import styles from './ErrorBoundary.module.css';
import { toast } from "react-toastify";
/**
 * ErrorBoundary component to catch JavaScript errors in child components.
 */
class ErrorBoundary extends React.Component {
    /**
     * Constructor to initialize the state.
     * @param {object} props - Component props
     */
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    /**
     * Lifecycle method to catch errors in child components.
     * @returns {Object} - The new state
     */
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    /**
     * Lifecycle method to log error information. 
     * @param {err} error - Error object
     * @param {string} errorInfo - Error information
     */
    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
        toast.error("Something went wrong. Please try again.");
    }

    /**
     * Renders the fallback UI if an error occurs.
     * @returns {JSX.Element} - Rendered component
     */
    render() {
        if (this.state.hasError) {
            return this.props.fallback || (
                <div className={styles.errorContainer}>
                    <h2 className={styles.errorTitle}>Something went wrong</h2>
                    <p className={styles.errorMessage}>Please refresh the page or try again later.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
