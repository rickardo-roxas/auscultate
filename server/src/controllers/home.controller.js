import ResponseHandler from '../utils/responseHandler.util.js';

/**
 * @description - Controller for handling home page requests.
 * @param {*} req - The request object
 * @param {*} res - The response object
 * @param {*} next - The next middleware function
 */
const index = async (_req, res, next) => {
    try {
        ResponseHandler.success(res, {
            status: 200,
            message: 'Connected to server. Ready for file upload.',
        });
    } catch (err) {
        err.statusCode = 500;
        next(err);
    }
}

export default {
    index,
}