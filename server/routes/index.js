import postController from './posts';
import categoryController from './categories';
import imageController from './images'
import userController from './user';
import checkAuth from './auth';

export default (app)=>{
    app.all('/api/*', checkAuth)
    app.use('/api/posts', postController);
    app.use('/api/categories', categoryController);
    app.use('/api/images', imageController);
    app.use('/authenticate', userController);
}
