// aka Reflection API
const symbols = require('dragonrend/lib/symbols')

const { routing, json } = require('dragonrend')
const { authenticate } = require('../lib')
const { getFilesList, pipeFile } = require('../storages')

const { GET } = module.exports = routing({ prefix: '/music' })

GET('/list', authenticate, async ({ request: { query } }) => {
  const filesList = await getFilesList(query.storage, query.folder)
  return json(filesList)
})

GET('/file', ({ request: { query }, response }) => {
  response[symbols.isSentS] = true
  pipeFile(query.storage, query.file, response[symbols.resS])
})
