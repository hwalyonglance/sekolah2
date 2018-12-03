import { create, ObjectId } from './schema';

export const ClassOfficer = create({
	name: {
		type: String,
		required: true,
		index: true
	},
	user: {
		type: ObjectId,
		ref: 'User'
	}
})

export const Class = create({
	name: {
		type: String,
		index: true,
		maxlength: 32,
		required: true,
		unique: true
	},
	angkatan: { // 9
		type: Number,
		default: 1,
		required: true
	},
	grade: { // 1 SD
		type: Number,
		required: true
	},
	jurusan: {
		type: ObjectId,
		ref: 'Jurusan'
	},
	students: [{
		type: ObjectId,
		ref: 'User'
	}],
	officers: [{
		type: ClassOfficer,
		required: true
	}]
});
