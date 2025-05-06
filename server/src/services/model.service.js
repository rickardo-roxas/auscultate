import axios from '../configs/axios.config.js';
import path from 'path';
import fs from 'fs/promises';

let cachedResult = null;

/**
 * Classifies an audio file by invoking the Model Server.
 * @param {*} file - Audio file to be classified
 * @returns {Promise<Object>} - Classification result
 */
const classify = async (file) => {
    if (!file) {
        throw new Error('No file provided');
    }

    const filePath = path.resolve(file.path);
    const fileData = await fs.readFile(filePath);
    const formData = new FormData();
    formData.append('file', new Blob([fileData]), file.originalname);

    const response = await axios.post('/predict', formData, {
        headers: formData.getHeaders(),
    });

    cachedResult = response.data;
    return cachedResult;
}

/**
 * Predicts the classification result of the audio file using the Model Server.
 * @returns {Promise<Object>} - Prediction result
 */
const predict = async () => {
    if (!cachedResult) {
        throw new Error('No prediction available. Please upload an audio file with respiratory cycles.');
    }
    return cachedResult;
}

export default {
    classify,
    predict,
}