import { Schema, SchemaDefinition, SchemaOptions, Types } from 'mongoose';

export const {
	Buffer,
	Decimal128,
	DocumentArray,
	Embedded,
	Mixed,
	ObjectId
} = Schema.Types;

export function create(
	definition: SchemaDefinition,
	options?: SchemaOptions
	): Schema {
	return new Schema({
		_id: {
			type: Schema.Types.ObjectId,
			default: new Types.ObjectId(),
			index: true,
			required: true
		},
		createdAt: {
			type: Date,
			default: Date.now(),
			required: true
		},
		updatedAt: {
			type: Date,
			default: Date.now(),
			required: true
		},
		...definition
	}, options || {});
};
