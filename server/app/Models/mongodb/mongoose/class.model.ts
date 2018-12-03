import { Model } from './model'
import * as Interface from '../../../../interfaces'
import * as Schema from '../../../../db/mongodb/mongoose/schema'

export class Class extends Model<Interface.Schema.Class> {
	constructor() {
		super('Class', Schema.Class)
	}
}
