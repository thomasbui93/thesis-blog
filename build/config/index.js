"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var DBConfig = _interopRequire(require("./database"));

exports["default"] = {
    database: DBConfig
};

var meta = {
    defaultImage: "https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png"
};
var confidential = {
    email: "buidangkhoa2602@gmail.com",
    password: "123456",
    name: "Khoa D. Bui"
};

var jsonTokenKey = "invincibleKhoa";
exports.meta = meta;
exports.jsonTokenKey = jsonTokenKey;
exports.confidential = confidential;