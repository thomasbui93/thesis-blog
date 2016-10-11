import { Router } from 'express';
import { cleanCache } from './controller';

let router = Router() ;

router.post('/clean',  cleanCache);

export default router;
