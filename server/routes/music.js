// aka Reflection API
const symbols = require('dragonrend/lib/symbols')

const { routing, json } = require('dragonrend')
const { authenticate } = require('../lib')
const { getFilesList, pipeFile } = require('../storages')

const { GET } = module.exports = routing({ prefix: '/music' })

GET('/', authenticate, async ({ request: { query } }) => {
  const filesList = await getFilesList(query.storage, query.search)
  return json(filesList)
})

GET('/:fileId', authenticate, ({ request: { query, params }, response }) => {
  response[symbols.isSentS] = true
  pipeFile(query.storage, params.fileId, response[symbols.resS])
})
