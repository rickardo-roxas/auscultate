import ModelService from "../services/model.service.js";
import ResponseHandler from "../utils/responseHandler.util.js";

/**
 * Handles the prediction result.
 * @param {*} req - The request object
 * @param {*} res - The response object 
 * @param {*} next - The next middleware function
 * @returns {Promise<void>} - Sends a JSON response with the prediction result.
 */
const getResult = async (req, res, next) => {
    try {
        const result = await ModelService.predict();

        if (!result) {
            return ResponseHandler.errorResponse(res, {
                status: 400,
                message: 'No prediction available. Please upload an audio file with respiratory cycles.'
            });
        }
        return ResponseHandler.successResponse(res, {
            message: 'Prediction retrieved successfully.',
            data: result,
        })
    } catch (err) {
        err.statusCode = 500;
        next(err)
    }
}

export default {
    getResult,
}