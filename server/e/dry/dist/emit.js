"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var socket_io_1 = require("./socket-io");
var emitRoute = express_1.Router();
exports.emitRoute = emitRoute;
emitRoute.get('', function (request, response) {
    socket_io_1.io.emit('emit from server');
    response.end('emitting to server');
});
