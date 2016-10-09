'use strict';

export default {
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
