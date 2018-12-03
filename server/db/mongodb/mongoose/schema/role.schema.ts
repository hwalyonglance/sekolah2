import { create, ObjectId } from './schema';

export const RoleActions = create({
	create: {
		type: Boolean,
		default: false,
		required: true
	},
	read: {
		type: Boolean,
		default: false,
		required: true
	},
	update: {
		type: Boolean,
		default: false,
		required: true
	},
	delete: {
		type: Boolean,
		default: false,
		required: true
	}
});

export const Roles = create({
	name: {
		type: String,
		index: true,
		maxlength: 64,
		required: true,
		unique: true
	},
	actions: {
		type: RoleActions,
		required: true
	}
})

export const Role = create({
	user: {
		type: ObjectId,
		ref: 'User'
	},
	roles: [{
		type: Roles,
		required: true
	}]
});
