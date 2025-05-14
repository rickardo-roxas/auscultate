import express from 'express';
import UploadController from '../controllers/upload.controller.js';
import UploadMiddleware from '../middlewares/upload.middleware.js';

const router = express.Router();

// Upload the audio file to the server.
router.post('/', UploadMiddleware.single('file'), UploadController.uploadFile);

export default router;