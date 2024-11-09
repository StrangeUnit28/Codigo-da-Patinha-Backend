import express from 'express';
import adotantesRaoutes from './adotantesRoutes.js';

const indexRouter = express.Router();

indexRouter.use('/usuario', adotantesRaoutes);

export default indexRouter;