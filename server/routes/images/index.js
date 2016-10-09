import { Router } from 'express';
import { create, getAll, update, remove } from './image.controller';


const router = Router() ;

router.post('/', create);
router.get('/', getAll);
router.put('/:imageId', update);
router.delete('/:imageId', remove);

export default router;