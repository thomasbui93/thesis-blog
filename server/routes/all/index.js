import { Router } from 'express';
import {observerRequest} from './controller'
const router = Router() ;

router.use('*',  observerRequest);

export default router;