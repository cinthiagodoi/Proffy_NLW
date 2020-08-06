import express from 'express';
import ClassController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionControlles';

const routes = express.Router()
const classesController = new ClassController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;