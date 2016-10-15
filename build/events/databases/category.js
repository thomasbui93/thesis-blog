"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _config = require("../config");

var CATEGORY = _config.CATEGORY;
var prefix = _config.prefix;

var redis = _interopRequire(require("../../config/redis"));

var onNewCategory = function (doc) {
    "use strict";
};

var onUpdateCategory = function (doc) {
    "use strict";
};

var onCategoryRemove = function (doc) {
    "use strict";
};

var onVisitCategory = function (doc, slug) {
    "use strict";
    var cacheID = prefix.category + slug;
    console.log(cacheID);
    redis.set(cacheID, JSON.stringify(doc));
};

module.exports = function (eventEmitter) {
    "use strict";

    eventEmitter.on(CATEGORY.NEW, onNewCategory);
    eventEmitter.on(CATEGORY.UPDATE, onUpdateCategory);
    eventEmitter.on(CATEGORY.REMOVE, onCategoryRemove);
    eventEmitter.on(CATEGORY.VISITED, onVisitCategory);
};