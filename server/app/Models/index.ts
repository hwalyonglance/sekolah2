import { mongoose } from './mongodb'
// import * as mysql from './mysql'

// const env = require('../../env.json')
// const mode = env.app.env
// const dbs = env.env[mode].db
// const connections = dbs.connection.split('.')
// const connection = dbs.connection[connections[0]][connections[1]]

class seqClass {}

type ModelNameMap
	=	'Class'
	|	'File'
	|	'Jurusan'
	|	'Model'
	|	'Pelajaran'
	|	'Role'
	|	'Teacher'
	|	'User'


// function Model(name: ModelNameMap) {
// 	switch (connections[0]) {
// 		case 'mongodb':
// 			switch (connections[1]) {
// 				case 'mongoose':
// 					// return new mongoose[name]
// 			}
// 		case 'mysql':
// 			switch (connections[1]) {
// 				case 'sequelize':
// 					// return mysql.sequelize
// 					return new class Class{}
// 			}
// 		default:
// 			return new mongoose[name]
// 	}
// }

export {
	mongoose
}
