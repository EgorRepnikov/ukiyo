require('dotenv').config()

const { dragonrend } = require('dragonrend')
const { config } = require('./lib')

const { START } = dragonrend({
  autoIncluding: true,
  routing: {
    prefix: '/api'
  }
})

START(config.PORT, () => console.log(`Server has been started ${config.PORT}`))
