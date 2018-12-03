import { Router } from 'express'

import { Http } from '../app'

const Controller: Router = Router()
Controller.use('/', Http.Controller.router)

export {
	Controller
}
