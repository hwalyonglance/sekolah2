import { Router } from 'express'

import { Http } from '../app'

const Api: Router = Router()
Api.use('/api', Http.Api.router)

export {
	Api
}
