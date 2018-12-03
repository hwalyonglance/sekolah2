import { Router } from 'express';
import { Document } from 'mongoose'

import { Model } from '@sekolah/app/models/mongodb/mongoose'

export function router
	<ISchema extends Document> (
		model?: Model<ISchema>
	) {
	return Router()
}
