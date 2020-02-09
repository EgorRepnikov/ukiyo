const symbols = require('dragonrend/lib/symbols')

module.exports = ctx =>
  ctx
    .response[symbols.resS]
    .setHeader('Access-Control-Allow-Origin', '*')
