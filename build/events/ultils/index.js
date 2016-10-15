"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var visitor = _interopRequire(require("./visitor"));

module.exports = function (eventEmitter) {
    "use strict";
    visitor(eventEmitter);
};