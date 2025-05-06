/**
 * Sends a successful response in JSON format.
 * @param {import('express').Response} res - The response object. 
 * @param {object} param1 - Response object
 * @param {string} param1.message - The message 
 * @param {object} param1.data - The object of data to be sent.
 * @param {integer} param1.status - Status of response.
 * @returns {Promise<void>} - Sends a JSON response with the status, message and data.
 */
const successResponse = (res, { message = "Success", data = null, status = 200 }) => {
    return res.status(status).json({
        status,
        success: true,
        message,
        data,
    });
};

/**
 * Sends a failed response in JSON format.
 * @param {import('express').Response} res - The response object.
 * @param {object} param1 - Response object.
 * @param {string} param1.message - The message
 * @param {integer} param1.status - Status of response.
 * @param {string} param1.error - The error of the response
 * @returns {Promise<void>} - Sends a JSON response with the status, message, and error.
 */
const errorResponse = (res, { message = "Something went wrong", status = 500, error = null }) => {
    return res.status(status).json({
        status,
        success: false,
        message,
        error,
    });
};

export default {
    successResponse,
    errorResponse,
};