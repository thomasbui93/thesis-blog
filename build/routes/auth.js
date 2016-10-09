"use strict";

var URL = "./server/routes/user/confidential.json";
var JWT = "./server/routes/user/JTW.json";

var checkAuth = require("./user/user.controller").checkAuth;

module.exports = function (req, res, next) {
    var token = req.body.token;
    if (token === undefined || token === null) {
        token = req.query.token;
    }
    if (req.method !== "GET") {
        checkAuth(token).then(function (response) {
            next();
        }, function (error) {
            console.log(error);
            res.status(403).json({
                message: "not authorized"
            });
        });
    } else {
        next();
    }
};
//# sourceMappingURL=auth.js.map