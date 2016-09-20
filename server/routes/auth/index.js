const {checkAuth} = require('../user/user.controller');

module.exports = (req, res, next)=>{
    let token = req.body.token;
    if(token===undefined || token === null){
        token = req.query.token
    }
    if(req.method !=='GET'){
        checkAuth(token).then((response)=>{
            next()
        }, (error)=>{
            console.log(error);
            res.status(403).json({
                message: "not authorized"
            });
        });
    }else {
        next();
    }
}


