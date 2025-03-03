import express from 'express';
import userRoutes from './userRoutes.js';
import authRoutes from './authRoutes.js';
const rootRouter = express.Router();

rootRouter.use('/users', userRoutes);
rootRouter.use('/auth', authRoutes);
export default rootRouter;