import multer from 'multer';
import path from 'path';

/**
 * @description Configure multer for file storage.
 * @param {Object} storage - Storage configuration for multer
 * @param {Function} destination - Function to set the destination folder
 * @param {Function} filename - Function to set the filename
 * @returns {Object} - Multer storage configuration
 */
const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, 'uploads/'); // Ensure this folder exists
    },
    filename: (_req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
    }
});

/**
 * @description Filter the uploaded files to only allow audio files.
 * @param {*} req - The request object
 * @param {*} file - The file object
 * @param {*} cb - The callback function
 */
const fileFilter = (_req, file, cb) => {
    const allowedTypes = ['audio/mpeg', 'audio/wav', 'audio/x-wav'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
    cb(new Error('Only .wav or .mp3 files are allowed'), false);
    }
};

/**
 * @description Middleware to handle file uploads.
 * @param {Object} options - Options for multer
 * @param {string} options.destination - Destination folder for uploaded files
 * @param {number} options.fileSize - Maximum file size in bytes
 */
const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
    fileFilter
});

export default upload;
