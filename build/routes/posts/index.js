"use strict";

var Router = require("express").Router;

var _postController = require("./post.controller");

var index = _postController.index;
var showBriefs = _postController.showBriefs;
var update = _postController.update;
var create = _postController.create;
var remove = _postController.remove;
var getOne = _postController.getOne;
var getCategoryPost = _postController.getCategoryPost;

var router = Router();

router.get("/", showBriefs);
router.get("/brief", showBriefs);
router.get("/:postId", getOne);
router.post("/", create);
router.put("/:postId", update);
router["delete"]("/:postId", remove);
router.get("/category/:categorySlug", getCategoryPost);
module.exports = router;
//# sourceMappingURL=index.js.map