const {
  app
} = require('./server')
const {
  db
} = require('./db')
const config = require('../config')


db.sync()
  .then(() => {

    app.listen(config.PORT, () => {
      console.log('Started on http://localhost:' + config.PORT)
    })

  })
  .catch(console.error)
