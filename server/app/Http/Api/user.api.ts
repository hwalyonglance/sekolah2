import { Request, Response, Router } from 'express';

import * as api from './api';
import { User } from '../../Models/mongodb/mongoose/user.model'

const model = new User
const router: Router = api.router(model)

export {
	model,
	router
}
