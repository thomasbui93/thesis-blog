import redisClient from '../../config/redis';
import {prefix} from '../../events/config';

const cacheType = {
    POST: 'post cache',
    CATEGORY: 'category cache',
    ALL: 'all cache'
}

const cleanCache = (req, res, next)=> {
    "use strict";
    if (req.body.cacheType === cacheType.POST) {
        cleanCacheType(prefix.post, res, next);
    } else if (req.body.cacheType === cacheType.CATEGORY) {
        cleanCacheType(prefix.category, res, next);
    } else {
        redisClient.flushdb(function (error, response) {
            if (error) return next(error);
            res.status(201).json(response);
        });
    }
}


const cleanCacheType = (prefixTag, res, next)=> {
    "use strict";
    redisClient.keys(prefixTag + '*', (error, keys) => {
        if (error) return next(error);
        deleteKeys(keys).then(()=>{
            return res.status(201).json(true);
        }, (error)=>{
            return next(error);
        })

    })
}


const deleteKeys = (keys)=>{
    if(keys.length > 0 && keys instanceof Array){
        return Promise.all(keys.map((key)=>{
            return removeKey(key);
        }));
    }else {
        return new Promise((resolve, reject)=>{
            "use strict";
            resolve(true);
        })
    }
}

const removeKey = (key)=>{
    "use strict";
    return  new Promise((resolve, reject)=>{
        redisClient.del(key, (error)=> {
            if(error) reject(error);
            resolve(true);
        });
    })
}

export {cleanCache}