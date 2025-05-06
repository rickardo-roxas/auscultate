import ResponseHandler from '../utils/responseHandler.util.js';

/**
 * A middleware error handler throughout the server.
 * @param {object} err - The error object.
 * @param {import('express').Request} _req - The request object. 
 * @param {import('express').Response} res - The response object
 * @param {import('express'.NextFunction)} _next - The next middleware function. 
 * @returns {Promise<void>} - Sends a JSON response with the status of the error.
 */
function errorHandler(err, _req, res, _next) {
    console.error(`[ERROR] ${err.name || 'Error'}: ${err.message}`);
    console.error(err.stack);

    const status = err.statusCode || 500;

    return ResponseHandler.errorResponse(res, {
        message: err.message,
        status: status,
    });
}

export default errorHandler;