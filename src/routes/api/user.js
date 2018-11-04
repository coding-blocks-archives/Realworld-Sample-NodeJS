const {
  Router
} = require('express')
const {
  isAuthenticated
} = require('../../middlewares/acl')

const { updateUser } = require('../../controllers/users')

const route = Router()

route.get('/',
  isAuthenticated(),
  (req, res) => {
    // TODO
  }
)

route.put('/',
  isAuthenticated(),
  (req, res) => {
    updateUser(1, )
  }
)

module.exports = route
