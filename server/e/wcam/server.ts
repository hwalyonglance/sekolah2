import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import * as socket from 'socket.io';

const app = express();
const server = http.createServer(app)
const io = socket(server)

app.use(express.static(__dirname))
app.use('/socket.io', express.static(path.join(__dirname, '..', '..', 'node_modules', 'socket.io-client', 'dist')))

io.on('connection', (client) => {
	console.log('sio ', client.id)
	client.on('stream', function(image) {
		client.broadcast.emit('stream', image)
	})
})

server.listen(3000, () => {
	console.log('http://localhost:3000')
});
