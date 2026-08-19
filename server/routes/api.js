import express from 'express';
import { getProperties, getPropertyById } from '../controllers/propertyController.js';
import { submitContactForm } from '../controllers/contactController.js';

const router = express.Router();

// Property endpoints
router.get('/properties', getProperties);
router.get('/properties/:id', getPropertyById);

// Contact endpoint
router.post('/contact', submitContactForm);

export default router;
