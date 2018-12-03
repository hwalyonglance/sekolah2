import { Schema } from './schema';
import { Jurusan } from './jurusan.schema';

export interface Pelajaran extends Schema {
	name	?: string
	desc	?: string
}
