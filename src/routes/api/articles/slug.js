const { Router } = require('express')


const route = Router()

route.get('/:slug', (req ,res) => {
  // TODO
})

route.put('/:slug', (req ,res) => {
  // TODO
})

route.delete('/:slug', (req ,res) => {
  // TODO
})

route.post('/:slug/comments', (req ,res) => {
  // TODO
})

route.delete('/:slug/comments/:id', (req ,res) => {
  // TODO
})


route.post('/:slug/favourite', (req ,res) => {
  // TODO
})

route.delete('/:slug/favourite/', (req ,res) => {
  // TODO
})

module.exports = route
