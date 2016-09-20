const { Router } = require('express');
const {index, update, create, remove, getOne} = require('./category.controller');

let router = Router() ;

router.get('/',  index);
router.get('/:categoryId', getOne);
router.post('/', create);
router.put('/:categoryId', update);
router.delete('/:categoryId', remove);

module.exports = router;
