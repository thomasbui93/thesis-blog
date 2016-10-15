"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var redisClient = _interopRequire(require("../../config/redis"));

var prefix = require("../../events/config").prefix;

var cacheType = {
    POST: "post cache",
    CATEGORY: "category cache",
    ALL: "all cache"
};

var cleanCache = function (req, res, next) {
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
};

var cleanCacheType = function (prefixTag, res, next) {
    "use strict";
    redisClient.keys(prefixTag + "*", function (error, keys) {
        if (error) return next(error);
        deleteKeys(keys).then(function () {
            return res.status(201).json(true);
        }, function (error) {
            return next(error);
        });
    });
};

var deleteKeys = function (keys) {
    if (keys.length > 0 && keys instanceof Array) {
        return Promise.all(keys.map(function (key) {
            return removeKey(key);
        }));
    } else {
        return new Promise(function (resolve, reject) {
            "use strict";
            resolve(true);
        });
    }
};

var removeKey = function (key) {
    "use strict";
    return new Promise(function (resolve, reject) {
        redisClient.del(key, function (error) {
            if (error) reject(error);
            resolve(true);
        });
    });
};

exports.cleanCache = cleanCache;