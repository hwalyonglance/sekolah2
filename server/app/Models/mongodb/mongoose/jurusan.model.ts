import { Model } from './model'
import * as Interface from '../../../../interfaces'
import * as Schema from '../../../../db/mongodb/mongoose/schema'

export class Jurusan extends Model<Interface.Schema.Jurusan> {
	constructor() {
		super('Jurusan', Schema.Jurusan)
	}
}
