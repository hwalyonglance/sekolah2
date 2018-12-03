import { Request, Response, Router } from 'express';

import * as api from './api';
import { Class } from '../../Models/mongodb/mongoose/class.model'

const model = new Class
const router: Router = api.router(model)

export {
	model,
	router
}
