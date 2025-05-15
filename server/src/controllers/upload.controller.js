import FormData from 'form-data';
import ResponseHandler from '../utils/responseHandler.util.js';
import modelClient from '../configs/axios.config.js';

const uploadFile = async (req, res, next) => {
    try {
        const file = req.file;

        const formData = new FormData();
        formData.append('file', file.buffer, {
            filename: file.originalname,
            contentType: file.mimetype,
        });

        const response = await modelClient.post('/upload', formData, {
            headers: formData.getHeaders(),
        });

        return ResponseHandler.successResponse(res, {
            message: 'File uploaded successfully and processed.',
            data: response.data,
        });
    } catch (err) {
        err.statusCode = 500;
        next(err);
    }
};

export default {
    uploadFile,
};
