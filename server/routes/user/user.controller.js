import auth from 'jsonwebtoken';
import {jsonTokenKey, confidential} from '../../config';

import Device from './device.model';

const authenticate = (req, res, next)=>{
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

const getUser = (req, res, next)=>{
    Object.assign(user, confidential);
    delete user.password;
    res.json(user);
};
const check = (req, res, next)=>{
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
const checkAuth = (token)=>{

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
const setUser = (req, res, next)=>{

}

export {authenticate, getUser, setUser, check, checkAuth};
