import express from 'express'
import authController from './controllers/authController'
import dashboardController from './controllers/dashboardController'
import authMiddleware from './middlewares/auth'
import guestMiddleware from './middlewares/guest'
import errorHandleMiddleware from './middlewares/errorHandle'
import categoryController from './controllers/categoryController'
import snippetController from './controllers/snippetController'

const routes = express.Router()

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success')
  res.locals.flashError = req.flash('error')
  next()
})

/**
* Auth
*/

routes.get('/', guestMiddleware, authController.signin)
routes.get('/signup', guestMiddleware, authController.signup)
routes.get('/signout', authController.signout)

routes.post('/register', authController.register)
routes.post('/authenticate', authController.authenticate)

/**
* Dashborad
*/

routes.use('/app', authMiddleware)
routes.get('/app/dashboard', dashboardController.index)

/**
 * Categories
 */

routes.get('/app/categories/:id', categoryController.show)
routes.post('/app/categories/create', categoryController.store)

/**
 * Snippets
 */
routes.get('/app/categories/:categoryId/snippets/:id', snippetController.show)
routes.post('/app/categories/:categoryId/snippets/create', snippetController.store)
routes.put('/app/categories/:categoryId/snippets/:id', snippetController.update)

routes.use((req, res) => res.render('errors/404'))
routes.use(errorHandleMiddleware)

export default routes

