
module.exports = {
  PORT: process.env.PORT || 3000,
  DB: {
    DIALECT: 'sqlite'
  },
  SECRETS: require('./secrets.json')
}
