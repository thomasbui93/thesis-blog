const Router = require('express');
const {authenticate, getUser, check} = require('./user.controller');

const router = Router() ;

router.post('/',  authenticate);
router.get('/me', getUser);
router.post('/check', check);

module.exports = router;
