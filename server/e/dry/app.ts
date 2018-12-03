import * as express from 'express';
import { join } from 'path';

import { emitRoute } from './emit';

const app = express()

app.use('/node_modules', express.static(join(__dirname, '..', '..', '..', '..', 'node_modules')))
app.use(express.static(__dirname))

app.use('/emit', emitRoute)

export { app }
