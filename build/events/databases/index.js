"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var post = _interopRequire(require("./post"));

module.exports = function (eventEmitter) {
    "use strict";
    post(eventEmitter);
};