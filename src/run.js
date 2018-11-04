const { app } = require('./server')
const config = require('../config')

app.listen(config.PORT, () => {
  console.log('Started on http://localhost:' + config.PORT)
})
