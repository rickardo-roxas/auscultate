import express from 'express';
import PredictController from '../controllers/predict.controller.js';

const router = express.Router();

// Invoke the model to predict/classify the audio file.
router.post('/');

// Get the results of the prediction/classification.
router.get('/results');

export default router;