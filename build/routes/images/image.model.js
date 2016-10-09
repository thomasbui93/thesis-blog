"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _mongoose = require("mongoose");

var mongoose = _interopRequire(_mongoose);

var Schema = _mongoose.Schema;
var model = _mongoose.model;

var Image = new Schema({
    createAt: {
        type: Date,
        "default": new Date()
    },
    caption: {
        type: String,
        required: true,
        "default": "Untitled"
    },
    url: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Image", Image);
//# sourceMappingURL=image.model.js.map