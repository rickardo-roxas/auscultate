import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import styles from './ProgressModal.module.css';

function ProgressModal({ show, onClose, step }) {
    const steps = ['Uploading', 'Extracting Features', 'Running Prediction', 'Completed'];
    const progress = (step / (steps.length - 1)) * 100;

    return (
        <Modal show={show} onHide={onClose} centered backdrop="static">
        <Modal.Header closeButton>
            <Modal.Title>Analyzing Audio File</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.body}>
            <p><strong>Status:</strong> {steps[step]}</p>
            <ProgressBar now={progress} label={`${Math.round(progress)}%`} animated />
            {step < steps.length - 1 && (
            <div className={styles.spinnerContainer}>
                <Spinner animation="border" role="status" />
                <span className="ms-2">Please wait...</span>
            </div>
            )}
            {step === steps.length - 1 && (
            <div className="mt-3">
                <p className="text-success"><strong>Analysis complete!</strong></p>
                <Button variant="primary" onClick={onClose}>Close</Button>
            </div>
            )}
        </Modal.Body>
        </Modal>
    );
}

export default ProgressModal;
