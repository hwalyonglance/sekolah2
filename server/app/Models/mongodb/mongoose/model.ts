import {
	Mongoose,
	createConnection,
	connect,
	Connection,
	ConnectionOptions,
	Document,
	Model as MongooseModel,
	Schema
} from 'mongoose';
import * as mongoose from 'mongoose'

import { Model as IModel } from '../../../../interfaces/model'

const env = require('../../../../env.json')
const mode = env.app.env
const dbs = env.env[mode].db
const connections = dbs.connection.split('.')

let connection = dbs.connections['mongodb']['mongoose'],
	auth: string,
	uri: string,
	connectionOptions: ConnectionOptions,
	conn: Connection

// if ( dbs.connections.join('.').toLowerCase() === 'mongodb.mongoose' ) {
	auth = connection.username === '' && connection.password == ''
				? '' : connection.username + ':' + connection.password
	uri = `mongodb://${auth}@${connection.host}:${connection.port}/${connection.name}`

	connectionOptions = {
		db: connection.name,
		pass: connection.password,
		user: connection.username,
		server: connection.host + ':' + connection.port
	}

	mongoose.connect(uri)
	conn = mongoose.connection
	conn.on('error', (err) => {
		console.error('failed to connect to mongodb server')
	});
	conn.once('open', () => {
		console.log('connected to mongodb server: ', uri)
	})
// }

export class Model
	<ISchema extends Document> implements
	IModel<ISchema> {
	readonly model: MongooseModel<ISchema>
	constructor(
		public readonly collection: string,
		public readonly schema: Schema,
	) {
		this.model = conn.model<ISchema>(collection, schema)
	}
	// ++++
	create(doc: ISchema) {
		return new this.model(doc).save()
	}
	// ????
	find(id: string) {
		return this.model.findById(id).exec()
	}
	findMany(conditions: any) {
		return this.model.find(conditions).exec()
	}
	// $$$$
	patch(id: string, doc: any) {
		return this.model.findByIdAndUpdate(id, doc).exec()
	}
	patchMany(conditions: any, doc: any) {
		return this.model.updateMany(conditions, doc).exec()
	}
	// xxxx
	delete(id: string) {
		return this.model.findByIdAndRemove(id).exec()
	}
	deleteMany(conditions: any) {
		return this.model.remove(conditions).exec()
	}
}
