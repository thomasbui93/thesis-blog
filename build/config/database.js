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
    redis: {
        port: 6379
    },
    port: process.env.NODE_PORT || 3000,
    socket: 8000
};