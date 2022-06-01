const { Router } = require('express')
const notesRouter = require('./notes.routes')
const usersRoutes = require('./users.routes')

const routes = Router()


routes.use('/users', usersRoutes)
routes.use('/notes', notesRouter)


module.exports = routes