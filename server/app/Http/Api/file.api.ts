import { Request, Response, Router } from 'express';

import * as api from './api';
import { File } from '../../Models/mongodb/mongoose/file.model'

const model = new File
const router: Router = api.router(model)

export {
	model,
	router
}
