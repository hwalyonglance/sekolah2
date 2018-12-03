import { Request, Response, Router } from 'express';

import * as api from './api';
import { Role } from '../../Models/mongodb/mongoose/role.model'

const model = new Role
const router: Router = api.router(model)

export {
	model,
	router
}
