import { Schema } from 'mongoose'

export function preSave(
	schema: Schema
) {
	schema.pre('save', function(next) {
		next()
	})
}
