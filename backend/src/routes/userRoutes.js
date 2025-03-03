import express from 'express';
import { createUser, getUser } from '../controllers/userController.js';
const userRoutes = express.Router();

userRoutes.post('/create', createUser);
userRoutes.get('/get', getUser);
export default userRoutes;