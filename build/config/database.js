"use strict";

module.exports = {
    mongodb: {
        uri: "mongodb://localhost/bamboo",
        options: {
            db: {
                safe: true
            }
        }
    },
    port: process.env.NODE_PORT || 3000,
    socket: 8000
};
//# sourceMappingURL=database.js.map