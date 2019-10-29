const USERS = require('./user.data')

// GET
const findUserById = (req, res, next) => {
  console.log('findUserById')
  res.json(USERS[0])
}
const getAllUsers = (req, res, next) => {
  console.log('getAllUsers')
  res.json(USERS)
}
// POST
const createUser = (req, res, next) => {
  console.log('createUser')
  res.json({ msg: 1 })
}
// PUT
const updateUser = (req, res, next) => {
  console.log('updateUser')
  res.json({ msg: 1 })
}
// DELETE
const removeUser = (req, res, next) => {
  console.log('removeUser')
  res.json({ msg: 1 })
}

module.exports = {
  findUserById,
  getAllUsers,
  createUser,
  updateUser,
  removeUser
}
