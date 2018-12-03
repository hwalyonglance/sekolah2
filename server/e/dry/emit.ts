import { Request, RequestHandler, Response, Router } from 'express';

import { io } from './socket-io';

const emitRoute: Router = Router();

emitRoute.get('', (request: Request, response: Response) => {
	io.emit('emitted from server')
	response.end('emitting to server')
})

export { emitRoute }
