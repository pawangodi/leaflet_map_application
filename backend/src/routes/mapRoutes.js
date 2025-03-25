import express from 'express';
import { getMapData } from '../controllers/mapController.js';
import protect from '../middlewares/authMiddleware.js';

const router = express.Router();
router.get('/:id', protect, getMapData);

export default router;
