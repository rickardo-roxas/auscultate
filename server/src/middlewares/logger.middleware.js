/**
 * Logs the request method, URL, status code, and response time
 * @param {} req - The request object 
 * @param {*} res - The response object
 * @param {*} next - The next middleware function
 * @returns {void}
 */
const logger = (req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - start;
        const log = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`;
        console.log(log);
    });

    next();
};

export default logger;