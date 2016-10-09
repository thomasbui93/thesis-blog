"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _mongoose = require("mongoose");

var mongoose = _interopRequire(_mongoose);

var Schema = _mongoose.Schema;
var model = _mongoose.model;

var uniqueValidator = _interopRequire(require("mongoose-unique-validator"));

var Category = new Schema({
    createAt: {
        type: Date,
        "default": new Date()
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    color: {
        type: String,
        required: true,
        unique: true
    }
});
Category.plugin(uniqueValidator);

module.exports = mongoose.model("Category", Category);
//# sourceMappingURL=category.model.js.map