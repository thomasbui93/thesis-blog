"use strict";

var VISITOR = require("./config").VISITOR;

var visitorEnter = function () {
    "use strict";
};

var visitorWander = function (request) {
    "use strict";
    console.log("visitor from ", request.connection.remoteAddress);
};

module.exports = function (eventEmitter) {
    "use strict";
    eventEmitter.on(VISITOR.ENTER, visitorEnter);
    eventEmitter.on(VISITOR.WANDER, visitorWander);
};