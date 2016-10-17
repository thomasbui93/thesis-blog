import socketIO from 'socket.io';

const initSocket = (server)=>{
    "use strict";

    let io = socketIO(server);

    io.on('connection', function(socket){
        console.log('a user connected');
    });
}

export {initSocket};