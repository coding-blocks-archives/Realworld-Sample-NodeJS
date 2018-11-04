const { Router } = require('express')
const {createUser} = require('../../controllers/users')

const route = Router()


route.post('/', async (req ,res) => {
  try {

    await createUser(
      req.body.user.username,
      req.body.user.email,
      req.body.user.password
    )
    res.status(201).send()

  } catch (e) {
    res.status(500).json({
      message: e.message
    })
  }
})

route.post('/login', (req ,res) => {
  // TODO
})


module.exports = route
