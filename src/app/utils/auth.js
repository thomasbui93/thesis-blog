import request from 'superagent';
import localStorage from 'localforage';

const signin = (confidential)=>{
    return new Promise((resolve, reject)=>{
        localStorage.getItem('token',(error, token)=> {
            Object.assign(confidential, confidential, {token: token})
            request.post('/authenticate/')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send(confidential)
                .end((error, response)=> {
                    const res = JSON.parse(response.text);
                    if (response.statusCode === 403) {
                        reject(res);
                    }
                    resolve(res);
                })
        });
    });
}
const check = ()=>{
    return new Promise((resolve, reject)=>{
        localStorage.getItem('token',(error, token)=> {
            request.post('/authenticate/check')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({token: token})
                .end((error, response)=> {
                    const res = JSON.parse(response.text);
                    if (res.msg !== 'ok') {
                        reject(res);
                    }
                    resolve(res);
                })
        });

    });
}
const reset = ()=>{
    return localStorage.setItem('token', undefined);
}

export {signin,check, reset };