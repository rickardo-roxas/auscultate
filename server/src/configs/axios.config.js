import axios from 'axios';
import config from './index.config.js';

/**
 * Axios instance for the model server.
 */
const modelClient = axios.create({
    baseURL: config.MODEL_SERVER_URL, 
    timeout: 10000,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

export default modelClient;
