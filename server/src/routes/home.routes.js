import express from 'express';
import HomeController from '../controllers/home.controller.js';

const router = express.Router();

// Display the home page.
router.get('/', HomeController.index);

export default router;