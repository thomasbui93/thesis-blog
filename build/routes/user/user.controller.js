"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var auth = _interopRequire(require("jsonwebtoken"));

var _config = require("../../config");

var jsonTokenKey = _config.jsonTokenKey;
var confidential = _config.confidential;

var Device = _interopRequire(require("./device.model"));

var authenticate = function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

    if (confidential.email === email && confidential.password === password) {
        var header = {
            expireAt: new Date().valueOf() + 7 * 24 * 60 * 60
        };
        var token = auth.sign(header, jsonTokenKey);

        res.json({
            token: token
        });
    } else {
        res.status(403).json({
            error: "not authenticated"
        });
    }
};

var getUser = function (req, res, next) {
    Object.assign(user, confidential);
    delete user.password;
    res.json(user);
};
var check = function (req, res, next) {
    auth.verify(req.body.token, jsonTokenKey, function (error, decode) {
        if (error) {
            res.status(200).json({
                msg: "not authenticated"
            });
        } else {
            var token = decode.token;
            var expDate = new Date(token);
            if (expDate < new Date()) {
                res.status(200).json({
                    msg: "expired token"
                });
            } else {
                res.status(200).json({
                    msg: "ok"
                });
            }
        }
    });
};
var checkAuth = function (token) {

    return new Promise(function (resolve, reject) {
        auth.verify(token, jsonTokenKey, function (error, decode) {
            if (error) {
                reject(error);
            } else {
                var _token = decode.token;
                var expDate = new Date(_token);
                if (expDate < new Date()) {
                    reject({
                        msg: "expired token"
                    });
                } else {
                    resolve({
                        msg: "ok"
                    });
                }
            }
        });
    });
};
var setUser = function (req, res, next) {};

exports.authenticate = authenticate;
exports.getUser = getUser;
exports.setUser = setUser;
exports.check = check;
exports.checkAuth = checkAuth;
//# sourceMappingURL=user.controller.js.map