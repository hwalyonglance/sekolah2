import { create, ObjectId } from './schema'

export const File = create({
	name: {
		type: String,
		index: true,
		maxlength: 128,
		required: true,
		unique: true
	},
	uploadBy: {
		type: ObjectId,
		ref: 'User'
	},
	// shareTo: [{
	// 	type: ObjectId,
	// 	ref: 'User'
	// }],
	desc: {
		type: String,
		default: '',
		maxlength: 1024
	},
	size: {
		type: Number,
		required: true
	},
	mime: {
		type: String,
		required: true
	},
	isImage: {
		type: Boolean,
		required: true
	},
	height: Number,
	width: Number
})
