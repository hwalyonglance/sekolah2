import { Request, Response, Router } from 'express';

import * as api from './api';
import { Jurusan } from '../../Models/mongodb/mongoose/jurusan.model'

const model = new Jurusan
const router: Router = api.router(model)

export {
	model,
	router
}
