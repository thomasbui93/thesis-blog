"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var postController = _interopRequire(require("./posts"));

var categoryController = _interopRequire(require("./categories"));

var imageController = _interopRequire(require("./images"));

var userController = _interopRequire(require("./user"));

var checkAuth = _interopRequire(require("./auth"));

module.exports = function (app) {
    app.all("/api/*", checkAuth);
    app.use("/api/posts", postController);
    app.use("/api/categories", categoryController);
    app.use("/api/images", imageController);
    app.use("/authenticate", userController);
};
//# sourceMappingURL=index.js.map