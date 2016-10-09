"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var POST = require("./config").POST;

var redis = _interopRequire(require("../../config/redis"));

var onNewPost = function (doc) {
    "use strict";
    console.log("new post", doc._id);
};

var onUpdatePost = function (doc) {
    "use strict";
};

var onPostUpdate = function (doc) {
    "use strict";
};

module.exports = function (eventEmitter) {
    "use strict";

    eventEmitter.on(POST.NEW, onNewPost);
    eventEmitter.on(POST.UPDATE, onUpdatePost);
    eventEmitter.on(POST.REMOVE, onPostUpdate);
};