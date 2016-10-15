import request from 'superagent';
import localStorage from 'localforage';


const cacheType = {
    POST: 'post cache',
    CATEGORY: 'category cache',
    ALL: 'all cache'
}

const path = '/api/cache/clean';

const clean = (cacheType) =>{
    "use strict";
    return new Promise((resolve, reject)=>{
        localStorage.getItem('token', (error, token)=> {
            request.post(path)
                .set('content-type', 'application/x-www-form-urlencoded')
                .send({
                    cacheType: cacheType,
                    token: token
                })
                .end((error, response)=> {
                    const res = JSON.parse(response.text);
                    if (response.errors) reject(res.errors);
                    resolve(cacheType);
                });
        });
    });
}

export {clean, cacheType};
