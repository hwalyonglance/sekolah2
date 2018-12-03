"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var app_1 = require("./app");
var socket_io_1 = require("./socket-io");
var server = http_1.createServer(app_1.app);
var io = socket_io_1.createIOServer(server);
server.listen(3000, function () {
    console.log('http://localhost:3000');
});
