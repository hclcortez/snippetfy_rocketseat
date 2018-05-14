import session from 'express-session'
import sequelizeStore from 'connect-session-sequelize'
import { sequelize } from '../app/models'

const SequelizeStore = sequelizeStore(session.Store)

module.exports = {
  secret: 'snippetfyhclcortez',
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
}
