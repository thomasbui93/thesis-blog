"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _config = require("../config");

var POST = _config.POST;
var prefix = _config.prefix;

var redis = _interopRequire(require("../../config/redis"));

var onNewPost = function (doc) {
    "use strict";
};

var onUpdatePost = function (doc) {
    "use strict";
};

var onPostRemove = function (doc) {
    "use strict";
};

var onVisitPost = function (doc) {
    "use strict";
    var cacheID = prefix.post + doc.slug;
    delete doc._id;
    redis.set(cacheID, JSON.stringify(doc));
};

module.exports = function (eventEmitter) {
    "use strict";

    eventEmitter.on(POST.NEW, onNewPost);
    eventEmitter.on(POST.UPDATE, onUpdatePost);
    eventEmitter.on(POST.REMOVE, onPostRemove);
    eventEmitter.on(POST.VISITED, onVisitPost);
};