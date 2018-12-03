import { Schema } from './schema';
import { Jurusan } from './jurusan.schema';
import { User } from './user.schema';

export interface ClassOfficer extends Schema {
	name			?: string
	user			?: User
}

export interface Class extends Schema {
	name			?: string
	jurusan			?: Jurusan
	grade			?: number
	students		?: User[] // KM, WKM, Bendahara, Sekertaris
	angkatan		?: number // 9
}
