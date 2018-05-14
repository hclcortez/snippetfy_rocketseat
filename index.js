import express from 'express'
import bodyParser from 'body-parser'
import nunjucks from 'nunjucks'
import path from 'path'
import dotenv from 'dotenv'
import flash from 'connect-flash'
import session from 'express-session'

import sessionConfig from './config/session'

import routes from './app/routes'

dotenv.load()

const PORT = process.env.APP_PORT || 'development'

const app = express()

app.use(express.static(path.resolve('public')))

nunjucks.configure(path.resolve('app', 'resources', 'views'), {
  autoescape: true,
  express: app,
})

app.set('view engine', 'njk')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(flash())
app.use(session(sessionConfig))
app.use('/', routes)
app.listen(PORT, () => console.log('Server is running'))
