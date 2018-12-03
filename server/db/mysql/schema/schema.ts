// import {
// 	DATE,
// 	DefineAttributes,
// 	DefineOptions,
// 	INTEGER,
// 	Model,
// 	Sequelize,
// 	STRING
// } from 'sequelize'

// export {
// 	DATE,
// 	DefineAttributes,
// 	DefineOptions,
// 	INTEGER,
// 	Model,
// 	Sequelize,
// 	STRING
// }

// export function create<TInstances = any, TAttributes = any>(
// 	modelName: string,
// 	attributes: DefineAttributes,
// 	options?: DefineOptions<TAttributes>
// ) {
// 	return (sequelize: Sequelize) => {
// 		return sequelize.define(modelName, {
// 			_id: STRING,
// 			createdAt: DATE,
// 			updatedAt: DATE,
// 			...attributes
// 		}, options)
// 	}
// }
