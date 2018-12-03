import * as SocketIO from 'socket.io'
import { Server } from 'http'

let io: SocketIO.Server = SocketIO();

function onConnection(){
	io.on('connection', (socket: SocketIO.Socket) => {
		console.log('socket connected')
	})
}

export function createIOServer(httpServer: Server) {
	io.attach(httpServer)
	onConnection()
	return io;
}

export { io }
