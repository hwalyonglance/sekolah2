import { Schema } from './schema'
import { User } from './user.schema'

export interface File extends Schema {
	name		?: string
	uploadBy	?: User
	// shareTo		?: User[]
	desc		?: string
	size		?: number
	mime		?: string
	isImage		?: boolean
	height		?: number
	width		?: number
}
