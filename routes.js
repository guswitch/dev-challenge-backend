import { Router, Request, Response } from 'express';

import UserController from './src/app/controllers/userController';
const userController = new UserController();

import SessionController from './src/app/controllers/sessionController';
const sessionController = new SessionController();

import ClassifiedController from './src/app/controllers/classifiedController';
const classifiedController = new ClassifiedController();

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Hello World');
});

routes
    .get('/users/', userController.Index)
    .get('/users/:id', userController.Show)
    .post('/users/create', userController.Create)
    .put('/users/update/:id', userController.Update)
    .delete('/users/delete/:id', userController.Delete);

routes
    .post('/session', sessionController.Store);

routes
    .get('/classified/', classifiedController.Index)
    .get('/classified/:id', classifiedController.Show)
    .post('/classified/create', classifiedController.Create)
    .put('/classified/update/:id', classifiedController.Update)
    .delete('/classified/delete/:id', classifiedController.Delete);

export default routes;