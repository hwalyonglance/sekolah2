import { Request, Response, Router } from 'express'
import { Document } from 'mongoose'

import { SocketIO } from '../../WebSocket'

import { status } from '../../../lib/net/http/response'
// import { Model } from '../../Models'
import { Model as IModel } from '../../../interfaces/model'

export function router
	<ISchema extends Document> (
		model: IModel<ISchema>
	) {
		const io = SocketIO.io.of('/api/' + model.collection)
		return Router()
		.post('/', (request: Request, response: Response) => {
			const newDoc = request.body
			model
				.create(newDoc)
				.then((storedDoc) => {
					io.emit('valueChanges', { event: 'create', docs: [storedDoc] })
					status(response, 302, { storedDoc })
				})
				.catch((reason) => {
					status(response, 500, { reason })
				})
		})
		.get('/', (request: Request, response: Response) => {
			const queries = request.query || undefined
			if ( queries ) {
				model
					.findMany(queries)
					.then((doc) => {
						status(response, 302, { doc })
					})
					.catch((reason) => {
						status(response, 500, { reason })
					})
			} else {
				status(response, 400)
			}
		})
		.get('/:id', (request: Request, response: Response) => {
			const id = request.param('id')
			model
				.find(id)
				.then((doc) => {
					status(response, 302, { doc })
				})
				.catch((reason) => {
					status(response, 500, { reason })
				})
		})
		.patch('/', (request: Request, response: Response) => {
			const { conditions, set } = request.body
			model
				.patchMany(conditions, set)
				.then((updatedDocs) => {
					io.emit('valueChanges', { event: 'update', docs: updatedDocs })
					status(response, 200, { updatedDocs })
				})
				.catch((reason) => {
					status(response, 400, { reason })
				})
		})
		.patch('/:id', (request: Request, response: Response) => {
			const id = request.param('id') || undefined
			const { set } = request.body
			model
				.patch(id, set)
				.then((updatedDoc) => {
					io.emit('valueChanges', { event: 'update', docs: [updatedDoc] })
					status(response, 200, { updatedDoc })
				})
				.catch((reason) => {
					status(response, 400, { reason })
				})
		})
		.delete('/', (request: Request, response: Response) => {
			const conditions = request.body || undefined
			model
				.deleteMany(conditions)
				.then((deletedDocs) => {
					io.emit('valueChanges', { event: 'delete', docs: deletedDocs })
					status(response, 200, { deletedDocs })
				})
				.catch((reason) => {
					status(response, 500, { reason })
				})
		})
		.delete('/:id', (request: Request, response: Response) => {
			const id = request.param('id') || undefined
			model
				.delete(id)
				.then((deletedDoc) => {
					io.emit('valueChanges', { event: 'delete', docs: [deletedDoc] })
					status(response, 200, { deletedDoc })
				})
				.catch((reason) => {
					status(response, 500, { reason })
				})
		})
}
