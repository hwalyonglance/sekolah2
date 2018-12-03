import { Model } from './model'
import * as Interface from '../../../../interfaces'
import * as Schema from '../../../../db/mongodb/mongoose/schema'

export class Role extends Model<Interface.Schema.Role> {
	constructor() {
		super('Role', Schema.Role)
	}
}
