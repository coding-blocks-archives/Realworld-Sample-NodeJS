const { Router } = require('express')


const route = Router()

route.use('/feed', require('./feed'))
route.use('/', require('./slug'))


route.get('/', (req ,res) => {
  // TODO
})

route.post('/', (req, res) => {
  // TODO
})


module.exports = route
