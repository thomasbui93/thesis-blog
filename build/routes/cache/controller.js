"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var redisClient = require("redis").createClient;

var cleanCache = function (req, res, next) {
    "use strict";

    redisClient.flushdb(function (error, response) {
        if (error) return next(error);

        res.status(201).json(response);
    });
};

exports.cleanCache = cleanCache;