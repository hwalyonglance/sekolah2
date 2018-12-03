import * as http from 'http'

import * as bootstrap from './bootstrap'
import * as App from './app'

const PORT = process.env.PORT || 3000
const server = http.createServer(bootstrap.App)
App.WebSocket.SocketIO.createServer(server)

server.listen(PORT, (err) => {
	if (err){
		console.error(new Error('Error when starting server'))
		console.error(err)
		return process.exit(1)
	}
	console.info(`server running on http://localhost:${PORT}`)
})
