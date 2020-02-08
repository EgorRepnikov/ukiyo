require('dotenv').config()

const { dragonrend } = require('dragonrend')

const { START } = dragonrend({
  autoIncluding: true,
  routing: {
    prefix: '/api'
  }
})

START(8080, () => console.log('Server has been started'))
