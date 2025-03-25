import express from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import connectDB from './config/db.js';
//route handler
import authRoutes from './routes/authRoutes.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import mapRoutes from './routes/mapRoutes.js';
//error handler
import errorHandler from './middlewares/errorMiddleware.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// API Routes
app.use('/api', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/map', mapRoutes);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
