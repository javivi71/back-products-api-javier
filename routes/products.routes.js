import { Router } from 'express';
import * as controller from '../controllers/products.controller.js';

const router = Router();
router.get('/', controller.getAll);
router.post('/', controller.create);
router.get('/info', controller.getInfo);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);
router.get('/:id', controller.getById);

export default router;