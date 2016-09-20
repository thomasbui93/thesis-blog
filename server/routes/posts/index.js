const { Router } = require('express');
const { index, showBriefs, update, create, remove, getOne, getCategoryPost} = require('./post.controller');

const router = Router() ;

router.get('/',  showBriefs);
router.get('/brief', showBriefs);
router.get('/:postId', getOne);
router.post('/', create);
router.put('/:postId', update);
router.delete('/:postId', remove);
router.get('/category/:categorySlug', getCategoryPost);

module.exports = router;
