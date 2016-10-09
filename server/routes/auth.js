const URL = './server/routes/user/confidential.json';
const JWT = "./server/routes/user/JTW.json";
import {checkAuth} from './user/user.controller';

export default (req, res, next)=>{
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