"use strict";

var Router = require("express").Router;

var observerRequest = require("./controller").observerRequest;

var router = Router();

router.use("*", observerRequest);

module.exports = router;