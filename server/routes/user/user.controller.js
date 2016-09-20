const auth = require('jsonwebtoken');
const {jsonTokenKey, confidential} = require('../../config');


exports.authenticate = (req, res, next)=>{
    const email = req.body.email;
    const password = req.body.password;

    if(confidential.email === email && confidential.password === password){
        const header = {
            expireAt: new Date().valueOf() + 7*24*60*60
        };
        const token = auth.sign(header, jsonTokenKey);

        res.json({
            token: token
        });
    }else {
        res.status(403).json({
            error: 'not authenticated'
        });
    }
};

exports.getUser = (req, res, next)=>{
    Object.assign(user, confidential);
    delete user.password;
    res.json(user);
};
exports.check = (req, res, next)=>{
    auth.verify(req.body.token, jsonTokenKey, (error, decode)=>{
        if(error){
            res.status(200)
                .json({
                    msg: 'not authenticated'
                })
        }else {
            const token = decode.token;
            const expDate = new Date(token);
            if(expDate < new Date()){
                res.status(200)
                    .json({
                        msg: 'expired token'
                    })
            }else{
                res.status(200)
                    .json({
                        msg: 'ok'
                    })
            }
        }
    })
}

exports.checkAuth = (token)=>{

    return new Promise((resolve, reject)=>{
        auth.verify(token, jsonTokenKey, (error, decode)=>{
            if(error){
                reject(error);
            }else {
                const token = decode.token;
                const expDate = new Date(token);
                if(expDate < new Date()){
                    reject({
                        msg: 'expired token'
                    });
                }else{
                    resolve({
                        msg: 'ok'
                    });
                }
            }
        })
    });


}

exports.setUser = (req, res, next)=>{

}