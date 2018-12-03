// import * as Sequelize from 'sequelize'

// const env = require('../../env.json')
// const mode = env.app.env
// const dbs = env[mode].db
// const connections = dbs.connections.split('.')

// let connection: {[key: string]: string},
// 	conn: Sequelize.Sequelize

// if ( dbs.connections.toLowercase() === 'mysql.sequelize' ) {
// 	connection = dbs.connection['mysql']['sequelize']
// 	conn = new Sequelize(
// 		connection.name,
// 		connection.username,
// 		connection.password, {
// 			host: connection.host,
// 			dialect: 'mysql',
// 			pool: {
// 				max: 10,
// 				min: 0,
// 				acquire: 30000,
// 				idle: 10000
// 			}
// 		}
// 	)
// }
