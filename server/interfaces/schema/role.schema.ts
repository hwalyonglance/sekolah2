import { Schema } from './schema';
import { User } from './user.schema';

export interface RoleActions extends Schema {
	create	?: boolean
	find	?: boolean
	patch	?: boolean
	delete	?: boolean
}

export interface Roles extends Schema {
	name	?: String
	actions	?: RoleActions
}

export interface Role extends Schema {
	user	?: User
	roles	?: Roles[]
}
