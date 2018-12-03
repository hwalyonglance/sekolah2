import { Model } from './model'
import * as Interface from '../../../../interfaces'
import * as Schema from '../../../../db/mongodb/mongoose/schema'

export class Teacher extends Model<Interface.Schema.Teacher> {
	constructor() {
		super('Teacher', Schema.Teacher)
	}
}
