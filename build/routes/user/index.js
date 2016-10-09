"use strict";

var Router = require("express").Router;

var _userController = require("./user.controller");

var authenticate = _userController.authenticate;
var getUser = _userController.getUser;
var check = _userController.check;

var router = Router();

router.post("/", authenticate);
router.get("/me", getUser);
router.post("/check", check);
module.exports = router;
//# sourceMappingURL=index.js.map