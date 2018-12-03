import { Schema } from './schema';
import { Jurusan } from './jurusan.schema';
import { Pelajaran } from './pelajaran.schema';
import { User } from './user.schema';

export interface Mengajar extends Schema {
	jurusan: Jurusan
	Pelajaran: Pelajaran
}

export interface Teacher extends Schema {
	user		?: User
	mengajar	?: Mengajar[]
}
