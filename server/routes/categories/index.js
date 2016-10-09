import { Router } from 'express';
import {index, update, create, remove, getOne} from './category.controller';

let router = Router() ;

router.get('/',  index);
router.get('/:categoryId', getOne);
router.post('/', create);
router.put('/:categoryId', update);
router.delete('/:categoryId', remove);

export default router;
