import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from 'react-bootstrap/Button';
import { IoMdClose } from 'react-icons/io';
import styles from './ProgressModal.module.css';

/**
 * ProgressModal component that animates progress updates.
 * @param {Object} props - The component's props.
 * @param {boolean} props.show - Whether the modal is shown or not.
 * @param {Object} props.progress - The current progress with stage and percent.
 * @param {function} props.onClose - Function to close the modal.
 * @returns {JSX.Element} - Rendered progress modal
 */
function ProgressModal({ show, progress, onClose }) {
    const { stage, percent } = progress;

    // Animate modal appearance and disappearance
    const modalVariants = {
        hidden: { opacity: 0, y: '-50vh' },
        visible: { opacity: 1, y: '0', transition: { type: 'spring', stiffness: 100, damping: 25 } },
        exit: { opacity: 0, y: '50vh', transition: { type: 'spring', stiffness: 100, damping: 25 } },
    };

    // Animation for progress bar
    const progressBarVariants = {
        hidden: { width: '0%' },
        visible: { width: `${percent}%`, transition: { duration: 0.5 } },
    };

    useEffect(() => {
        if (percent === 100) {
            // Automatically close the modal after 2 seconds when done
            setTimeout(onClose, 2000);
        }
    }, [percent, onClose]);

    return (
        <motion.div
            className={styles.modal}
            variants={modalVariants}
            initial="hidden"
            animate={show ? 'visible' : 'hidden'}
            exit="exit"
        >
            <div className={styles.modalContent}>
                <div className={styles.header}>
                    <h4>Processing...</h4>
                    <Button className={styles.closeButton} variant="link" onClick={onClose}>
                        <IoMdClose size={24} />
                    </Button>
                </div>

                <div className={styles.progressContainer}>
                    <motion.div
                        className={styles.progressBar}
                        variants={progressBarVariants}
                        initial="hidden"
                        animate="visible"
                    ></motion.div>
                </div>

                <div className={styles.status}>
                    <p>{stage}</p>
                    <p>{percent}%</p>
                </div>
            </div>
        </motion.div>
    );
}

export default ProgressModal;
