import { Model } from './model'
import * as Interface from '../../../../interfaces'
import * as Schema from '../../../../db/mongodb/mongoose/schema'

export class Pelajaran extends Model<Interface.Schema.Pelajaran> {
	constructor() {
		super('Pelajaran', Schema.Pelajaran)
	}
}
