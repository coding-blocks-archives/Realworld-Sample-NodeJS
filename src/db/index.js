const {
  db
} = require('./config')

const Users = require('./models/users')

Users.belongsToMany(Users, {
  through: 'UserFollowers',
  as: 'Followers'
})


module.exports = {
  db,
  Users
}
