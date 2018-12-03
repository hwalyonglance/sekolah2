import {
	Document,
	Model as MongooseModel,
	Schema
} from 'mongoose';

export interface Model<ISchema extends Document>{
	readonly collection: string
	readonly model: MongooseModel<ISchema>
	readonly schema: Schema
	create(doc: ISchema): Promise<ISchema>
	find(id: string): Promise<ISchema>
	findMany(id: string): Promise<ISchema[]>
	patch(id: string, doc: any): Promise<ISchema>
	patchMany(conditions: any, doc: any): Promise<ISchema[]>
	delete(id: string): Promise<ISchema>
	deleteMany(conditions: any): Promise<ISchema[]>
}
