import express from 'express';
import adotantesRaoutes from './adotantesRoutes.js';
import petsRoutes from './petsRoutes.js';
import adocaoRoutes from './adocaoRoutes.js'

const indexRouter = express.Router();

indexRouter.use('/usuario', adotantesRaoutes);
indexRouter.use('/pet', petsRoutes);
indexRouter.use('/adocao', adocaoRoutes)

export default indexRouter;