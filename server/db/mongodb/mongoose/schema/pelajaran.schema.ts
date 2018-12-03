import { create, ObjectId } from './schema';

export const Pelajaran = create({
	name: {
		type: String,
		index: true,
		maxlength: 64,
		required: true,
		unique: true
	},
	desc: {
		type: String,
		default: '',
		maxlength: 10240
	}
});
