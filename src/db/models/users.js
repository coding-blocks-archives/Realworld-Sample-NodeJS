const { db } = require('../config')
const Sequelize = require('sequelize')

module.exports = db.define('users', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  bio: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: ''
  },
})
