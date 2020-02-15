const { routing, json } = require('dragonrend')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { Settings, User } = require('../models')
const { config } = require('../lib')

const { POST } = module.exports = routing({ prefix: '/auth' })

POST('/register', async ({ request: { body: { email, password } } }) => {
  const user = await User.findOne({ email })
  if (user) {
    return json(400, { error: 'Email already exists' })
  }
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  const res = await new User({ email, password: hash }).save()
  await new Settings({ user: res._id, storages: [] })
  return json(201, res)
})

POST('/login', async ({ request: { body: { email, password } } }) => {
  const user = await User.findOne({ email })
  if (!user) {
    return json(400, { error: 'User with this email does not exist' })
  }
  const isMatch = await bcrypt.compare(password, user.password)
  if (isMatch) {
    const payload = {
      id: user.id,
      email: user.email
    }
    const token = jwt.sign(payload, config.secret, { expiresIn: 3600 * 24 })
    return json({ token })
  } else {
    return json(400, { error: 'Password incorrect' })
  }
})
