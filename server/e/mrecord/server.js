"use strict";
exports.__esModule = true;
var express = require("express");
var http = require("http");
var path = require("path");
var socket = require("socket.io");
var app = express();
var server = http.createServer(app);
var io = socket(server);
app.use(express.static(__dirname));
app.use('/socket.io', express.static(path.join(__dirname, '..', '..', 'node_modules', 'socket.io-client', 'dist')));
io.on('connection', function (client) {
    console.log('sio ', client.id);
    client.on('stream', function (image) {
        client.broadcast.emit('stream', image);
    });
});
server.listen(3000, function () {
    console.log('http://localhost:3000');
});
