"use strict";

var Router = require("express").Router;

var cleanCache = require("./controller").cleanCache;

var router = Router();

router.post("/clean", cleanCache);

module.exports = router;