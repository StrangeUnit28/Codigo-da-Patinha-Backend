import express from 'express';
import adotantesRaoutes from './adotantesRoutes.js';
import petsRoutes from './petsRoutes.js';

const indexRouter = express.Router();

indexRouter.use('/usuario', adotantesRaoutes);
indexRouter.use('/pet', petsRoutes);

export default indexRouter;