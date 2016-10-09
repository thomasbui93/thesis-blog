"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _mongoose = require("mongoose");

var mongoose = _interopRequire(_mongoose);

var Schema = _mongoose.Schema;
var model = _mongoose.model;

var Device = new Schema({
    fingerprint: {
        type: String
    },
    os: {
        type: Object
    },
    browser: {
        type: Object
    },
    lastLogin: {
        type: Date,
        "default": new Date()
    }
});

module.exports = mongoose.model("Device", Device);
//# sourceMappingURL=device.model.js.map