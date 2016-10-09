"use strict";

var Router = require("express").Router;

var _categoryController = require("./category.controller");

var index = _categoryController.index;
var update = _categoryController.update;
var create = _categoryController.create;
var remove = _categoryController.remove;
var getOne = _categoryController.getOne;

var router = Router();

router.get("/", index);
router.get("/:categoryId", getOne);
router.post("/", create);
router.put("/:categoryId", update);
router["delete"]("/:categoryId", remove);

module.exports = router;
//# sourceMappingURL=index.js.map