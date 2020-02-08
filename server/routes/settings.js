const { routing, json } = require('dragonrend')
const { authenticate } = require('../lib')
const { Settings } = require('../models')

const { GET, PUT } = module.exports = routing({ prefix: '/settings' })

GET('/storages', authenticate, async ctx =>
  json(await Settings.findOne({ user: ctx.user.id })))

PUT('/storages', authenticate, async ({ user, request: { body } }) => {
  return json(
    await Settings.findOneAndUpdate(
      { user: user.id },
      { $set: { body } },
      { new: true }
    )
  )
})
