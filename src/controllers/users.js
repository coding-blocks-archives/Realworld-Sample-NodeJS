const { Users } = require('../db')

async function findUserById(userId) {
  const user = await Users.findById(userId)
  return user
}

async function findUserByUsername(username) {
  const user = await Users.findOne({
    where: {
      username
    }
  })
  return user
}

async function createUser(username, email, password) {

  if (!username) {
    throw new Error('E102: username cannot be empty')
  }

  return await Users.create({
    username, email, password
  })
}

/**
 * update details of an user
 *
 * @param {number} userId id of user to change data of
 * @param {string?} email new email id (can be null)
 * @param {string?} bio profile summary
 * @param {string?} image url to image
 *
 */
async function updateUser(userId, email, bio, image) {

}

async function followUser(followerId, followeeUsername) {

}

async function unFollowUser(followerId, followeeUsername) {

}

module.exports = {
  findUserById,
  findUserByUsername,
  createUser,
  updateUser
}
