import { Request, Response, Router } from 'express';

import * as api from './api';
import { Pelajaran } from '../../Models/mongodb/mongoose/pelajaran.model'

const model = new Pelajaran
const router: Router = api.router(model)

export {
	model,
	router
}
