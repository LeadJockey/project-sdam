const express = require('express')
const users = express.Router()
const controller = require('./user.controller')

users.get('/', controller.getAllUsers)
users.get('/:id', controller.findUserById)

users.post('/', controller.createUser)

users.put('/', controller.updateUser)

users.delete('/', controller.removeUser)

module.exports = users
