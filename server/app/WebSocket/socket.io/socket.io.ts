import * as SocketIO from 'socket.io'
import * as http from 'http'

let io: SocketIO.Server = SocketIO();

function onConnection(){
	io.on('connection', (socket: SocketIO.Socket) => {
		console.log('socket connected')
	})
}

export function createServer(server: http.Server) {
	io.attach(server)
	onConnection()
	return io;
}

export { io }
