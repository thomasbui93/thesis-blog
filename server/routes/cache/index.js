import { Router } from 'express';
import {cacheClean} from './category.controller';

let router = Router() ;

router.post('/clean',  cacheClean);

export default router;
