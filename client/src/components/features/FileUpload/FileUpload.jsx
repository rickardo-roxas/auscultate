import React, { useState, useCallback } from 'react';
import Card from '../../layout/Card/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDropzone } from 'react-dropzone';
import { BsFileEarmarkMusic } from 'react-icons/bs';
import ProgressModal from '../ProgressModal/ProgressModal';
import useFetch from '../../../hooks/useFetch.hook';
import styles from './FileUpload.module.css';

const MAX_SIZE = 10 * 1024 * 1024; // 10 MB file max size

/**
 * FileUpload page for uploading audio files.
 * @returns {JSX.Element} - Rendered FileUpload page
 */
function FileUpload() {
    const [error, setError] = useState('');
    const [file, setFile] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [progress, setProgress] = useState({ stage: '', percent: 0 });

    const { loading, refetch } = useFetch('/upload', {
        method: 'POST',
    }, true);

    // Handle file drop
    const onDrop = useCallback((acceptedFiles, fileRejections) => {
        setError('');
        setFile(null);

        if (fileRejections.length > 0) {
            setError('The uploaded file is not an audio file. Please try again');
            return;
        }

        const selectedFile = acceptedFiles[0];
        setFile(selectedFile);
    }, []);

    // Handle file drop 
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: {
            'audio/*': ['.mp3','.wav']
        },
        maxSize: MAX_SIZE,
        multiple: false,
        onDrop
    });

    // Handle file upload
    const handleUpload = async () => {
        if (!file) {
            setError('No file selected.');
            return;
        }
    
        setShowModal(true);
        
        const formData = new FormData();
        formData.append('file', file);
    
        const result = await refetch({
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data: formData,
        });
    
        if (!result) {
            setError('Failed to upload. Please try again.');
            return;
        }
    
        // Find the final result with the classification
        const classificationResult = result?.data?.checkpoints?.find(checkpoint => checkpoint.result);
    
        // If result is found, pass it to the modal
        if (classificationResult) {
            setProgress({
                label: classificationResult.result.label,
                confidence: classificationResult.result.confidence,
            });
        } else {
            setError('Failed to retrieve classification result.');
        }
    
        // Close modal when progress reaches 100%
        if (classificationResult?.progress === 100) {
            setTimeout(() => {
                setShowModal(false);
            }, 2000);  // Wait 2 seconds before closing
        }
    }; 

    return (
        <>
            <Form>
                <Card className={styles.card}>
                    <h3>Upload Audio File</h3>
                    <p>Supported file types: .mp3, .wav | Maximum file size: 10 MB</p>
                    <div
                        {...getRootProps()}
                        className={`${styles.dropzone} ${error ? styles.error : ''}`}
                    >
                        <input {...getInputProps()} />
                        <div className={styles.iconContainer}>
                            <BsFileEarmarkMusic size={48} color={error ? 'red' : '#6c757d'} />
                        </div>
                        <p className={error ? styles.errorText : ''}>
                            {error
                                ? error
                                : isDragActive
                                ? 'Drop the audio files here...'
                                : "Drag & drop and audio file here, or click to select one."
                            }
                        </p>
                    </div>

                    <div className={styles.actionContainer}>
                        <div className={styles.fileInfo}>
                            {file && (
                                <>
                                    <p className="mb-1"><strong>Selected file:</strong> {file.name}</p>
                                    <p className="text-muted small">Size: {(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                </>
                            )}
                        </div>

                        <Button 
                            variant="success" 
                            onClick={handleUpload} 
                            disabled={!file || loading}
                            className={styles.uploadButton}
                        >
                            {loading ? 'Uploading...' : 'Upload File'}
                        </Button>
                    </div>
                </Card>
                <ProgressModal showModal={showModal} setShowModal={setShowModal} progress={progress} /> 
            </Form>   
        </>
    );
}

export default FileUpload;