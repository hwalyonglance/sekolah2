import { Model } from './model'
import * as Interface from '../../../../interfaces'
import * as Schema from '../../../../db/mongodb/mongoose/schema'

export class User extends Model<Interface.Schema.User> {
	constructor() {
		super('User', Schema.User)
	}
}
