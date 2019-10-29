const express = require('express')
const app = express()
const usersAPI = require('./api/v1/users')

const PORT = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/v1/users', usersAPI)
app.get('*', (req, res) => {
  res.json({ msg: 'default' })
})

app.listen(PORT, () => {
  console.log('server listen', PORT)
})

module.exports = app
