"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var database = _interopRequire(require("./databases"));

var ultils = _interopRequire(require("./ultils"));

var eventListeners = function (eventEmitter) {
    "use strict";
    database(eventEmitter);
    ultils(eventEmitter);
};

module.exports = eventListeners;