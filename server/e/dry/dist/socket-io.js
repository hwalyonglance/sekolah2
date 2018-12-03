"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SocketIO = require("socket.io");
var io;
exports.io = io;
function onConnection() {
    io.on('connection', function (socket) {
        console.log('socket.io connection established');
    });
}
function createIOServer(server) {
    exports.io = io = SocketIO(server);
    onConnection();
    return io;
}
exports.createIOServer = createIOServer;
