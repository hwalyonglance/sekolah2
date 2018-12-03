import { Model } from './model'
import * as Interface from '../../../../interfaces'
import * as Schema from '../../../../db/mongodb/mongoose/schema'

export class File extends Model<Interface.Schema.File> {
	constructor() {
		super('File', Schema.File)
	}
}
