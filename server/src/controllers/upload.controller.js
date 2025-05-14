import ResponseHandler from '../utils/responseHandler.util.js';
import modelClient from '../configs/axios.config.js';

/**
 * Handles file upload and classification.
 * @param {*} req - The request object
 * @param {*} res - The response object 
 * @param {*} next - The next middleware function
 */
const uploadFile = async (req, res, next) => {
    try {
        const file = req.file;
        
        // Send the file to the model server for processing
        const formData = new FormData();
        formData.append('file', file.buffer, file.originalname);

        // Send the file to the model-server's /upload endpoint
        const response = await modelClient.post('/upload', formData, {
            headers: formData.getHeaders(),
        });

        // Forward the response back to the client
        return ResponseHandler.successResponse(res, {
            message: 'File uploaded successfully and processed.',
            data: response.data,  // Returning the checkpoints from the Model-Server
        });
    } catch (err) {
        err.statusCode = 500;
        next(err);
    }
}

export default {
    uploadFile,
}