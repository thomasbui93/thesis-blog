"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var eventEmitter = _interopRequire(require("../../events/events"));

var VISITOR = require("../../events/config").VISITOR;

var observerRequest = function (req, res, next) {
    "use strict";
    eventEmitter.emit(VISITOR.WANDER, req);
    next();
};

exports.observerRequest = observerRequest;