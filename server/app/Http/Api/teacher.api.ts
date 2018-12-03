import { Request, Response, Router } from 'express';

import * as api from './api';
import { Teacher } from '../../Models/mongodb/mongoose/teacher.model'

const model = new Teacher
const router: Router = api.router(model)

export {
	model,
	router
}
