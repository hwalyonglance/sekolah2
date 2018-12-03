import { join } from 'path'
import * as express from 'express'
import * as compression from 'compression'
import * as httpErrors from 'http-errors'

import * as routes from '../routes'

// file:///D:/docs/expressjs.com/expressjs.com/en/advanced/best-practice-security.html
// npm i -g nsp snyk
// translate: bind, bound, approx/approximately, fetch

const Env = require('../env.json')

const App: express.Express = express()

App.use((request: express.Request, response: express.Response, next) => {
	response.set({
		'Access-Control-Allow-Headers': '*',
		'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
		'Access-Control-Allow-Origin': '*'
	})
	next()
})
App.set('trust proxy', 1)
App.use(compression({
	level: 9
}))
App.use(express.static(join(__dirname, 'public')))
App.use('/node_modules', express.static(join(__dirname, 'node_modules')))
App.use('/node_modules', express.static(join(__dirname, '..', 'node_modules')))
// App.use(expressSession({
// 	name: Env.app.name,
// 	secret: Env.app.key
// }))
App.use(express.json())
App.use(express.urlencoded({ extended: false, limit: '1024kb' }))

App.use(routes.Api)
App.use(routes.Controller)

// catch 404 and forward to error handler
App.use(function(request: express.Request, response: express.Response, next) {
	next(httpErrors(404));
})
// error handler
App.use(function(err, request: express.Request, response: express.Response, next) {
	// set locals, only providing error in development
	response.locals.message = err.message;
	response.locals.error = request.app.get('env') === 'development' ? err : {};

	// render the error page
	response.status(err.status || 500);
	response.render('error');
})


export {
	App
}
