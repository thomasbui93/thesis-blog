"use strict";

var Router = require("express").Router;

var _imageController = require("./image.controller");

var create = _imageController.create;
var getAll = _imageController.getAll;
var update = _imageController.update;
var remove = _imageController.remove;

var router = Router();

router.post("/", create);
router.get("/", getAll);
router.put("/:imageId", update);
router["delete"]("/:imageId", remove);

module.exports = router;
//# sourceMappingURL=index.js.map