import { createClient as redisClient } from 'redis';

const cleanCache = (req, res, next)=> {
    "use strict";

    redisClient.flushdb( function (error, response) {
        if(error) return next(error);

        res.status(201).json(response);
    });
}

export { cleanCache }

