import { Schema } from './schema'

export interface User extends Schema {
	bio			?: string;
	email		?: string;
	name		?: string;
	password	?: string;
	photo		?: string;
	username	?: string;
	state		?: 'Waiting Confirmation' | 'Active' | 'Ban'
	website		?: string;
}
