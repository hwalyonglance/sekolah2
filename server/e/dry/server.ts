import { createServer } from 'http';

import { app } from './app';
import { createIOServer } from './socket-io';

const server = createServer(app);

const io = createIOServer(server)

server.listen(3000, () => {
	console.log('http://localhost:3000')
})
