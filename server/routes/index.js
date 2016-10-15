import postController from './posts';
import categoryController from './categories';
import imageController from './images'
import userController from './user';
import checkAuth from './auth';
import allController from './all';
import cacheController from './cache';

export default (app)=>{
    app.all('/api/*', checkAuth)
    app.use('/api/posts', postController);
    app.use('/api/categories', categoryController);
    app.use('/api/images', imageController);
    app.use('/authenticate', userController);
    app.use('/', allController);
    app.use('/api/cache', cacheController);
}
