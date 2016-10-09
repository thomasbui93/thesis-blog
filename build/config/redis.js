"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var redisClient = require("redis").createClient;

var database = _interopRequire(require("./database"));

module.exports = redisClient(database.redis.port, "localhost");