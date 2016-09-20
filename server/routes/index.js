const postController = require('./posts');
const categoryController = require('./categories');
//const imageController = require('./images');
const userController = require('./user');
const checkAuth = require('./auth');

module.exports =  (app)=>{
    app.use('/authenticate', userController);
}
