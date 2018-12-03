import { create, ObjectId } from './schema';
import { Role } from './role.schema'

export const User = create({
	bio: {
		type: String,
		maxlength: 256
	},
	email: {
		type: String,
		index: true,
		maxlength: 32,
		minlength: 8,
		required: true,
		unique: true
	},
	name: {
		type: String,
		maxlength: 64,
		minlength: 1,
		required: true
	},
	password: {
		type: String,
		maxlength: 32,
		minlength: 8,
		required: true
	},
	photo: {
		type: ObjectId,
		ref: 'File'
	},
	username: {
		type: String,
		index: true,
		maxlength: 32,
		minlength: 8,
		required: true,
		unique: true
	},
	state: {
		type: String,
		default: 'Waiting Confirmation',
		required: true,
		enum: ['Waiting Confirmation', 'Active', 'Ban']
	},
	website: {
		type: String,
		maxlength: 64
	}
});
