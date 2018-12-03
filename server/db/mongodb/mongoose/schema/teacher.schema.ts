import { create, ObjectId } from './schema';

export const Mengajar = create({
	jurusan: {
		type: ObjectId,
		ref: 'Jurusan'
	},
	pelajaran: {
		type: ObjectId,
		ref: 'Pelajaran'
	}
})

export const Teacher = create({
	user: {
		type: ObjectId,
		ref: 'User'
	},
	mengajar: [{
		type: Mengajar,
		required: true
	}]
});
