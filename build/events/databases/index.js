"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var post = _interopRequire(require("./post"));

var category = _interopRequire(require("./category"));

module.exports = function (eventEmitter) {
    "use strict";
    post(eventEmitter);
    category(eventEmitter);
};