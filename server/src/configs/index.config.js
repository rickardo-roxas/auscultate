import dotenv from 'dotenv';
import path from 'path';

// Imports the environment variables from a .env file
const envFile = `.env.${process.env.NODE_ENV || 'dev'}`;
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

/**
 * Defines the environment variable
 * @param {string} key - Environment variable key.
 * @param {fallback} fallback - Error handler.
 * @returns Populated environment variable.
 */
function required(key, fallback = null) {
    const value = process.env[key] || fallback;
    if (!value) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
    return value;
}

/**
 * Defines the environment variables
 */
const config = {
    // Client
    CORS_ORIGIN: required('CORS_ORIGIN'),

    // Server
    PORT: required('PORT'),
    NODE_ENV: required('NODE_ENV'),
    LOG_LEVEL: required('LOG_LEVEL'),

    // Model Server
    
};

export default config;