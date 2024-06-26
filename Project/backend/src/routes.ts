import express from 'express';
import { ParfumController } from './controller/Parfum.controller';

export function getRouter(){

    const router = express.Router();

    const parfumController = new ParfumController();

    router.get('/parfum', parfumController.getAll)
    router.get('/parfum/:id', parfumController.getOne)
    router.post('/parfum', parfumController.create)
    router.put('/parfum', parfumController.update)
    router.delete('/parfum/:id', parfumController.delete)
    

    return router;
}