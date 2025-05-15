import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import styles from './ProgressModal.module.css';

function ProgressModal({ showModal, setShowModal, progress }) {
    return (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Analysis Complete</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.body}>
                {/* Show result if progress exists */}
                {progress ? (
                    <>
                        <p><strong>Disease:</strong> {progress.label}</p>
                        <p><strong>Confidence:</strong> {Math.round(progress.confidence * 100)}%</p>
                    </>
                ) : (
                    <div className={styles.spinnerContainer}>
                        <Spinner animation="border" role="status" />
                        <span className="ms-2">Analyzing...</span>
                    </div>
                )}
                
                {/* Show close button after result */}
                {progress && (
                    <div className="mt-3">
                        <Button variant="primary" onClick={() => setShowModal(false)}>Close</Button>
                    </div>
                )}
            </Modal.Body>
        </Modal>
    );
}

export default ProgressModal;
