import React, { useState, useCallback } from 'react';
import Card from '../../layout/Card/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDropzone } from 'react-dropzone';
import { BsFileEarmarkMusic } from 'react-icons/bs';
import useFetch from '../../../hooks/useFetch.hook';
import styles from './FileUpload.module.css';

const MAX_SIZE = 10 * 1024 * 1024; // 10 MB file max size

function FileUpload() {
    const [error, setError] = useState('');
    const [file, setFile] = useState(null);

    const { data, loading, error: fetchError, refetch } = useFetch('/upload', {
        method: 'POST',
    }, true);

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

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: {
            'audio/*': ['.mp3','.wav']
        },
        maxSize: MAX_SIZE,
        multiple: false,
        onDrop
    });

    const handleUpload = async () => {
        if (!file) {
            setError('No file selected.');
            return;
        }
        
        const formData = new FormData();
        formData.append('file', file);

        const result = await refetch({
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data: formData,
        });

        if (!result) {
            setError('Failed to upload. Please try again.')
        }
    }

    return (
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
                    <Button variant="primary">
                        Browse Files
                    </Button>
                </div>

                {file && (
                    <div className="mt-3 text-start">
                        <p className="mb-1"><strong>Selected file:</strong> {file.name}</p>
                        <p className="text-muted small">Size: {(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                )}

                <Button 
                    variant="success" 
                    onClick={handleUpload} 
                    disabled={!file || loading}
                >
                    {loading ? 'Uploading...' : 'Upload File'}
                </Button>
            </Card> 
        </Form>   
    );
}

export default FileUpload;