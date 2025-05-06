import ResponseHandler from '../utils/responseHandler.util.js';

/**
 * Handles file upload and classification.
 * @param {*} req - The request object
 * @param {*} res - The response object 
 * @param {*} next - The next middleware function
 */
const uploadFile = async (req, res, next) => {
    try {
        const result = await ModelService.classify(req.file);

        if (!result) {
            return ResponseHandler.errorResponse(res, {
                status: 400,
                message: 'File upload failed. Please upload an audio file with respiratory cycles.',
            });
        }

        return ResponseHandler.successResponse(res, {
            message: 'File uploaded successfully.',
            data: result,
        });
    } catch (err) {
        err.statusCode = 500;
        next(err);
    }
}

export default {
    uploadFile,
}