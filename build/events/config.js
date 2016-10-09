"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by khoabui on 09/10/16.
 */

var DB = _interopRequireWildcard(require("./databases/config"));

var UTILS = _interopRequireWildcard(require("./ultils/config"));

var POST = DB.POST;
var VISITOR = UTILS.VISITOR;
exports.POST = POST;
exports.VISITOR = VISITOR;