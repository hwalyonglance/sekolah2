import * as mongoose from 'mongoose';

export const {
	DocumentArray,
	Embedded,
	Mixed,
	ObjectId
} = mongoose.Schema.Types;

export interface Schema extends mongoose.Document {
	id			?: string
	createdAt	?: Date
	updatedAt	?: Date
}
