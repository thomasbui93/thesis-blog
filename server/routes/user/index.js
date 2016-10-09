
import { Router } from 'express';
import {authenticate, getUser, check} from './user.controller';

const router = Router() ;

router.post('/',  authenticate);
router.get('/me', getUser);
router.post('/check', check);
export default router;