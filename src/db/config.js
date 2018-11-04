const Sequelize = require('sequelize')
const config = require('../../config')
const SECRETS = config.SECRETS

const db = new Sequelize({
  dialect: config.DB.DIALECT,
  storage: SECRETS.DB.DATABASE
})

module.exports = {
  db
}
