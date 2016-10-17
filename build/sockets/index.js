"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var socketIO = _interopRequire(require("socket.io"));

var initSocket = function (server) {
    "use strict";

    var io = socketIO(server);

    io.on("connection", function (socket) {
        console.log("welcome to socket");
    });
};

exports.initSocket = initSocket;