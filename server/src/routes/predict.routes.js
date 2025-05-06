import express from 'express';
import PredictController from '../controllers/predict.controller.js';

const router = express.Router();

// Get the results of the prediction/classification.
router.get('/', PredictController.getResult);

export default router;